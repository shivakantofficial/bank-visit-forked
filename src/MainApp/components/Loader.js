import React from "react";
import loader from "../../assets/loader.gif";

export const Loader = () => {
  return (
    <div className="loader-conatiner">
      <img src={loader} alt="loader" />
    </div>
  );
};
