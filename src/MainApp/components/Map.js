import React, { Component } from "react";
import { useSelector } from "react-redux";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => (
  <div style={{ color: "red" }}>{text}</div>
);

/*
export class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 19.2226072,
      lng: 72.9817542,
    },
    zoom: 11,
  };

  handleApiLoaded = (map, maps) => {
    console.log({ map, maps });
  };

  gotoCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this.showPosition,
        this.posError
      );
    } else {
      alert("Sorry, geolocation is not supported by this browser");
    }
  };

  showPosition = (arg) => {
    console.log(arg, "success");
  };

  posError = (err) => {
    console.log(err, "Error");
  };

  render() {
    return (
      <div style={{ height: "300px", width: "500px" }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: `${process.env.REACT_APP_GOOGLE_MAP_API_KEY}`,
          }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          yesIWantToUseGoogleMapApiInternals={true}
          onGoogleApiLoaded={({ map, maps }) => this.handleApiLoaded(map, maps)}
        >
          <AnyReactComponent
            lat={19.2226072}
            lng={72.9817542}
            text="My Marker"
          />
        </GoogleMapReact>
        <button onClick={this.gotoCurrentLocation}>
          Go to current location
        </button>
      </div>
    );
  }
}
*/

export const SimpleMap = () => {
  const center = {
    lat: 19.2226072,
    lng: 72.9817542,
  };
  const zoom = 11;
  const { latitude: lat, longitude: lng } = useSelector(
    (state) => state.location
  );
  const { bankList = [] } = useSelector((state) => state);

  const handleApiLoaded = (map, maps) => {
    console.log({ map, maps });
  };

  const showPosition = (arg) => {
    console.log(arg, "success");
  };

  const posError = (err) => {
    console.log(err, "Error");
  };

  const gotoCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, posError);
    } else {
      alert("Sorry, geolocation is not supported by this browser");
    }
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
        <AnyReactComponent lat={lat} lng={lng} text="My Marker" />
      </GoogleMapReact>
      <button onClick={gotoCurrentLocation}>Go to current location</button>
    </div>
  );
};
