import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { services } from './services';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [],
})
export class CoreModule {

  public static forRoot(): ModuleWithProviders {

    return {
      ngModule: CoreModule,
      providers: [

        ...services,

      ],
    };

  }

}
