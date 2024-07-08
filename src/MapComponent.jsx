import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import HeatmapLayer from './HeatmapLayer';

const airQualityData = [
  [11.77520,124.88402],
  [11.77469,124.88421],
  [11.77478,124.88357],
];

const MapComponent = () => {
  return (
    <MapContainer
      center={[11.77442, 124.88369]}
      zoom={100}
      style={{ height: '100vh', width: '100%' }}
      zoomControl={false}
      scrollWheelZoom={false}
      doubleClickZoom={false}
      dragging={false}
      attributionControl={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution=""
      />
      <HeatmapLayer data={airQualityData} />
    </MapContainer>
  );
};

export default MapComponent;
