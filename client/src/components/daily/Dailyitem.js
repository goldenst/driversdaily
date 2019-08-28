import React, { useContext } from "react";
import PropTypes from "prop-types";


import AuthContext from "../../context/auth/AuthContext";
import DailyWorkContext from "../../context/dailyWork/DailyWorkContext";

const Dailyitem = ({ call }) => {
  const authContext = useContext(AuthContext);
  const dailyWorkContext = useContext(DailyWorkContext);
  const { deleteCall, setCurrent, clearCurrent } = dailyWorkContext;

  const { _id, req_by, member_name, aaa_call_num, amount_collected } = call;
  const { isAuthenticated, user } = authContext;

  const onDelete = id => {
    //console.log('delete clicked',call)
    deleteCall(_id);
    clearCurrent();
    // console.log('clearCurrent clicked',call)
  };

  return (
    <div className="table">
      <h5 className="text-primary text-left">Call / Tag#: {aaa_call_num}</h5>
      <ul>
      <li>Driver: {user.name}</li>
        <li>Requested by: {req_by}</li>
        <li>Customer: {member_name}</li>
        <li>Amount: ${amount_collected}</li>
      </ul>
      <p>
        <button
          className="btn btn-dark btn-sm"
          onClick={() => setCurrent(call)}
        >
          Edit
        </button>
        <button className="btn btn-danger btn-sm" onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
};

Dailyitem.propTypes = {
  call: PropTypes.object.isRequired
};


export default Dailyitem
