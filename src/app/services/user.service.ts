import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { environment } from '@environments/environment';
import { User } from '@models/user.model';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs/internal/observable/throwError';
import { checkToken } from '@interceptors/token.interceptor';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  api = environment.API_URL;

  constructor(private http: HttpClient,
    private tokenSrv: TokenService) { }


    getUsers(){
    return this.http.get<User[]>(`${this.api}/api/v1/users`, { context: checkToken()});
    }

}
