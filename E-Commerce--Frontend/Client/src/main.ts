import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes'; // Import your routes
import { errorInterceptor } from './app/core/intersectors/error.interceptor';

bootstrapApplication(AppComponent, {
  providers: [
   
    provideHttpClient(
      withInterceptors([errorInterceptor]) // Use the interceptor directly here
    ),       // Provide HttpClient for API calls
    provideRouter(routes),     // Provide Router with the defined routes
  ],
}).catch(err => console.error(err));


