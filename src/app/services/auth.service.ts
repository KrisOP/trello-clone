import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from '@environments/environment.prod';
import { switchMap, tap } from 'rxjs/operators';
import { TokenService } from './token.service';
import { ResponseLogin } from '@models/auth.model';
//import { HttpClientModule }

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  api = environment.API_URL;

  constructor( private http: HttpClient,
    private tokenSrv: TokenService
  ) { }

  login(email:string, password:string){
    return this.http.post<ResponseLogin>(this.api + '/api/v1/auth/login', {email, password})
    .pipe(
      //antes de retornar el token lo guardamos en el localstorage
      tap((res) => this.tokenSrv.saveToken(res.refresh_token))
    )
  }

  register(name:string, email:string, password:string){

    return this.http.post(this.api + '/api/v1/auth/register', {email, password, name})
  }

  registerAndLogin(name:string, email:string, password:string){

    return this.register(name, email, password)
    //si en el registro todo sale bien
    .pipe(
      switchMap(() => this.login(email, password))
    )

  }

  isAvailable( email:string){
    return this.http.post<{isAvailable:boolean}>(this.api + '/api/v1/auth/is-available', {email})
  }

  recovery( email:string){
    return this.http.post(this.api + '/api/v1/auth/recovery', {email})
  }

  changePassword(token:string, newPassword:string){
    return this.http.post(this.api + '/api/v1/auth/change-password', {token, newPassword})
  }

  logOut(){
      this.tokenSrv.removeToken();
  }

}
