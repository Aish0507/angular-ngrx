import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromRoot from '../state/app.state';
import { IEvent } from '../../models/event.interface';

// Extends the app state to include the event feature.
// This is required because events are lazy loaded.
// So the reference to eventState cannot be added to app.state.ts directly.
export interface State extends fromRoot.IAppState {
    events: IEvent[];
}
// Selector functions
const getEventFeatureState = createFeatureSelector<IEvent[]>('events');

export const getEvents = createSelector(
    getEventFeatureState,
    state => state
);
