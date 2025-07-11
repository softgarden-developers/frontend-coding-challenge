import {
  ApplicationConfig,
  provideZoneChangeDetection,
  isDevMode,
  importProvidersFrom,
} from '@angular/core';

import { provideState, provideStore, StoreModule } from '@ngrx/store';
import { EffectsModule, provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { PostEffects } from './post/store/post.effect';
import { postFeatureKey, postFeatureReducer } from './post/store/post.reducers';
export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(BrowserModule),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideStore(),
    provideHttpClient(),

    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),

    provideEffects(),
  ],
};
