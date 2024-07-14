import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { TokenService } from "@services/token.service";


export const AuthGuard: CanActivateFn = (route, state) => {

  const tokenSrv = inject(TokenService);
  const router = inject(Router);

  if (!tokenSrv.getToken()) {
    router.navigate(['/login']);
    return false;
  }

  return true;
};


