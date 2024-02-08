import mapboxgl from "mapbox-gl"; // or "const mapboxgl = require('mapbox-gl');"
import React, { useRef, useEffect, useState } from "react";

mapboxgl.accessToken =
  "pk.eyJ1IjoiY2F0ZWRvZSIsImEiOiJjbHNjdXFyd3IwM3p2Mmtwdmkza21tbGlmIn0.M-3t1R3CMk19Yukht7H5gA";

export default function Map() {
  // create default states for rendering the map when the user interacts with it
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  // Initialize the map with useEffect. This code will be invoked after the app is inserted in the DOM tree
  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lng, lat],
      zoom: zoom,
    });
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  return (
    <div>
      <div className="bg-[#23374b] text-white px-3 py-2 z-10 absolute top-0 left-0 m-3 rounded-md">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} className="h-96 -z-10 "></div>
    </div>
  );
}
