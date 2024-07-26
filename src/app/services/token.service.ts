import { Injectable } from '@angular/core';

import { jwtDecode, JwtPayload } from 'jwt-decode';


import { getCookie, removeCookie, setCookie } from 'typescript-cookie';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  // Suggested code may be subject to a license. Learn more: ~LicenseLog:3525879185.
  saveToken(token: string) {
    //localStorage.setItem('token', token);
    setCookie('token-trello', token, { expires: 365, path: '/' });
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

  isValidToken() {

    const token = this.getToken();
    if (!token) {
      return false;
    }

    const decodeToken = jwtDecode<JwtPayload>(token);

    if (decodeToken && decodeToken?.exp) {
      const tokenDate = new Date(0);
      tokenDate.setUTCSeconds(decodeToken.exp);
      const now = new Date()
      return tokenDate.getTime() > now.getTime();
      //return Date.now() < decodeToken?.exp * 1000; 
    }

    return false

  }


  saveRefreshToken(token: string) {
    setCookie('refresh-token-trello', token, { expires: 365, path: '/' });
  }

  getRefreshToken() {

    return getCookie('refresh-token-trello')

  }

  removeRefreshToken() {
    return removeCookie('refresh-token-trello')
  }

  isValidRefreshToken() {

    const token = this.getRefreshToken();
    if (!token) {
      return false;
    }

    const decodeToken = jwtDecode<JwtPayload>(token);

    if (decodeToken && decodeToken?.exp) {
      const tokenDate = new Date(0);
      tokenDate.setUTCSeconds(decodeToken.exp);
      const now = new Date()
      return tokenDate.getTime() > now.getTime();
      //return Date.now() < decodeToken?.exp * 1000; 
    }

    return false

  }

}
