import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { IAppState } from './store/state/app.state';
import { GetUserAccess } from './store/actions/config.actions';
import { selectConfig } from './store/selectors/config.selector';
import { UpdateEvent } from './store/actions/event.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-ngrx';
  config$ = this._store.pipe(select(selectConfig));

  constructor(private _store: Store<IAppState>) {}

  ngOnInit() {
    this._store.dispatch(new GetUserAccess());
  }
  update() {
    this._store.dispatch(new UpdateEvent([{name: `Shri-${Math.random() * 100}`, id: 3}]));
  }
}
