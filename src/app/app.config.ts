import { APP_INITIALIZER, ApplicationConfig, inject, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, Scroll, withEnabledBlockingInitialNavigation } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { IconService } from '../services/icon.service';
import { HTTP_INTERCEPTORS, provideHttpClient, withFetch } from '@angular/common/http';
import { HttpInterceptorService } from '../services/http-interceptor.service';

// Prime Ng Imports
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';

export function initializeIcons(iconService: IconService): () => void {
  return () => { };
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: "'.my-app-dark'",
          cssLayer: {
            name: 'primeng',
            order: 'app-styles primeng'
          }
        }
      }
    }),
    provideHttpClient(withFetch()),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withEnabledBlockingInitialNavigation()
    ),
    provideClientHydration(withEventReplay()),
    {
      provide: APP_INITIALIZER,
      useFactory: initializeIcons,
      deps: [IconService],
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    },
  ]
};
