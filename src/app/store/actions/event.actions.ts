import { Action } from '@ngrx/store';
import { IEvent } from '../../models/event.interface';


export enum EEventActions {
    GetEvent = '[Event] Get Event',
    GetEventSuccess = '[Event] Get Event Success',
    GetEvents = '[Events] Get Events',
    GetEventsSuccess = '[Events] Get Events Success',
    UpdateEvent = '[Events] Update Event info',
    UpdateEventSuccess = '[Events] Update Event info Success'
}
export class GetEvents implements Action {
    public readonly type = EEventActions.GetEvents;
}

export class GetEventsSuccess implements Action {
    public readonly type = EEventActions.GetEventsSuccess;
    constructor(public payload: IEvent[]) { }
}

export class GetEvent implements Action {
    public readonly type = EEventActions.GetEvent;
    constructor(public payload: number) { }
}

export class GetEventSuccess implements Action {
    public readonly type = EEventActions.GetEventSuccess;
    constructor(public payload: IEvent) { }
}

export class UpdateEvent implements Action {
    public readonly type = EEventActions.UpdateEvent;
    constructor(public payload: IEvent[]) { }
}
export class UpdateEventSuccess implements Action {
    public readonly type = EEventActions.UpdateEventSuccess;
    constructor(public payload: IEvent[]) { }
}

export type EventActions = GetEvents | GetEventsSuccess | GetEvent | GetEventSuccess | UpdateEvent | UpdateEventSuccess;
