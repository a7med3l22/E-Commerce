import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes'; // Import your routes
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { errorInterceptor } from './app/core/intersectors/error.interceptor';
import { importProvidersFrom } from '@angular/core';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(
      withInterceptors([errorInterceptor]) // Use the interceptor directly here
    ),
    provideRouter(routes),  // Provide Router with the defined routes
    importProvidersFrom(BrowserAnimationsModule),  // Required for ngx-toastr animations
    importProvidersFrom(ToastrModule.forRoot()),   // Correct way to initialize ToastrModule
  ],
}).catch(err => console.error(err));
