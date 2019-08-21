import React, { useContext } from "react";
import PropTypes from "prop-types";
import CallContext from "../../context/calls/CallContext";


const CallItem = ({ call }) => {
  const callContext = useContext(CallContext);
  const { deleteCall, setCurrent, clearCurrent } = callContext;

  const {
    id,
    req_by,
    member_name,
    aaa_membership,
    member_phone,
    location,
    dest,
    aaa_call_num,
    enroute,
    on_location,
    in_tow,
    clear,
    mtv,
    tow_miles,
    t_code,
    membership_level,
    amount_collected
  } = call;

  const onDelete = id => {
    //console.log('delete clicked',call)
    deleteCall(id);
    clearCurrent();
   // console.log('clearCurrent clicked',call)
  };

  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">Cust: {member_name}</h3>
      <ul>
        <li>Call Number: {aaa_call_num}</li>
      </ul>
      <p>
        <button className="btn btn-dark btn-sm" onClick={()=> setCurrent(call)} >Edit</button>
        <button className="btn btn-danger btn-sm" onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
};

CallItem.propTypes = {
  call: PropTypes.object.isRequired
};

export default CallItem;
