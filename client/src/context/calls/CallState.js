import React, { useReducer } from "react";
import uuid from "uuid";
import CallContext from "./CallContext";
import CallReducer from "./CallReducer";
import {
  ADD_CALL,
  DELETE_CALL,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CALL,
  FILTER_CALL,
  CLEAR_FILTER
} from "../types";

const CallState = props => {
  const initalState = {
    calls: [
      {
        id: 1,
        req_by: "aaa",
        member_name: "Brian Bitchey",
        aaa_membership: "",
        member_phone: "555-555-5555",
        location: "",
        dest: "",
        aaa_call_num: "36589",
        enroute: "",
        on_location: "",
        in_tow: "",
        clear: "",
        mtv: "",
        tow_miles: "",
        t_code: "",
        membership_level: "",
        amount_collected: ""
      },
      {
        id: 2,
        req_by: "",
        member_name: "Dave Dumbass",
        aaa_membership: "",
        member_phone: "",
        location: "",
        dest: "",
        aaa_call_num: "32145",
        enroute: "",
        on_location: "",
        in_tow: "",
        clear: "",
        mtv: "",
        tow_miles: "",
        t_code: "",
        membership_level: "",
        amount_collected: ""
      },
      {
        id: 3,
        req_by: "",
        member_name: "Happy Gilmore",
        aaa_membership: "",
        member_phone: "",
        location: "",
        dest: "",
        aaa_call_num: "77777",
        enroute: "",
        on_location: "",
        in_tow: "",
        clear: "",
        mtv: "",
        tow_miles: "",
        t_code: "",
        membership_level: "",
        amount_collected: ""
      }
    ],
    current: null,
    filtered: null
  };

  const [state, dispatch] = useReducer(CallReducer, initalState);

  // add call
  const addCall = call => {
    call.id = uuid.v4();
    dispatch({ type: ADD_CALL, payload: call });
    console.log(call);
  };

  // delete call
  const deleteCall = id => {
    console.log("in action - delete", id);
    dispatch({ type: DELETE_CALL, payload: id });
  };
  // set current
  const setCurrent = call => {
    dispatch({ type: SET_CURRENT, payload: call });
  };

  // clear current
  const clearCurrent = call => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // update call
  const updateCall = call => {
    dispatch({ type: UPDATE_CALL, payload: call });
  };
  // filte call
  const filterCall = text => {
    dispatch({ type: FILTER_CALL, payload: text });
  };

  //clear filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };
  return (
    <CallContext.Provider
      value={{
        calls: state.calls,
        current: state.current,
        filtered: state.filtered,
        addCall,
        deleteCall,
        setCurrent,
        clearCurrent,
        updateCall,
        filterCall,
        clearFilter
      }}
    >
      {props.children}
    </CallContext.Provider>
  );
};

export default CallState;
