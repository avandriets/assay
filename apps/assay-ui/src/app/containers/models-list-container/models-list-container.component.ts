import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ModelData } from '../../interfaces/model-data.interface';
import { AppState, getAllItems } from '../../stores/reducers';

@Component({
  selector: 'assay-ui-models-list-container',
  templateUrl: './models-list-container.component.html',
  styleUrls: ['./models-list-container.component.scss']
})
export class ModelsListContainerComponent {

  public modelsData: Observable<ModelData[]>;

  public constructor(
    private store: Store<AppState>
  ) {
    this.modelsData = this.store.select(getAllItems);
  }

}
