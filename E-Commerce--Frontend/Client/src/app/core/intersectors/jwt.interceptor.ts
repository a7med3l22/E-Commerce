import {
    HttpRequest,
    HttpEvent,
    HttpInterceptorFn
  } from '@angular/common/http';
  import { inject } from '@angular/core';
  import { Observable, take } from 'rxjs';
  import { AccountService } from '../../account/account.service';
  
  export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
    const accountService = inject(AccountService);
    let token: string | undefined;
  
    accountService.currentUser$.pipe(take(1)).subscribe({
      next: (user) => (token = user?.token)
    });
  
    if (token) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }
  
    return next(req);
  };
  