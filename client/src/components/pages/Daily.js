import React, { useContext, useEffect } from "react";
import Dailys from "../daily/Daily";
import DailyForm from '../daily/DailyForm';
import DailyFilter from '../daily/DailyFilter';
import AuthContext from '../../context/auth/AuthContext'


const Daily = () => {
  const authContext = useContext(AuthContext);

  useEffect(() =>{
    authContext.loadUser();
    // eslint-disable-next-line
  },[])
  
    return (
      <div className='grid-2'>
      <div>
        <DailyForm />
      </div>
      <div>
        <DailyFilter />
        Daily Work 
        <Dailys />
      </div>
    </div>
    );
  };

export default Daily
