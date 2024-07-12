import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from '@environments/environment.prod';
import { switchMap } from 'rxjs/operators';
//import { HttpClientModule }

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  api = environment.API_URL;

  constructor( private http: HttpClient) { }

  login(email:string, password:string){
    return this.http.post(this.api + '/api/v1/auth/login', {email, password})

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

}
