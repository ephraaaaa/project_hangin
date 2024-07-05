import { useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet.heat';
import { useEffect } from 'react';

const HeatmapLayer = ({ data }) => {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    // Create heatmap layer
    const heatLayer = L.heatLayer(data, { radius: 25 });

    // Add heatmap layer to the map
    heatLayer.addTo(map);

    // Clean up on unmount
    return () => {
      map.removeLayer(heatLayer);
    };
  }, [map, data]);

  return null;
};

export default HeatmapLayer;
