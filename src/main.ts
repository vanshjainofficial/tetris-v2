import { enableProdMode, ErrorHandler, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import * as Sentry from '@sentry/angular';
import { AppComponent } from '@angular-tetris/app.component';
import { environment } from './environments/environment';


if (environment.production) {
  enableProdMode();

}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(AkitaNgDevtools.forRoot()),
    {
      provide: ErrorHandler,
      useValue: Sentry.createErrorHandler()
    }
  ]
});
