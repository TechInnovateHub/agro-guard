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
      severity: "High!",
      summary:
        "Weekly report highlights healthy plant growth. Legume leaves appear a vibrant green, and maize stalks are strong and upright.",
    },
    {
      id: 2,
      imageUrl: image2,
      week: "Week 2",
      downloadLink: "#",
      severity: "High!",
      summary:
        "**Potential disease alert!** Some legume leaves show signs of yellowing between veins. This could indicate a **magnesium deficiency**. Further monitoring is recommended.",
    },
    {
      id: 3,
      imageUrl: image3,
      week: "Week 3",
      downloadLink: "#",
      severity: "High!",
      summary:
        "Maize leaves exhibit scattered brown spots. This might be early signs of **bacterial leaf streak** or **fungal leaf spot**.  A close inspection to identify the specific disease is advised.",
    },
    // Add more weekly reports...
  ];

  const dailyReports = [
    {
      id: 1,
      imageUrl: image4,
      day: "Day 1",
      downloadLink: "#",
      severity: "High!",
      summary:
        "Daily report for Day 1. No significant observations.**bacterial leaf streak** in maize.  The disease is at an early stage, and immediate application of a copper-based bactericide can help control its spread.",
    },
    {
      id: 2,
      imageUrl: image5,
      day: "Day 2",
      downloadLink: "#",
      severity: "High!",
      summary:
        "Day 2 report focuses on monitoring for pests. **bacterial leaf streak** in maize.  The disease is at an early stage, and immediate application of a copper-based bactericide can help control its spread.",
    },
    {
      id: 3,
      imageUrl: image6,
      day: "Day 3",
      downloadLink: "#",
      severity: "High!",
      summary:
        "Day 3 report analyzes soil moisture levels. **bacterial leaf streak** in maize.  The disease is at an early stage, and immediate application of a copper-based bactericide can help control its spread.",
    },
    // Add more daily reports...
  ];

  const customReports = [
    {
      id: 1,
      day: "2 days",
      imageUrl: image6,
      downloadLink: "#",
      severity: "High!",
      summary:
        "**Custom report 1: Legume rust inspection.** Following up on Week 2's report, a closer examination of yellowing leaves reveals orange or brown pustules on the undersides. This confirms **legume rust** infection. Fungicide application is recommended to prevent further spread.",
    },
    {
      id: 2,
      imageUrl: image1,
      day: "4 days",
      downloadLink: "#",
      severity: "High!",
      summary:
        "**Custom report 2: Maize stalk rot investigation.**  Maize stalks appear weak and discolored at the base (refer to image1). This suggests potential **stalk rot**.  Identifying the specific fungal pathogen is crucial for selecting the most effective treatment strategy.",
    },
    {
      id: 3,
      imageUrl: image3,
      day: "6 days",
      downloadLink: "#",
      severity: "High!",
      summary:
        "Custom report 3 (see image3) confirms **bacterial leaf streak** in maize.  The disease is at an early stage, and immediate application of a copper-based bactericide can help control its spread.",
    },
    // Add more custom reports...
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
        setReports(dailyReports);
        break;
    }
  };

  return (
    <div className="bg-main-bg rounded-lg shadow-md main-container pb-4">
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
            <div className="w-full flex flex-col lg:flex-row items-start justify-center gap-4">
              <div className="w-[350px] h-[200px] lg:w-[600px] overflow-hidden flex items-center justify-center">
                <img
                  src={report.imageUrl}
                  alt="Report Image"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="flex flex-col items-start gap-4">
                <div>
                  <p className="font-semibold text-text-clr">
                    {view === "weekly"
                      ? report.week
                      : view === "daily"
                      ? report.day
                      : "Custom Date"}
                  </p>
                  <p className="text-sm text-light-text-clr">
                    {report.summary}
                  </p>
                  <p className="text-sm text-light-text-clr">
                    Severity: {report.severity}
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-main-bg text-text-clr rounded-md hover:bg-hover-bg focus:bg-hover-bg transition duration-300 ease-in-out"
                  >Read More</a>
                  <a
                    href={report.downloadLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-main-bg text-text-clr rounded-md hover:bg-hover-bg focus:bg-hover-bg transition duration-300 ease-in-out"
                  >
                    Download
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reports;
