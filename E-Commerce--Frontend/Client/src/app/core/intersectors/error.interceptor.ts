// error.interceptor.ts
import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';  // Import inject
import { throwError } from 'rxjs';
import { catchError } from 'rxjs';
import { HttpInterceptorFn } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

// Define the interceptor function with Router injected
export const errorInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn) => {
  const router = inject(Router);  // Inject Router using the inject function
   const toastr = inject(ToastrService);  
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
      if(error.status==401)
      {
         toastr.error(error.error.message,error.status.toString())
      }
      if(error.status==400)
        {
           toastr.error(error.error.message,error.status.toString())
        }
      return throwError(() => new Error(error.message));
    })
  );
};
