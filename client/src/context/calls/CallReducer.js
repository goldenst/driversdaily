import {
  ADD_CALL,
  DELETE_CALL,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CALL,
  FILTER_CALL,
  CLEAR_FILTER,
  CALL_ERROR,
  GET_CALLS,
  CLEAR_CALLS
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_CALLS:
      return {
        ...state,
        calls: action.payload,
        loading: false
      };
    case ADD_CALL:
      console.log("in reducer", action.payload);
      return {
        ...state,
        calls: [action.payload, ...state.calls ],
        loading: false
      };

    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      };
    case UPDATE_CALL:
      return {
        ...state,
        calls: state.calls.map(call =>
          call._id === action.payload._id ? action.payload : call
        ),
        loading: false
      };
    case DELETE_CALL:
      console.log("in reducer", action.payload);
      return {
        ...state,
        calls: state.calls.filter(call => call._id !== action.payload),
        loading: false
      };
    case CLEAR_CALLS:
      return {
        ...state,
        calls: null,
        filtered: null,
        error: null,
        current: null
      };
    case FILTER_CALL:
      return {
        ...state,
        filtered: state.calls.filter(call => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return (
            call.aaa_call_num.match(regex) || call.member_name.match(regex)
          );
        })
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null
      };
    case CALL_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
