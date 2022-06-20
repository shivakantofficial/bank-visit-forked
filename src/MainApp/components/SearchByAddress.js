import React, { useState } from "react";
import { useDispatch } from "react-redux";
import get from "lodash/get";
import { updateLocation } from "../../Redux/features/locationSlice";
import { updateLoadingStatus } from "../../Redux/features/loaderSlice";

export const SearchByAddress = () => {
  const dispatch = useDispatch();
  const [location, setLocation] = useState("");

  const handleChange = (e) => {
    let value = e.target.value;
    setLocation(value);
  };

  const getCoordinates = (address) => {
    fetch(
      "https://maps.googleapis.com/maps/api/geocode/json?address=" +
        address +
        "&key=" +
        `${process.env.REACT_APP_GOOGLE_MAP_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        const latitude = get(data, "results[0].geometry.location.lat");
        const longitude = get(data, "results[0].geometry.location.lng");
        if (latitude && longitude) {
          dispatch(updateLocation({ latitude, longitude }));
        }
        dispatch(updateLoadingStatus(false));
      })
      .catch((err) => {
        console.log(err);
        dispatch(updateLoadingStatus(false));
      });
  };

  const handleSearch = () => {
    dispatch(updateLoadingStatus(true));
    getCoordinates(location);
  };

  return (
    <div className="location-search-conatiner">
      <input value={location} onChange={(e) => handleChange(e)} />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};
