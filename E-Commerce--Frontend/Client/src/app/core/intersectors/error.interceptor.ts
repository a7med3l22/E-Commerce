import {
  HttpRequest,
  HttpEvent,
  HttpInterceptorFn,
  HttpErrorResponse
} from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { catchError, throwError, Observable } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);
  const toastr = inject(ToastrService);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error) {
        if (error.status === 401) {
          toastr.error(error.error.message, error.status.toString());
        }
        if (error.status === 400) {
          if (error.error.errors) {
            throw error.error;
          } else {
            toastr.error(error.error.message, error.status.toString());
          }
        }
        if (error.status === 404) {
        //  router.navigateByUrl('/not-found');
        }
        if (error.status === 500) {
          const navigationExtras = { state: { error: error.error } };
          router.navigateByUrl('/server-error', navigationExtras);
        }
      }
      return throwError(() => new Error(error.message));
    })
  );
};
