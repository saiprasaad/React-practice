function Task(props) {
    return <div className="task" style={{backgroundColor: props.completed? 'green' : 'white' }}><h2>{props.completed ? 'true': 'false'}</h2><h1>{props.name}</h1><button onClick={() => props.markTaskAsCompleted(props.id)}>Mark as Complete</button>
    <button onClick={() => props.deleteTask(props.id)}>X</button></div>
}

export default Task;