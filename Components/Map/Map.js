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

  console.log("Getting Data");
  useEffect(() => {
    // Get the markers from the Firebase Database
    get(child(dbref, "aqi/update")).then((snapshot) => {
      const newMarkers = [];
      snapshot.forEach((element) => {
        const marker = {
          lat: element.val().lat,
          long: element.val().long,
          co: element.val().co,
          temp: element.val().temperature,
          humid: element.val().humidity,
          aqi: element.val().aqi,
          id: element.val().id,
        };
        newMarkers.push(marker);
      });
      setMarkers(newMarkers);
      console.log(markers);
    });
  }, []);
  console.log("Data Retrived");
  console.log(markers);
  const updateData = () => {
    // Get the markers from the Firebase Database
    get(child(dbref, "aqi/update")).then((snapshot) => {
      const newMarkers = [];
      snapshot.forEach((element) => {
        const marker = {
          lat: element.val().lat,
          long: element.val().long,
          co: element.val().co,
          temp: element.val().temperature,
          humid: element.val().humidity,
          aqi: element.val().aqi,
          id: element.val().id,
        };
        newMarkers.push(marker);
      });
      setMarkers(newMarkers);
      console.log(markers);
    });
  };
  setInterval(updateData, 2000);
  return (
    <>
      <MapContainer
        center={[21.361673, 74.878475]}
        zoom={16}
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
                  marker.aqi +
                  ".png",
                iconSize: [110, 110], // size of the icon
              })
            }
            key={marker.id}
          >
            {console.log({ i })}
            <Popup>
              <>
                <h2>AQI: {marker.aqi}</h2>
                <hr />
                <h3>CO Level: {marker.co}ppm</h3>
                <h3>Temperature: {marker.temp}°C</h3>
                <h3>Humidity: {marker.humid}%</h3>
              </>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </>
  );
};

export default Map;
