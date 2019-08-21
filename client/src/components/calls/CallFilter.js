import React, { useContext, useRef, useEffect } from "react";
import CallContext from "../../context/calls/CallContext";

const CallFilter = () => {
  const callContext = useContext(CallContext);

  const text = useRef("");

  const { filterCall, clearFilter, filtered } = callContext;

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

export default CallFilter;
