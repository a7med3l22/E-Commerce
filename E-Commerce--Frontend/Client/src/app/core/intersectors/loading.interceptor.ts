import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { delay, finalize } from 'rxjs/operators'; // Correct import for RxJS operators
import { BusyService } from '../services/busy.service';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const busyService = inject(BusyService);

  // Notify BusyService that a request is active
  busyService.busy();

  return next(req).pipe(
    delay(1000), // Simulate a loading delay (optional)
    finalize(() => busyService.idle()) // Notify BusyService when request is complete
  );
};
