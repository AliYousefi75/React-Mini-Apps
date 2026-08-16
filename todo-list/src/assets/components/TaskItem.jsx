
function TaskItem({title,onDelete}){
    return(
        <div
        style={{
            display:'flex',
            justifyContent:'space-between',
            alignItems:'center',
            gap:'4rem',
            marginTop:'20px',
            width:'300px',
        }}
        >
            <p>{title}</p>

            <button
            style={{
                backgroundColor:'red',
                color:'white',
                padding:'3px',
                borderRadius:"5px",
                cursor:'pointer',
            }}
            onClick={onDelete}
            >Delete
            </button>
        </div>
    )
}

export default TaskItem;