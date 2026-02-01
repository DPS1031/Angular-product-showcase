import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/Config/App.config';
import { AppComponent } from './app/Config/AppComponent';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
