import { useState } from "react";

function AddTask({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("متوسط");

  function handleSubmit(e) {
    e.preventDefault();

    // اعتبارسنجی: عنوان نباید خالی باشه
    if (!title.trim()) {
      alert("لطفاً عنوان تسک را وارد کنید!");
      return;
    }

    // ساخت تسک جدید
    const newTask = {
      id: Date.now(), // استفاده از زمان برای id یکتا
      title: title,
      priority: priority,
      isDone: false,
    };

    // ارسال تسک جدید به والد (App)
    onAddTask(newTask);

    // خالی کردن فرم
    setTitle("");
    setPriority("متوسط");
  }

  return (
    <form onSubmit={handleSubmit} style={{ margin: "20px 0" }}>
      <h3>➕ اضافه کردن تسک جدید</h3>
      
      <div style={{
          display:'flex',
          justifyContent:'center',
        alignItems:'center',
        

      }}>
        <input
          type="text"
          placeholder="عنوان تسک..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ padding: "8px", width:'65%'}}
        />
        
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          style={{ padding: "8px", marginLeft: "10px" }}
        >
          <option value="بالا">بالا</option>
          <option value="متوسط">متوسط</option>
          <option value="پایین">پایین</option>
        </select>
        
        <button type="submit" style={{ padding: "8px 16px",  }}>
          ➕ اضافه کن
        </button>
      </div>
    </form>
  );
}

export default AddTask;