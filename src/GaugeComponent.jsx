
import React, { useEffect, useRef } from 'react';
import Gauge from 'gaugeJS';

const GaugeComponent = ({ value }) => {
  const gaugeRef = useRef(null);

  useEffect(() => {
    const opts = {
      angle: 0.0,
      lineWidth: 0.44, 
      radiusScale: 1, 
      pointer: {
        length: 0.6, 
        strokeWidth: 0.035, 
        color: '#000000',
      },
      limitMax: false,
      limitMin: false,
      colorStart: '#6FADCF', 
      colorStop: '#8FC0DA', 
      strokeColor: '#E0E0E0',
      generateGradient: true,
      highDpiSupport: true, 
    };

    if (gaugeRef.current) {
      const target = gaugeRef.current;
      const gauge = new Gauge.Gauge(target).setOptions(opts); 
      gauge.maxValue = 100; 
      gauge.setMinValue(0); 
      gauge.animationSpeed = 32;
      gauge.set(value);
    }
  }, [value]);

  return (
    <div className="w-full">
      <canvas ref={gaugeRef} className="w-full h-48" />
    </div>
  );
};

export default GaugeComponent;
