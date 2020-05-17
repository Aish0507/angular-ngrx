import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { environment } from '../../environments/environment';
import { withCache } from '@ngneat/cashew';
import { IEventHttp } from '../models/http-models/event-http.interface';
import { initialEventState } from '../store/state/event.state';
@Injectable()
export class EventService {
  eventURL = `${environment.apiUrl}events.json`;

  constructor(private _http: HttpClient) { }

  getEvents(): Observable<IEventHttp> {
    return this._http.get<IEventHttp>(this.eventURL);
  }
  updateEvents(action){
    // console.log();
    return action.payload;
  }
}
