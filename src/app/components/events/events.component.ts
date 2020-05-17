import { Component, OnInit } from '@angular/core';
import { IAppState } from 'src/app/store/state/app.state';
import { Store, select } from '@ngrx/store';
import { getEvents } from 'src/app/store/selectors/event.selector';
import { GetEvents, UpdateEvent } from 'src/app/store/actions/event.actions';
import { Observable } from 'rxjs';
import { IUserState } from 'src/app/store/state/user.state';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events$ = this._store.pipe(select(getEvents));
  userList$: Observable<IUserState>;
  
  constructor(private _store: Store<IAppState>) { }

  ngOnInit() {
    this._store.dispatch(new GetEvents());
    // this._store.dispatch(new UpdateEvent({name: 'Aishvarya'}, 1));
    this._store.select('users').subscribe((data: any) => {
      console.log(data);
      this.userList$ = data.selectedUser;
    });
  }

}
