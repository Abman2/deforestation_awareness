import React from 'react';

export const Begin = () => {
  return (
    <div>
      <iframe
        src="https://ourworldindata.org/grapher/annual-deforestation?stackMode=absolute®ion&tab=map"
        loading="lazy"
        style={{ width: '100%', height: '600px', border: '0px none' }}
        allow="web-share; clipboard-write"
        title="Annual Deforestation Map"
      ></iframe>
    </div>
  );
};
