import React, { useState } from "react";

const getDeadlineColor = (deadline) => {
  // Calculate days left from the deadline
  const daysLeft = Math.ceil(
    (new Date(deadline) - new Date()) / (1000 * 60 * 60 * 24)
  );

  // Assign color based on days left
  if (daysLeft <= 0) {
    return "text-red-text-clr"; // Red if overdue
  } else if (daysLeft <= 2) {
    return "text-red-text-clr"; // Red if 2 or fewer days left
  } else if (daysLeft <= 5) {
    return "text-yellow-text-clr"; // Yellow if 5 or fewer days left
  } else {
    return "text-green-text-clr"; // Green if more than 5 days left
  }
};

const ScheduleTask = ({ task, onToggleComplete }) => {
  const [completed, setCompleted] = useState(task.completed);
  const deadlineColor = getDeadlineColor(task.deadline);

  const toggleComplete = () => {
    setCompleted(!completed);
    onToggleComplete(task.id, !completed);
  };

  return (
    <div className="flex flex-col items-start gap-4 justify-between bg-sidebar-bg p-4 rounded-md">
      <div>
        <p className="font-semibold text-text-clr">{task.title}</p>
        <p className={`text-sm ${deadlineColor}`}>Started: {task.startDate}</p>
        <p className={`text-sm ${deadlineColor}`}>Deadline: {task.deadline}</p>
      </div>
      <button
        className={`px-4 py-2 rounded-md ${
          completed ? "bg-green-text-clr" : "bg-red-text-clr"
        }`}
        onClick={toggleComplete}
      >
        {completed ? "Completed" : "Incomplete"}
      </button>
    </div>
  );
};

const Schedules = () => {
  const [scheduleTasks, setScheduleTasks] = useState([
    {
      id: 1,
      title:
        "Check soil moisture levels and adjust irrigation for tomato plants",
      startDate: "2024-04-16",
      deadline: "2024-04-20",
      completed: false,
    },
    {
      id: 2,
      title: "Prepare greenhouse for upcoming seedling transplanting",
      startDate: "2024-04-17",
      deadline: "2024-04-22",
      completed: false,
    },
    {
      id: 3,
      title:
        "Monitor temperature fluctuations and regulate heating in chicken coop",
      startDate: "2024-04-18",
      deadline: "2024-04-23",
      completed: false,
    },
    {
      id: 4,
      title: "Inspect hive frames and replenish bee feeders",
      startDate: "2024-04-19",
      deadline: "2024-04-24",
      completed: false,
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    deadline: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddSchedule = () => {
    const { title, deadline } = formData;
    if (title.trim() === "" || deadline.trim() === "") {
      return; // Prevent adding empty schedules
    }
    const newTask = {
      id: scheduleTasks.length + 1,
      title: title,
      startDate: new Date().toISOString().split("T")[0], // Get current date in "yyyy-mm-dd" format
      deadline: deadline,
      completed: false,
    };
    setScheduleTasks([...scheduleTasks, newTask]);
    // Clear form data after adding schedule
    setFormData({
      title: "",
      deadline: "",
    });
    // Hide the form after adding schedule
    setShowForm(false);
  };

  return (
    <div className="bg-main-bg p-6 rounded-lg shadow-md main-container">
      <h2 className="text-lg font-semibold text-text-clr mb-4">Schedules</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {scheduleTasks.map((task) => (
          <ScheduleTask
            key={task.id}
            task={task}
            onToggleComplete={(taskId, completed) => {
              const updatedTasks = scheduleTasks.map((task) => {
                if (task.id === taskId) {
                  return { ...task, completed };
                }
                return task;
              });
              setScheduleTasks(updatedTasks);
            }}
          />
        ))}
      </div>
      {!showForm && (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={() => setShowForm(true)}
        >
          Add Schedule
        </button>
      )}
      {showForm && (
        <form
          className="mt-4 w-[300px]"
          onSubmit={(e) => {
            e.preventDefault();
            handleAddSchedule();
          }}
        >
          <div className="flex flex-col gap-4">
            <label htmlFor="title" className="text-text-clr">
              Title:
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="px-3 py-2 border border-gray-300 rounded-md text-black focus:outline-none"
              required
            />
          </div>
          <div className="flex flex-col gap-4 mt-2">
            <label htmlFor="deadline" className="text-text-clr">
              Completion Date:
            </label>
            <input
              type="date"
              id="deadline"
              name="deadline"
              value={formData.deadline}
              onChange={handleInputChange}
              className="px-3 py-2 border border-gray-300 rounded-md text-black focus:outline-none"
              required
            />
          </div>
          <div className="flex gap-5">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
            >
              Add Schedule
            </button>
            <button
              className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded mt-2"
              onClick={() => setShowForm(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Schedules;
