import { Icons } from "../data";


const ForecastCard = () => {
    return (
      <div>
        {Icons.map((icon) => (
          <div
            key={icon.id}
            className="bg-sidebar-bg p-4 rounded-md mb-4 flex items-center justify-between"
          >
            <div>
              <p className="font-semibold text-text-clr">{icon.day}</p>
              <p className="text-light-text-clr">
                Temperature: {icon.temperature}°C
              </p>
              <p className="text-light-text-clr">Condition: {icon.condition}</p>
            </div>
            <div key={icon.id} className="text-yellow-text-clr">
              {icon.icon}
            </div>
          </div>
        ))}
      </div>
    );
  };

export default ForecastCard;