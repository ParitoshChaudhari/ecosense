"use client";
import React, { useEffect } from "react";
import "./Map.css";
import { Icon, map } from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import FirebaseConfig from "@/firebase/firebase";
import { ref, get, child, set } from "firebase/database";
import { useState } from "react";

const Map = () => {
  const [markers, setMarkers] = useState([]);
  const database = FirebaseConfig();
  const dbref = ref(database);

  const getData = () => {
    const newMarkers = [];
    get(child(dbref, "update")).then((snapshot) => {
      snapshot.forEach((element) => {
        var marker = {};
        if (element.val().type == "wqi") {
          marker = {
            id: element.val().id,
            tds: element.val().tds,
            lat: element.val().lat,
            long: element.val().long,
            ph: element.val().ph,
            purity: element.val().purity,
            wqi: element.val().wqi,
            type: element.val().type,
          };
        }
        if (element.val().type == "aqi") {
          marker = {
            lat: element.val().lat,
            long: element.val().long,
            co: element.val().co,
            temp: element.val().temperature,
            humid: element.val().humidity,
            aqi: element.val().aqi,
            id: element.val().id,
            pm2: element.val().pm2,
            type: element.val().tyep,
          };
        }

        newMarkers.push(marker);
        console.log(element.key);
      });
      setMarkers(newMarkers);
    });
    // get(child(dbref, "aqi/update")).then((snapshot) => {
    //   snapshot.forEach((element) => {
    //     const marker = {
    //       lat: element.val().lat,
    //       long: element.val().long,
    //       co: element.val().co,
    //       temp: element.val().temperature,
    //       humid: element.val().humidity,
    //       aqi: element.val().aqi,
    //       id: element.val().id,
    //       pm2: element.val().pm2,
    //       type: "aqi",
    //     };
    //     newMarkers.push(marker);
    //     console.log(element.key);
    //   });
    //   setMarkers(newMarkers);
    // });
  };
  // console.log("Getting Data");
  useEffect(() => {
    // Get the markers from the Firebase Database
    getData();
    // setInterval(getData, 30 * 1000);
  }, []);
  // console.log("Data Retrived");
  // console.log(markers);
  return (
    <>
      <MapContainer
        center={[21.361673, 74.878475]}
        zoom={15}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors"'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers.map((marker, i) => (
          <Marker
            position={[parseFloat(marker.lat), parseFloat(marker.long)]}
            icon={
              new Icon({
                iconUrl:
                  "https://awm.pythonanywhere.com/static/aqi/" +
                  (marker.wqi == undefined ? marker.aqi : marker.wqi) +
                  ".png",
                iconSize: [110, 110], // size of the icon
              })
            }
            key={marker.id}
          >
            {/* {console.log({ i })} */}
            <Popup>
              {marker.type == "wqi" ? (
                <>
                  <div className="aqiOpt">
                    <h2>WQI: {marker.wqi} ppm</h2>
                    <hr />
                    <h3>TDS: {marker.tds} ppm</h3>
                    <hr />
                    <h3>PH Level: {marker.ph} pH</h3>
                    <hr />
                    <h3>Purity: {marker.purity} %</h3>
                    <hr />
                  </div>
                </>
              ) : (
                <>
                  <div className="aqiOpt">
                    <h2>AQI: {marker.aqi} ppm</h2>
                    <hr />
                    <h3>CO Level: {marker.co} ppm</h3>
                    <hr />
                    <h3>PM2.5: {marker.pm2} ppm</h3>
                    <hr />
                    <h3>Temperaure: {marker.temp}°C</h3>
                    <hr />
                    <h3>Humidity: {marker.humid}%</h3>
                    <hr />
                  </div>
                </>
              )}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </>
  );
};

export default Map;
