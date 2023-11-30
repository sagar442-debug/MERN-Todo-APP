import { useSelector, useDispatch } from "react-redux"
import {deleteTask} from '../redux/task/taskSlice.js'

export default function TaskList() {
  const tasks = useSelector((state) => state.todo.tasks);
  const dispatch = useDispatch();
  const handleDelete = (taskId) =>{
    dispatch(deleteTask(taskId))
  }

  return (
    <div>
      <h1 className="text-3xl text-left mt-4">List of tasks</h1>
      <ul className="mt-2">
      {tasks.map((task) =>(
        <li className="flex justify-between text-xl py-2 bg-slate-100 rounded-lg mb-2 px-2 items-center" key={task.id}>{task.text} <button onClick={()=> handleDelete(task.id)} className="bg-red-600 p-2 text-lg hover:opacity-80 rounded-lg text-white">Delete</button></li>
      ))}

      </ul>
    </div>
  )
}
