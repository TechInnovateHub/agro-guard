import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Settings = () => {
  const [notificationEnabled, setNotificationEnabled] = useState(false);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const [language, setLanguage] = useState("English");
  const [theme, setTheme] = useState("Light");

  const handleSaveSettings = () => {
    // Here you can save the settings to your backend or local storage
    // For demonstration, we will just show a success toast
    toast.success("Settings saved successfully");
  };

  return (
    <section className="main-container">
      <h2 className="text-2xl font-semibold mb-4">Settings</h2>
      <div
        className="flex items-center mb-4 cursor-pointer"
        onClick={() => setNotificationEnabled(!notificationEnabled)}
      >
        <input
          type="checkbox"
          id="notifications"
          checked={notificationEnabled}
          readOnly
          className="mr-2 cursor-pointer"
        />
        <label htmlFor="notifications" className="font-semibold cursor-pointer">
          Enable Notifications
        </label>
      </div>
      <div
        className="flex items-center mb-4 cursor-pointer"
        onClick={() => setDarkModeEnabled(!darkModeEnabled)}
      >
        <input
          type="checkbox"
          id="darkMode"
          checked={darkModeEnabled}
          readOnly
          className="mr-2 cursor-pointer"
        />
        <label htmlFor="darkMode" className="font-semibold cursor-pointer">
          Dark Mode
        </label>
      </div>
      <div className="flex flex-col lg:flex-row gap-5">
        <div className="flex items-center mb-4">
          <span className="font-semibold mr-2">Language:</span>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none cursor-pointer bg-sidebar-bg"
          >
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
          </select>
        </div>
        <div className="flex items-center mb-4">
          <span className="font-semibold mr-2">Theme:</span>
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none cursor-pointer bg-sidebar-bg"
          >
            <option value="Light">Light</option>
            <option value="Dark">Dark</option>
            <option value="System">system</option>
          </select>
        </div>
      </div>
      <button
        onClick={handleSaveSettings}
        className="bg-sidebar-bg text-white px-4 py-2 rounded-md hover:bg-sidebar-bg/80"
      >
        Save Settings
      </button>
      <ToastContainer />
    </section>
  );
};

export default Settings;
