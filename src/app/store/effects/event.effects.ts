import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { EEventActions, GetEvents, GetEventsSuccess, UpdateEvent, UpdateEventSuccess } from '../actions/event.actions';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { IEventHttp } from '../../models/http-models/event-http.interface';
import { IAppState } from '../state/app.state';
import { Store } from '@ngrx/store';
import { EventService } from '../../services/events.service';

@Injectable()
export class EventEffects {
    @Effect()
    getEvents$ = this._actions$.pipe(
        ofType<GetEvents>(EEventActions.GetEvents),
        switchMap(() => this._eventService.getEvents()),
        switchMap((eventHttp: IEventHttp) => of(new GetEventsSuccess(eventHttp.events)))
    );

    @Effect()
    updateEventss$ = this._actions$.pipe(
        ofType<UpdateEvent>(EEventActions.UpdateEvent),
        switchMap((action) => this._eventService.updateEvents(action)),
        switchMap((eventHttp: any) => of(new UpdateEventSuccess(eventHttp)))
    );

    constructor(
        private _eventService: EventService,
        private _actions$: Actions,
        private _store: Store<IAppState>
    ) { }
}
