import {
  MdCloud,
    MdComputer,
  MdFileOpen,
  MdHome,
  MdPeople,
  MdSchedule,
  MdSettings,
} from "react-icons/md";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { WiDaySunny, WiCloudy, WiRain } from 'react-icons/wi';

export const Links = [
  {
    id: 1,
    name: "dashboard",
    icon: <MdHome />,
  },
  {
    id: 2,
    name: "reports",
    icon: <MdFileOpen />,
  },
  {
    id: 3,
    name: "schedules",
    icon: <MdSchedule />,
  },
  {
    id: 4,
    name: "community",
    icon: <MdPeople />,
  },
  {
    id: 5,
    name: "forecasts",
    icon: <TiWeatherPartlySunny />,
  },
  {
    id: 6,
    name: "interface",
    icon: <MdComputer />,
  },
  {
    id: 7,
    name: "settings",
    icon: <MdSettings />,
  },
];

export const Tasks = [
  {
    id: 1,
    days: "2d",
    deadline: "2 days remaining",
  },
  {
    id: 2,
    days: "2d",
    deadline: "2 days remaining",
  },

]

export const Icons = [
  {
    id: 1,
    icon: <WiDaySunny size={32} />,
    day: "Monday",
    condition: "Sunny",
    temperature: "25",
  },
  {
    id: 2,
    icon: <WiCloudy size={32} />,
    day: "Tuesday",
    condition: "Cloudy",
    temperature: "22",
  },
  {
    id: 3,
    icon: <WiRain size={32} />,
    day: "Wednesday",
    condition: "Rainy",
    temperature: "20",
  }
]