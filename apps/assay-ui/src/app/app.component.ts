import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppActions } from './stores/actions';
import { AppState } from './stores/reducers';

@Component({
  selector: 'assay-ui-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public constructor(
    private store: Store<AppState>
  ) {
  }

  public ngOnInit(): void {

    this.store.dispatch(new AppActions.LoadDataBegin())

  }

}
