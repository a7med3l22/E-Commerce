// error.interceptor.ts
import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';  // Import inject
import { throwError } from 'rxjs';
import { catchError } from 'rxjs';
import { HttpInterceptorFn } from '@angular/common/http';

// Define the interceptor function with Router injected
export const errorInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn) => {
  const router = inject(Router);  // Inject Router using the inject function
  
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status == 404) {
        // Navigate to 'not-found' page on 404 error
        router.navigateByUrl('/not-found');
      }
      if (error.status == 500) {
        // Navigate to 'server-error' page on 500 error
        router.navigateByUrl('/server-error');
      }
      return throwError(() => new Error(error.message));
    })
  );
};
