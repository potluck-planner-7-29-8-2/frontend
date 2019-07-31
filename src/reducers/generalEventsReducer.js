import {
  GETTING_EVENTS,
  GOT_EVENTS,
  EVENTS_ERROR,
  CREATED_EVENT,
  CREATING_EVENT,
  CREATING_EVENT_ERROR,
  DELETING_EVENT,
  DELETED_EVENT,
  DELETING_EVENT_ERROR,
  UPDATING_EVENT,
  UPDATED_EVENT,
  UPDATING_EVENT_ERROR,
  LOGOUT
} from "../actions";

/*
State shape:
events: {
        data: [{
            event_id: '',
            organizer_id: '',
            event_name: '',
            date: '',
            time: '',
            description: '',
            address: '',
            city: '',
            state: '',
        }],
        errorMessage: '',
        isEventsLoading: false
    },
*/

export const eventsReducer = (state, { type, payload }) => {
  switch (type) {
    case GETTING_EVENTS:
      return {
        ...state,
        data: [],
        errorMessage: "",
        isEventsLoading: true
      };
    case GOT_EVENTS:
      return {
        ...state,
        isEventsLoading: false,
        data: payload
      };
    case EVENTS_ERROR:
      return {
        ...state,
        isEventsLoading: false,
        errorMessage: payload
      };
    case CREATING_EVENT:
      return {
        ...state,
        isEventsLoading: true
      };
    case CREATED_EVENT:
      return {
        ...state,
        data: payload,
        isEventsLoading: false
      };
    case CREATING_EVENT_ERROR:
      return {
        ...state,
        isEventsLoading: false,
        errorMessage: payload
      };
    case DELETING_EVENT:
      return {
        ...state,
        isEventsLoading: true
      };
    case DELETED_EVENT:
      return {
        ...state,
        isEventsLoading: false,
        data: payload
      };
    case DELETING_EVENT_ERROR:
      return {
        ...state,
        isEventsLoading: false,
        errorMessage: payload
      };
    case UPDATING_EVENT:
      return {
        ...state,
        isEventsLoading: true
      };
    case UPDATED_EVENT:
      return {
        ...state,
        isEventsLoading: false,
        data: payload
      };
    case UPDATING_EVENT_ERROR:
      return {
        ...state,
        isEventsLoading: false,
        errorMessage: payload
      };
    default:
      return state;
  }
};
