function TaskItem({ task, onDelete }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        margin: "10px 0",
        borderRadius: "8px",
        backgroundColor: task.isDone ? "#cd6133" : "#ffb142",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color:'#474787',
      }}
    >
      <div>
        <h3>{task.title}</h3>
        <p>اولویت: {task.priority}</p>
        <p>وضعیت: {task.isDone ? "✅ انجام شده" : "⏳ انجام نشده"}</p>
      </div>
      
      {/* ✅ دکمه حذف */}
      <button
        onClick={() => onDelete(task.id)}
        style={{
          backgroundColor: "#dc3545",
          color: "white",
          border: "none",
          padding: "8px 12px",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        🗑️ حذف
      </button>
    </div>
  );
}

export default TaskItem;