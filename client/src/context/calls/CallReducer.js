import {
  ADD_CALL,
  DELETE_CALL,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CALL,
  FILTER_CALL,
  CLEAR_FILTER
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case ADD_CALL:
      console.log("in reducer", action.payload);
      return {
        ...state,
        calls: [...state.calls, action.payload]
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
          call.id === action.payload.id ? action.payload : call
        )
      };
    case DELETE_CALL:
      console.log("in reducer", action.payload);
      return {
        ...state,
        calls: state.calls.filter(call => call.id !== action.payload)
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
    default:
      return state;
  }
};
