import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { TokenService } from '@services/token.service';

export const redirectGuard: CanActivateFn = (route, state) => {

  const tokenSrv = inject(TokenService);
  const router = inject(Router);

  // if (tokenSrv.isValidRefreshToken()) {
  //   router.navigate(['/app']);
  // }

  if (tokenSrv.isValidToken()) {
    router.navigate(['/app']);
  }

  return true;
};


