import { useState } from 'react'; //react hook...
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Appointment with doctor',
        day: 'Feb 5th at 02:30pm',
        reminder:true
    },
    {
        id: 2,
        text: 'Wedding ceremony friends brother ',
        day: 'Apr 29th at 07:30pm',
        reminder:true
    },
    {
        id: 3,
        text: 'Coding with cracker on Newton School',
        day: 'March 11th at 11:00pm',
        reminder:true
    },
    {
        id: 4,
        text: 'Online game with friends',
        day: 'Jun 12th at 09:30pm',
        reminder:false
    }
  ])
  // add task.....
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000 + 1);
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  }
  //delete task.....
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  //toggle reminder.....
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task,reminder:!task.reminder} : task));
  }

  return (
    <div className="container">
      <Header onAdd={() => {
        setShowAddTask(!showAddTask)
      }} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : "No Task Here.."}
    </div>
  );
}

export default App;
