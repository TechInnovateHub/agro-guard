import{ useState } from "react";

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
    <div className="flex items-center justify-between bg-sidebar-bg p-4 rounded-md">
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
  // Dummy schedule data
  const [scheduleTasks, setScheduleTasks] = useState([
    {
      id: 1,
      title: "Task 1",
      startDate: "2024-02-20",
      deadline: "2024-02-25",
      completed: false,
    },
    {
      id: 2,
      title: "Task 2",
      startDate: "2024-02-21",
      deadline: "2024-02-24",
      completed: true,
    },
    {
      id: 3,
      title: "Task 3",
      startDate: "2024-02-22",
      deadline: "2024-02-28",
      completed: false,
    },
    // Add more dummy schedule data as needed
  ]);

  const handleToggleComplete = (taskId, completed) => {
    const updatedTasks = scheduleTasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed };
      }
      return task;
    });
    setScheduleTasks(updatedTasks);
  };

  return (
    <div className="bg-main-bg p-6 rounded-lg shadow-md main-container">
      <h2 className="text-lg font-semibold text-text-clr mb-4">Schedules</h2>
      <div className=" flex flex-col gap-4">
        {scheduleTasks.map((task) => (
          <ScheduleTask
            key={task.id}
            task={task}
            onToggleComplete={handleToggleComplete}
          />
        ))}
      </div>
    </div>
  );
};

export default Schedules;

