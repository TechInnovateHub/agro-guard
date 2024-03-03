import { ForecastCard } from "../components";



const Forecasts = () => {

  return (
    <div className="bg-main-bg p-6 rounded-lg shadow-md main-container">
      <h2 className="text-lg font-semibold text-text-clr mb-4">
        Weather Forecasts
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  
          <ForecastCard />
      </div>
    </div>
  );
};

export default Forecasts;
