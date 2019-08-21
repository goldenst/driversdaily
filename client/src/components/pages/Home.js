import React from "react";
import Calls from "../calls/Calls";
import CallForm from '../calls/CallForm';
import CallFilter from '../calls/CallFilter';

const Home = () => {
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
