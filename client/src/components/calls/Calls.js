import React, { Fragment, useContext } from "react";
import CallContext from "../../context/calls/CallContext";
import Callitem from "../calls/CallItem";

const Calls = () => {
  const callContext = useContext(CallContext);

  const { calls, filtered } = callContext;

  if (calls.lengeth === 0) {
    return <h4>Please Add a Call</h4>;
  }

  return (
    <Fragment>
      {filtered !== null
        ? filtered.map(call => <Callitem call={call} key={call.id} />)
        : calls.map(call => <Callitem call={call} key={call.id} />)}
    </Fragment>
  );
};

export default Calls;
