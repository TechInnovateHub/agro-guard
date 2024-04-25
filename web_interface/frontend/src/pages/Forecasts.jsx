import { BackgroundCard, MiniCard, WeatherCard } from "../components";

import { UseStateContext } from "../context";

const Forecasts = () => {
  const { weather, thisLocation, values, setPlace } = UseStateContext();

  return (
    <div className="bg-main-bg  rounded-lg shadow-md main-container">

      <h2 className="text-3xl font-bold text-text-clr mb-2">
        Welcome to your forecasts. <span className="text-lg">Find out what&apos;s the weather around you.</span>
      </h2>

      <div className="">
        <BackgroundCard />
      </div>

      <div className="w-full flex flex-col lg:flex-row gap-8 py-4 items-center justify-center">
        <div className="">
          <WeatherCard
            place={thisLocation}
            windSpeed={weather.wspd}
            humidity={weather.humidity}
            temperature={weather.temp}
            heatindex={weather.heatindex}
            iconString={weather.conditions}
            consditions={weather.conditions}
          />
        </div>

        <div className="grid justify-center gap-6 grid-cols-2 lg:grid-cols-3 w-full lg:w-[70%]">
          {values?.slice(1, 7).map((curr) => (
            <MiniCard
              key={curr.datetime}
              time={curr.datetime}
              temp={curr.temp}
              iconString={curr.conditions}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Forecasts;
