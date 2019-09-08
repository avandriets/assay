import { Component, Input } from '@angular/core';

import { ModelData } from '../../interfaces/model-data.interface';

@Component({
  selector: 'assay-ui-models-list',
  templateUrl: './models-list.component.html',
  styleUrls: ['./models-list.component.scss']
})
export class ModelsListComponent {

  @Input() models: ModelData[];

  public displayedColumns: string[] =   [ 'title', 'targetName', 'organismName', 'numActives',
    'numCompounds', 'ROC', 'F1', 'kappa', 'MCC', 'domainCompat', 'numInvalid'];

}
