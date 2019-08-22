import React, { Fragment, useContext, useEffect } from "react";
import CallContext from "../../context/calls/CallContext";
import Callitem from "../calls/CallItem";
import Preloader from '../layout/Preloader';

const Calls = () => {
  const callContext = useContext(CallContext);

  const { calls, filtered, getCalls, loading } = callContext;

  useEffect(() => {
    getCalls();
    // eslint-disable-next-line
  }, [])

  if (calls !== null &&  calls.lengeth === 0 && !loading) {
    return <h4>Please Add a Call</h4>;
  }

  return (
    <Fragment>
      {calls !== null && !loading ? ( filtered !== null
        ? filtered.map(call => <Callitem call={call} key={call._id} />)
        : calls.map(call => <Callitem call={call} key={call._id} />)) : <Preloader />}
     
    </Fragment>
  );
};

export default Calls;
