import React, { memo, useCallback, useState } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import HeadingWithLine from "../Headings/HeadingWithLine";

const containerStyle = {
  width: "100%",
  height: "340px",
};

const center = {
  lat: 50.81334383149761,
  lng: -0.10141977116628238,
};

const Location = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyC6PLT5-mrVFJcFqFixXZTW4d7Fj1EZg3Q",
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  const renderMap = isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <Marker position={center} />
    </GoogleMap>
  ) : (
    <></>
  );
  return (
    <div className="py-5" >
      {/* <HeadingWithLine heading={"Unison Jiu Jitsu Academy Location"}>
      </HeadingWithLine> */}
        <div style={{ margin: "0px 0px 35px 50px"}}>
          <h4 style={{fontWeight:"600"}}>
          Unison Jiu Jitsu Academy Location
          </h4>
      
        <p className="mt-2">
          27 The Waterfront, Marina Way, Brighton Marina, Brighton and Hove,
          Brighton BN2 5WA
        </p> 
         </div>
      <div className=" mt-4">{renderMap}</div>
    </div>
  );
};

export default memo(Location);
