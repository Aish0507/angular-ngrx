import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './events.component';
import { Routes, RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { eventReducers } from '../../store/reducers/event.reducers';
import { EventService } from '../../services/events.service';
import { EventEffects } from '../../store/effects/event.effects';
const routes: Routes = [
  { path: '', component: EventsComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('events', eventReducers),
    EffectsModule.forFeature(
      [ EventEffects ]
    )
  ],
  declarations: [EventsComponent],
  providers: [EventService],

})
export class EventsModule { }
