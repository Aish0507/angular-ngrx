
import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { IConfig } from '../../models/config.interface';
import { ConfigService } from './../../services/config.service';
import { EConfigActions, GetUserAccess, GetUserAccessSuccess } from '../actions/config.actions';

@Injectable()
export class ConfigEffects {
  @Effect()
  getUserAccess$ = this._actions$.pipe(
    ofType<GetUserAccess>(EConfigActions.GetUserAccess),
    switchMap(() => this._configService.getUserAccess()),
    switchMap((config: IConfig) => {
      return of(new GetUserAccessSuccess(config));
    })
  );

  constructor(
    private _configService: ConfigService,
    private _actions$: Actions) {}
}
