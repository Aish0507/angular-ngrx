import { Action } from '@ngrx/store';

import { IConfig } from '../../models/config.interface';

export enum EConfigActions {
  GetUserAccess = '[Access] Get User Access',
  GetUserAccessSuccess = '[Access] Get User Access Success'
}

export class GetUserAccess implements Action {
  public readonly type = EConfigActions.GetUserAccess;
}

export class GetUserAccessSuccess implements Action {
  public readonly type = EConfigActions.GetUserAccessSuccess;
  constructor(public payload: IConfig) {}
}

export type ConfigActions =
  | GetUserAccess
  | GetUserAccessSuccess;

