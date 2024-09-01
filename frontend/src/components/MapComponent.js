// MapComponent.js
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = "pk.eyJ1Ijoia2V2aW4zMnl1IiwiYSI6ImNtMGsza2I2bTEzNmsybXEydjk2b2ZnZXAifQ.aiTMroPNY6OQHD8yLvnIAA"; // Use environment variable for security

const MapComponent = ({ longitude, latitude }) => {
  const mapContainer = useRef(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [longitude, latitude],
      zoom: 12,
    });

    new mapboxgl.Marker()
      .setLngLat([longitude, latitude])
      .addTo(map);

    return () => map.remove(); // Clean up on unmount
  }, [longitude, latitude]);

  return <div className="map-container" ref={mapContainer} style={{ width: '100%', height: '500px' }}></div>;
};

export default MapComponent;
