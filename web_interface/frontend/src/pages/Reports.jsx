import React from "react";

const ReportsSection = () => {
  // Dummy report data
  const weeklyReports = [
    {
      id: 1,
      week: "Week 1",
      downloadLink: "#",
      summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      week: "Week 2",
      downloadLink: "#",
      summary:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      week: "Week 3",
      downloadLink: "#",
      summary:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    // Add more dummy report data as needed
  ];

  return (
    <div className="bg-main-bg p-6 rounded-lg shadow-md main-container">
      <h2 className="text-lg font-semibold text-text-clr mb-4">
        Weekly Reports
      </h2>
      <div className="grid gap-4">
        {weeklyReports.map((report) => (
          <div
            key={report.id}
            className="flex items-center justify-between bg-sidebar-bg p-4 rounded-md"
          >
            <div>
              <p className="font-semibold text-text-clr">{report.week}</p>
              <p className="text-sm text-light-text-clr">{report.summary}</p>
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

export default ReportsSection;

