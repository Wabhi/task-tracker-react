import { useState } from 'react'; //react hook...
import Task from './Task';
const Tasks = ({tasks,onDelete,onToggle}) => {
    return (
        //tasks.push() we can't add like that bcz state is immutable we can't add directly..
        //setTasks([...Tasks,{}]) if you want to add new task u can use setTasks
        <>
            {tasks.map((task) => (
                <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>
            ))}
        </>
    )
}

export default Tasks
