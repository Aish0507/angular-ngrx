import { IEvent } from '../../models/event.interface';

export interface IEventState {
  events: IEvent[];
  event: any;
}

export const initialEventState: IEventState = {
  events: [{
    'name': null,
    'id': null
  }],
  event: {
    'name': null
  }
};


