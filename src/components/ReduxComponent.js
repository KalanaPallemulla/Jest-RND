import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "../redux/actions";

const ReduxComponent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);
  return <div>ReduxComponent</div>;
};

export default ReduxComponent;
