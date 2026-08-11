import { useState } from "react";
import TaskItem from "./components/TaskItem";
import AddTask from "./components/AddTask"; // ← ایمپورت فرم

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "یادگیری React", priority: "بالا", isDone: false },
    { id: 2, title: "تمرین useState", priority: "متوسط", isDone: false },
    { id: 3, title: "خواندن مستندات", priority: "پایین", isDone: true },
  ]);

  // ✅ تابع برای اضافه کردن تسک جدید
  function handleAddTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  // ✅ تابع برای حذف تسک
  function handleDeleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <div>
      <h1>📝 مدیریت کارهای روزانه</h1>
      {/* <p>تسک‌های خود را مدیریت کنید</p> */}

      {/* فرم اضافه کردن تسک */}
      <AddTask onAddTask={handleAddTask} />

      {/* لیست تسک‌ها */}
      <div>
        {tasks.length === 0 ? (
          <p>🎉 همه تسک‌ها انجام شد! تسک جدید اضافه کن.</p>
        ) : (
          tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onDelete={handleDeleteTask} // ← props برای حذف
            />
          ))
        )}
      </div>
    </div>
  );
}

export default App;