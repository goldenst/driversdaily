import React, { useContext } from "react";
import PropTypes from "prop-types";
import CallContext from "../../context/calls/CallContext";

const CallItem = ({ call }) => {
  const callContext = useContext(CallContext);
  const { deleteCall, setCurrent, clearCurrent } = callContext;

  const { _id, req_by, member_name, aaa_call_num } = call;

  const onDelete = id => {
    //console.log('delete clicked',call)
    deleteCall(_id);
    clearCurrent();
    // console.log('clearCurrent clicked',call)
  };

  return (
    <div className="card bg-light">
      <h5 className="text-primary text-left">Call / Tag#: {aaa_call_num}</h5>
      <ul>
        <li>Requested by: {req_by}</li>
        <li>Customer: {member_name}</li>
      </ul>
      <p>
        <button
          className="btn btn-dark btn-sm"
          onClick={() => setCurrent(call)}
        >
          Edit
        </button>
     
      </p>
    </div>
  );
};

CallItem.propTypes = {
  call: PropTypes.object.isRequired
};

export default CallItem;
