import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

export const NearbyBankList = () => {
  const { latitude: lat, longitude: lng } = useSelector(
    (state) => state.location
  );
  const [bankList, setBankList] = useState([]);
  useEffect(() => {
    axios
      .get("https://maps.googleapis.com/maps/api/place/nearbysearch/json", {
        params: {
          location: 19.0522115 + "," + 72.900522,
          radius: 1000,
          type: "bank",
          name: "hdfc",
          keyword: "bank",
          key: `${process.env.REACT_APP_GOOGLE_MAP_API_KEY}`,
        },
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((res) => {
        console.log(res, "success");
      })
      .catch((err) => {
        console.log(err, "Err");
      });

    /*
    fetch(
      "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=19.0522115,72.900522&radius=1000&type=bank&name=hdfc&keyword=bank&key=AIzaSyC68H9SdF9KiJWStgwPugHIgY_IILwefRo"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data, "data");
      })
      .catch((err) => {
        console.log(err, "Error");
      });
    */
  }, []);

  return <ul>Bank List placeholder</ul>;
};
