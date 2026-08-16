import { useState } from "react";
import TaskForm from "./assets/components/TaskForm";
import TaskItem from "./assets/components/TaskItem";


function App(){

  const [items , setItems] = useState([
        {id:1, title:'Learn html'},
        {id:2, title:'Learn css'},
        {id:3,title:'Learn js'},
    ])

    function handleDelete(id){
       setItems(items.filter((item)=>item.id !== id))
    }

    function handleAddTask(title){
      const newItem = {
        id:Date.now(),
        title:title,
      }
      setItems([...items,newItem])
    }


  return(
    <div 
    style={{
      backgroundColor:"#ddfdff",
      maxWidth:'600px',
      margin:'auto',
      borderRadius:'30px',
      padding:'30px',
      display:'flex',
      flexDirection:'column',
      justifyContent:"center",
      alignItems:'center'
    }}
    >
      <h1
      style={{letterSpacing:'5px'}}
      >TO DO LIST</h1>

      <TaskForm onAddTask={handleAddTask}/>

      {items.length === 0 ?(<p style={{marginTop:'10px'}}>your toDo list is empty</p>):(
        items.map((item)=>(
        <TaskItem 
        title={item.title} 
        key={item.id}
        onDelete={()=>handleDelete(item.id)}/>
      ))
      )}
      

    </div>
  )
}

export default App;