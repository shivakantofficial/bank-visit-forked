import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import get from "lodash/get";
import { updateLocation } from "../../Redux/features/locationSlice";

export const SearchByLocation = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    gotoCurrentLocation();
  }, []);

  const showPosition = (arg) => {
    const latitude = get(arg, "coords.latitude");
    const longitude = get(arg, "coords.longitude");
    if (latitude && longitude) {
      dispatch(updateLocation({ latitude, longitude }));
    }
  };

  const posError = (err) => {
    console.log(err);
    alert(
      "Please allow the browser to access your location or you can also search it manually."
    );
  };

  const gotoCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, posError);
    } else {
      alert("Sorry, geolocation is not supported by this browser");
    }
  };

  return <button onClick={gotoCurrentLocation}>current location</button>;
};
