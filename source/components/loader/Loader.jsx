import React from 'react';

function Loader() {
  return (
    <div className="loader">
      <div className="loader__inner">
        <div className="loader__crumb"></div>
        <div className="loader__crumb"></div>
        <div className="loader__crumb"></div>
        <div className="loader__crumb"></div>
        <div className="loader__crumb"></div>
        <div className="loader__crumb"></div>
      </div>
    </div>
  );
}

export default Loader;