import React, { Fragment, useContext, useEffect } from "react";
import DailyWorkContext from "../../context/dailyWork/DailyWorkContext";
import Dailyitem from "../daily/Dailyitem";
import Preloader from '../layout/Preloader';

const Dailys = () => {
  const dailyWorkContext = useContext(DailyWorkContext);

  const { calls, filtered, getCalls, loading } = dailyWorkContext;

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
        ? filtered.map(call => <Dailyitem call={call} key={call._id} />)
        : calls.map(call => <Dailyitem call={call} key={call._id} />)) : <Preloader />}
     
    </Fragment>
  );
};

export default Dailys
