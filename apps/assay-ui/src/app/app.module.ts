import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatTableModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { CoreModule } from '@assay-ui/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { routes } from './app.route';
import { components } from './components';
import { containers } from './containers';
import { effects } from './stores/effects';
import { metaReducers, reducers } from './stores/reducers';

@NgModule({
  declarations: [
    AppComponent,

    ...containers,
    ...components,
  ],
  imports: [
    RouterModule.forRoot(routes, {
      relativeLinkResolution: 'corrected',
    }),
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    CoreModule.forRoot(),

    BrowserModule,
    BrowserAnimationsModule,

    FlexLayoutModule,

    MatButtonModule,
    MatTableModule,

    StoreModule.forRoot(reducers, {metaReducers}),
    EffectsModule.forRoot(effects)
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule {
}
