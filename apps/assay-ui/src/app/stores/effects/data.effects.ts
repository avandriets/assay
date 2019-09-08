import { Injectable } from '@angular/core';
import { ModelsDataService } from '@assay-ui/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { ModelData } from '../../interfaces/model-data.interface';
import * as DataActions from '../actions/data.actions';

@Injectable()
export class DataEffects {

  public constructor(
    private actions: Actions,
    private dataService: ModelsDataService
  ) {}

  @Effect()
  loadData = this.actions.pipe(
    ofType(DataActions.ActionTypes.LoadDataBegin),
    switchMap(() => {

      return this.dataService.loadData().pipe(
        map(data => {

          let result = [];

          if (data && Array.isArray(data) && data.length > 0) {

            result = data.map(d => {

              const modelData: ModelData = {
                title: d.title,
                targetName: d.targetName,
                organismName: d.organismName,
                numActives: d.numActives,
                numCompounds: d.numCompounds,
                ROC: d.model.ROC,
                F1: d.model.F1,
                kappa: d.model.kappa,
                MCC: d.model.MCC,
                domainCompat: d.domainCompat,
                numInvalid: d.numInvalid,
              };

              return modelData;
            });

          }

          return new DataActions.LoadDataSuccess({ data: result });
        }),
        catchError(error =>
          of(new DataActions.LoadDataFailure({ error: error }))
        )
      );
    })
  );

}
