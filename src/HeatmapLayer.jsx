import { useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet.heat';
import { useEffect } from 'react';

const HeatmapLayer = ({ data }) => {
  const map = useMap();

  useEffect(() => {
    if (!map) return;
    const heatLayer = L.heatLayer(data, { radius: 20 });
    heatLayer.addTo(map);
    return () => {
      map.removeLayer(heatLayer);
    };
  }, [map, data]);

  return null;
};

export default HeatmapLayer;
