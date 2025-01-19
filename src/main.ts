import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config'; // Importez `appConfig`
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig) // Utilisez `appConfig` ici
  .catch((err) => console.error(err));
