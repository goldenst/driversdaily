import React, { useContext, useEffect } from "react";
import Calls from "../calls/Calls";
import CallForm from '../calls/CallForm';
import CallFilter from '../calls/CallFilter';
import AuthContext from '../../context/auth/AuthContext'

const Home = () => {
const authContext = useContext(AuthContext);

useEffect(() =>{
  authContext.loadUser();
  // eslint-disable-next-line
},[])

  return (
    <div className='grid-2'>
    <div>
      <CallForm />
    </div>
    <div>
      <CallFilter />
      <Calls />
    </div>
  </div>
  );
};

export default Home;
