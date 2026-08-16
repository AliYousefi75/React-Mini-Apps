import { useState } from "react";


function TaskForm({onAddTask}){

    const [title,setTitle] = useState('');

    function handleChange(e){
        setTitle(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault();

        if(title.trim() !==''){
            onAddTask(title);
            setTitle('')
        }
    }

    return (
        <div className="container"
        style={{
            marginTop:'20px',
        }}>

            <form action="" onSubmit={handleSubmit}>

                <input
                style={{
                    outline:'none',
                    padding:'4px',
                    borderRadius:'8px',
                    border:'1px solid red',
                }} 
                type="text" 
                placeholder="enter task"
                value={title}
                onChange={handleChange}
                />

                <button
                style={{
                    backgroundColor:"rgb(76, 76, 255)",
                    color:'white',
                    padding:'3px',
                    borderRadius:'8px',
                    cursor:'pointer',
                }}
                >ADD</button>

            </form>

        </div>
    )
};


export default TaskForm;