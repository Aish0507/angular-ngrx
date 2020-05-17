import { EventActions, EEventActions } from '../actions/event.actions';
import { IEventState, initialEventState } from '../state/event.state';

export const eventReducers = (
  state = initialEventState,
  action: EventActions
): IEventState => {
  switch (action.type) {
    case EEventActions.GetEventsSuccess: {
      return {
        ...state,
        events: action.payload
      };
    }
    case EEventActions.GetEventSuccess: {
      return {
        ...state,
        event: action.payload
      };
    }
    case EEventActions.UpdateEventSuccess: {
        const dataSet = state.events.filter((data, i) => {
          console.log(action.payload);
          if (data.id === action.payload['id']) {
            data.name = action.payload['name'];
          }
          return data;
        });
        return {
          ...state,
          events: dataSet
        };
      }

    default:
      return state;
  }
};
