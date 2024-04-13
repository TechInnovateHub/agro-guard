import { useState } from "react";

import image1 from "../assets/reports/sick-plant-1.jpg";
import image2 from "../assets/reports/sick-plant-2.jpeg";
import image3 from "../assets/reports/sick-plant-3.jpg";
import image4 from "../assets/reports/sick-plant-4.jpg";
import image5 from "../assets/reports/sick-plant-5.jpg";
import image6 from "../assets/reports/sick-plant-6.jpg";

const Reports = () => {
  const [view, setView] = useState("daily");
  const [reports, setReports] = useState([]);

  // Dummy report data
  const weeklyReports = [
    {
      id: 1,
      imageUrl: image1,
      week: "Week 1",
      downloadLink: "#",
      summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      imageUrl: image2,
      week: "Week 2",
      downloadLink: "#",
      summary:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      imageUrl: image3,
      week: "Week 3",
      downloadLink: "#",
      summary:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    // Weekly report data
  ];

  const dailyReports = [
    {
      id: 1,
      imageUrl: image4,
      day: "Day 1",
      downloadLink: "#",
      summary: "Daily report for Day 1.",
    },
    {
      id: 2,
      day: "Day 2",
      imageUrl: image5,
      downloadLink: "#",
      summary: "Daily report for Day 2.",
    },
    {
      id: 3,
      day: "Day 3",
      imageUrl: image6,
      downloadLink: "#",
      summary: "Daily report for Day 3.",
    },
    // Daily report data
  ];

  const customReports = [
    {
      id: 1,
      day: "2 days",
      imageUrl: image6,
      downloadLink: "#",
      summary: "custom report 1",
    },
    {
      id: 2,
      imageUrl: image1,
      day: "4 days",
      downloadLink: "#",
      summary: "custom report 2",
    },
    {
      id: 3,
      imageUrl: image3,
      day: "6 days",
      downloadLink: "#",
      summary: "custom report 3",
    },
    // Custom report data
  ];

  const handleViewChange = (view) => {
    setView(view);
    switch (view) {
      case "weekly":
        setReports(weeklyReports);
        break;
      case "daily":
        setReports(dailyReports);
        break;
      case "custom":
        setReports(customReports);
        break;
      default:
        setReports([]);
        break;
    }
  };

  return (
    <div className="bg-main-bg p-6 rounded-lg shadow-md main-container">
      <h2 className="text-4xl font-semibold text-text-clr mb-4">
        Reports Overview
      </h2>
      <p className="text-sm text-gray-600 mb-4">
        This section provides an overview of different reports. You can switch
        between weekly, daily, and your custom reports to see reports for
        different time frames.
      </p>
      <div className="flex items-center justify-between mb-4">
        <div className="flex space-x-4">
          <button
            onClick={() => handleViewChange("daily")}
            className={`${
              view === "daily"
                ? "bg-sidebar-bg text-text-clr"
                : "bg-hover-bg text-text-clr"
            } px-4 py-2 rounded-md hover:bg-hover-bg transition duration-300 ease-in-out`}
          >
            Daily
          </button>

          <button
            onClick={() => handleViewChange("weekly")}
            className={`${
              view === "weekly"
                ? "bg-button-bg text-text-clr"
                : "bg-hover-bg text-hover-text-clr"
            } px-4 py-2 rounded-md hover:bg-hover-bg transition duration-100 ease-in-out`}
          >
            Weekly
          </button>

          <button
            onClick={() => handleViewChange("custom")}
            className={`${
              view === "custom"
                ? "bg-button-bg text-text-clr"
                : "bg-hover-bg text-hover-text-clr"
            } px-4 py-2 rounded-md hover:bg-hover-bg transition duration-300 ease-in-out`}
          >
            Custom
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {reports.map((report) => (
          <div
            key={report.id}
            className={`flex items-start justify-between ${
              view === "daily" ? "bg-sidebar-bg" : "bg-button-bg"
            } p-2 rounded-md`}
          >
            <div className="w-full flex items-start gap-4">
              <img
                src={report.imageUrl}
                alt="Report Image"
                className="h-[200px] w-[300px] object-cover rounded-lg"
              />
              <div>
                <p className="font-semibold text-text-clr">
                  {view === "weekly"
                    ? report.week
                    : view === "daily"
                    ? report.day
                    : "Custom Date"}
                </p>
                <p className="text-sm text-light-text-clr">{report.summary}</p>
                <p className="text-sm text-light-text-clr">
                  Severity: {report.severity}
                </p>
              </div>
            </div>
            <a
              href={report.downloadLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-button-bg text-text-clr rounded-md hover:bg-hover-bg transition duration-300 ease-in-out"
            >
              Download
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reports;
