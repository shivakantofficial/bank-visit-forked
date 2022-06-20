import React from "react";
import { useSelector } from "react-redux";
import GoogleMapReact from "google-map-react";
import get from "lodash/get";
import userLocationMark from "../../assets/user-location.png";
import hdfcBankMark from "../../assets/hdfc-bank-logo.png";

const UserMark = ({ text }) => (
  <div style={{ color: "red" }}>
    <img
      src={userLocationMark}
      style={{ width: "40px" }}
      alt="user-location-marker"
    />
  </div>
);

const BankMarker = ({ text }) => (
  <div style={{ color: "blue" }}>
    <img
      src={hdfcBankMark}
      style={{ width: "35px" }}
      alt="hdfc-location-mmarker"
    />
  </div>
);

export const SimpleMap = () => {
  const center = {
    lat: 19.2226072,
    lng: 72.9817542,
  };
  const zoom = 14;
  const { latitude: lat, longitude: lng } = useSelector(
    (state) => state.location
  );
  const { bankList = [] } = useSelector((state) => state);

  const handleApiLoaded = (map, maps) => {
    // console.log({ map, maps });
  };

  return (
    <div style={{ height: "300px", width: "500px" }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: `${process.env.REACT_APP_GOOGLE_MAP_API_KEY}`,
        }}
        defaultCenter={center}
        center={{ lat, lng }}
        defaultZoom={zoom}
        yesIWantToUseGoogleMapApiInternals={true}
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
      >
        <UserMark lat={lat} lng={lng} text="My Marker" />
        {bankList.map((eachBank) => {
          return (
            <BankMarker
              key={eachBank.place_id}
              lat={get(eachBank, "geometry.location.lat", 0)}
              lng={get(eachBank, "geometry.location.lng", 0)}
              text="My Marker"
            />
          );
        })}
      </GoogleMapReact>
    </div>
  );
};
