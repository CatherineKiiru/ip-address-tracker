import mapboxgl from "mapbox-gl";

// eslint-disable-next-line no-unused-vars
const Map = (address, loading, success, error) => {
  mapboxgl.accessToken = "<your access token here>";
  const map = new mapboxgl.Map({
    container: "map", 
    style: "mapbox://styles/mapbox/streets-v12", 
    center: [-74.5, 40], 
    zoom: 9, 
  });

  return <div>
    
  </div>;
};

export default Map;
