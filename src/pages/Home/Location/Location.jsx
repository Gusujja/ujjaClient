import React, { memo, useCallback, useState } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
// import HeadingWithLine from "../Headings/HeadingWithLine";
import mapImage from "../../../assets/images/Map-Image.png"
import styles from "./Location.module.css"
const containerStyle = {
  width: "100%",
  height: "340px",
};

const center = {
  lat: 50.81334383149761,
  lng: -0.10141977116628238,
};

const Location = () => {

const handleMapClick = () => {
    window.open(
      "https://www.google.com/maps/search/?api=1&query=Kings+gym+78-81+Queens+Rd,+Brighton+and+Hove,+Brighton+BN1+3XE",
      "_blank"
    );
  };

  // const { isLoaded } = useJsApiLoader({
  //   id: "google-map-script",
  //   googleMapsApiKey: "AIzaSyC6PLT5-mrVFJcFqFixXZTW4d7Fj1EZg3Q",
  // });

  // const [map, setMap] = useState(null);

  // const onLoad = useCallback(function callback(map) {
  //   const bounds = new window.google.maps.LatLngBounds(center);
  //   map.fitBounds(bounds);

  //   setMap(map);
  // }, []);

  // const onUnmount = useCallback(function callback(map) {
  //   setMap(null);
  // }, []);

  // const renderMap = isLoaded ? (
  //   <GoogleMap
  //     mapContainerStyle={containerStyle}
  //     center={center}
  //     zoom={10}
  //     onLoad={onLoad}
  //     onUnmount={onUnmount}
  //   >
  //     <Marker position={center} />
  //   </GoogleMap>
  // ) : (
  //   <></>
  // );
  return (
    <div className="py-5" >
      
        <div style={{ margin: "0px 0px 0px 50px"}}>
          <h4 style={{fontWeight:"600", cursor:"pointer"}} onClick={handleMapClick}> 
       Valour Brighton Academy Location
          </h4>
      
        <p className="mt-2" onClick={handleMapClick} style={{cursor:"pointer"}}>
         Kings gym 78-81 Queens Rd, Brighton and Hove, Brighton BN1 3XE
        </p> 
         </div>
         <img className={styles.mapImage} style={{cursor:"pointer"}} onClick={handleMapClick} src={mapImage} alt="Valour Brighton Map" />
      {/* <div className=" mt-4">{renderMap}</div> */}
    </div>
  );
};

export default memo(Location);
