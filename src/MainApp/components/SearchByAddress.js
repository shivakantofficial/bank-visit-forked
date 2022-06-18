import React, { useState } from "react";
import { useDispatch } from "react-redux";
import get from "lodash/get";
import { updateLocation } from "../../Redux/features/locationSlice";

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
      });
  };

  const handleSearch = () => {
    getCoordinates(location);
  };

  return (
    <div>
      <input value={location} onChange={(e) => handleChange(e)} />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};
