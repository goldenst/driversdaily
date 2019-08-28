import React, { useState, useContext, useEffect } from "react";
import DailyWorkContext from "../../context/dailyWork/DailyWorkContext";

const DailyForm = () => {
  const dailyWorkContext = useContext(DailyWorkContext);

  const { addCall, current, updateCall, clearCurrent } = dailyWorkContext;

  useEffect(() => {
    if (current !== null) {
      setCall(current);
    } else {
      setCall({
        req_by: "",
        member_name: "",
        aaa_membership: "",
        member_phone: "",
        location: "",
        dest: "",
        aaa_call_num: "",
        enroute: "",
        on_location: "",
        in_tow: "",
        clear: "",
        mtv: "",
        tow_miles: "",
        t_code: "",
        membership_level: "",
        amount_collected: ""
      });
    }
  }, [dailyWorkContext, current]);

  const [call, setCall] = useState({
    req_by: "",
    member_name: "",
    aaa_membership: "",
    member_phone: "",
    location: "",
    dest: "",
    aaa_call_num: "",
    enroute: "",
    on_location: "",
    in_tow: "",
    clear: "",
    mtv: "",
    tow_miles: "",
    t_code: "",
    membership_level: "",
    amount_collected: ""
  });

  const {
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

  const onChange = e => setCall({ ...call, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (current === null) {
      addCall(call);
      console.log(call);
    } else {
      updateCall(call);
    }

    clearAll();

  
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-primary">{current ? "Edit Call" : "Add Call"}</h2>
      <input
        type="text"
        placeholder="Requested By"
        name="req_by"
        value={req_by}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Customer Name"
        name="member_name"
        value={member_name}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Customer Phone"
        name="member_phone"
        value={member_phone}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="AAA Mem#"
        name="aaa_membership"
        value={aaa_membership}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="AAA Call# / Cash Tag"
        name="aaa_call_num"
        value={aaa_call_num}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Pick up location"
        name="location"
        value={location}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Tow Destonation"
        name="dest"
        value={dest}
        onChange={onChange}
      />
      <div className="grid-4">
        <div>
          <input
            type="text"
            placeholder="10-8"
            name="enroute"
            value={enroute}
            onChange={onChange}
          />
          <input
            type="text"
            placeholder="MTV"
            name="mtv"
            value={mtv}
            onChange={onChange}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="10-97"
            name="on_location"
            value={on_location}
            onChange={onChange}
          />
          <input
            type="text"
            placeholder="Tow Miles"
            name="tow_miles"
            value={tow_miles}
            onChange={onChange}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="10-99"
            name="in_tow"
            value={in_tow}
            onChange={onChange}
          />
          <input
            type="text"
            placeholder="T-code"
            name="t_code"
            value={t_code}
            onChange={onChange}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="10-98"
            name="clear"
            value={clear}
            onChange={onChange}
          />
          <input
            type="text"
            placeholder="Mem level"
            name="membership_level"
            value={membership_level}
            onChange={onChange}
          />
        </div>
      </div>
      <input
        type="text"
        placeholder="Amount collected"
        name="amount_collected"
        value={amount_collected}
        onChange={onChange}
      />
      <div>
        <input
          type="submit"
          value={current ? "Update Call" : "Add Call"}
          className="btn btn-primary btn-block"
        />
      </div>
      {current && (
        <div>
          <button className="btn btn-light btn-block" onClick={clearAll}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

export default DailyForm
