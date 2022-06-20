import React, { useEffect, useState } from "react";
import Switch from "rc-switch";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
  setBanklist,
  updateVisitStatus,
} from "../../Redux/features/banklistSlice";
import "rc-switch/assets/index.css";

export const NearbyBankList = () => {
  const dispatch = useDispatch();
  const { latitude, longitude } = useSelector((state) => state.location);
  const { bankList = [] } = useSelector((state) => state);

  const getbanksNearby = () => {
    axios
      .get("https://maps.googleapis.com/maps/api/place/nearbysearch/json", {
        params: {
          location: latitude + "," + longitude,
          radius: 3000,
          type: "bank",
          name: "hdfc",
          keyword: "bank",
          key: `${process.env.REACT_APP_GOOGLE_MAP_API_KEY}`,
        },
      })
      .then((res) => {
        if (res.status == 200) {
          const {
            data: { results = [] },
          } = res;
          dispatch(setBanklist(results));
        }
      })
      .catch((err) => {
        console.log(err, "Err");
      });
  };

  useEffect(() => {
    getbanksNearby();
  }, [latitude, longitude]);

  const handleSwitchClick = (placeId, value, event) => {
    dispatch(updateVisitStatus({ placeId, value }));
  };

  return (
    <div className="nearbybank-conatiner">
      <h3>Nearby HDFC banks within 3Km</h3>
      <div>
        {Array.isArray(bankList) && bankList.length > 0 ? (
          <ul className="banklist">
            {bankList.map((eachBank) => {
              return (
                <li key={eachBank.place_id} className="each-bank">
                  <div className="address">
                    <p>Hdfc Bank</p>
                    <div>{eachBank.vicinity}</div>
                  </div>
                  <div className="cta">
                    <Switch
                      defaultChecked={false}
                      checked={eachBank.visitStatus}
                      onClick={(value, event) =>
                        handleSwitchClick(eachBank.place_id, value, event)
                      }
                    />
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          <p>Banks not found nearby</p>
        )}
      </div>
    </div>
  );
};
