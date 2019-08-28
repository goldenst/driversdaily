import React, { useContext, useRef, useEffect } from "react";
import DailyWorkContext from "../../context/dailyWork/DailyWorkContext";

const DailyFilter = () => {
  const dailyWorkContext = useContext(DailyWorkContext);

  const text = useRef("");

  const { filterCall, clearFilter, filtered } = dailyWorkContext;

  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  });

  const onChange = e => {
    if (text.current.value !== "") {
      filterCall(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form>
      <input
        ref={text}
        type="text"
        placeholder="Filter Calls... by Call Number or Customer"
        onChange={onChange}
      />
    </form>
  );
};


export default DailyFilter
