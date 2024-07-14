import { Injectable } from '@angular/core';
import { getCookie, removeCookie, setCookie } from 'typescript-cookie';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

// Suggested code may be subject to a license. Learn more: ~LicenseLog:3525879185.
  saveToken(token: string) {
    //localStorage.setItem('token', token);
    setCookie('token-trello', token, {expires:365, path: '/'});
  }

  getToken() {
    //return localStorage.getItem('token');
// Suggested code may be subject to a license. Learn more: ~LicenseLog:1493705240.
    return getCookie('token-trello')

  }

  removeToken() {
    //ocalStorage.removeItem('token');
    return removeCookie('token-trello')
  }
}
