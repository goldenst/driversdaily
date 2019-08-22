import React, { useReducer } from "react";
import axios from "axios";
import CallContext from "./CallContext";
import CallReducer from "./CallReducer";
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

const CallState = props => {
  const initalState = {
    calls: null,
    current: null,
    filtered: null,
    error: null
  };

  const [state, dispatch] = useReducer(CallReducer, initalState);

  // get calls
  const getCalls = async () => {
    try {
      const res = await axios.get("/api/calls");

      dispatch({ type: GET_CALLS, payload: res.data });
    } catch (err) {
      console.log(err);
      dispatch({
        type: CALL_ERROR,
        payload: err.responce.msg
      });
    }
  };

  // add call
  const addCall = async call => {
    const config = {
      headers: {
        "Content-type": "application/json"
      }
    };

    try {
      const res = await axios.post("/api/calls", call, config);

      dispatch({ type: ADD_CALL, payload: res.data });
    } catch (err) {
      console.log(err);
      dispatch({
        type: CALL_ERROR,
        payload: err.responce.msg
      });
    }
    //console.log(call);
  };

  // delete call
  const deleteCall = async id => {
    try {
      await axios.delete(`/api/calls/${id}`);
      //console.log("in action - delete", id);

      dispatch({ type: DELETE_CALL, payload: id });
    } catch (err) {
     // console.log(err);
      dispatch({
        type: CALL_ERROR,
        payload: err.responce.msg
      });
    }
  };

  // update call
  const updateCall =  async call => {
    const config = {
      headers: {
        "Content-type": "application/json"
      }
    };

    try {
      const res = await axios.put(`/api/calls/${call._id}`, call, config);

      dispatch({ type: UPDATE_CALL, payload: res.data });
    } catch (err) {
      console.log(err);
      dispatch({
        type: CALL_ERROR,
        payload: err.responce.msg
      });
    }
    //console.log(call);
  };

  // clear calls
  const clearCalls = () => {
    dispatch({ type: CLEAR_CALLS });
  };

  // set current
  const setCurrent = call => {
    dispatch({ type: SET_CURRENT, payload: call });
  };

  // clear current
  const clearCurrent = call => {
    dispatch({ type: CLEAR_CURRENT });
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
        error: state.error,
        addCall,
        deleteCall,
        setCurrent,
        clearCurrent,
        updateCall,
        filterCall,
        clearFilter,
        getCalls,
        clearCalls
      }}
    >
      {props.children}
    </CallContext.Provider>
  );
};

export default CallState;
