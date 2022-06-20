import React from "react";
import { useSelector } from "react-redux";
import loaderSrc from "../../assets/loader.gif";

export const Loader = () => {
  const { loader } = useSelector((state) => state);
  return (
    <div className="loader-conatiner">
      {loader && <img src={loaderSrc} alt="loader" />}
    </div>
  );
};
