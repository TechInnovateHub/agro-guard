import React from "react";

const Interface = () => {
  
  const robotData = {
    charge: 75, // Battery charge percentage
    position: { x: 123.45, y: 67.89 }, // Current position coordinates
    acresCovered: 10.5, // Total acres covered
  };

  return (
    <div className="bg-main-bg p-6 rounded-lg shadow-md main-container">
      <h2 className="text-lg font-semibold text-text-clr mb-4">Robot Interface</h2>

      <div className="flex flex-col lg:flex-row gap-5">
        {/* Live video section */}
        <div className="video-section mb-6">
          {/* TODO: Add your live video component here */}
          <img src="/int-1.jpg" alt="placeholder" className="w-[600px] h-[350px] object-cover" />
        </div>


        {/* Robot data section */}
        <div className="robot-data-section">
          <h3 className="text-lg font-semibold text-text-clr mb-2">Robot Data</h3>
          <div className="flex flex-wrap gap-4">
            {/* Battery charge */}
            <div className="flex items-center bg-sidebar-bg px-5 py-4 rounded-md">
              <span className="mr-2">Charge:</span>
              <div className="progress-bar">
                <div
                  className="progress"
                ></div>
              </div>
              <span className="ml-2">{robotData.charge}%</span>
            </div>
            {/* Current position */}
            <div className="flex items-center bg-sidebar-bg px-5 py-4 rounded-md">
              <span className="mr-2">Position:</span>
              <span>({robotData.position.x}, {robotData.position.y})</span>
            </div>
            {/* Acres covered */}
            <div className="flex items-center bg-sidebar-bg px-5 py-4 rounded-md">
              <span className="mr-2">Acres Covered:</span>
              <span>{robotData.acresCovered} acres</span>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Interface;
