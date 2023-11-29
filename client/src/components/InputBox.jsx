import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../redux/task/taskSlice';

export default function InputBox() {
    const dispatch = useDispatch();
    

    const [singleTask, setSingleTask] = useState('')
    const handleChange = (e) =>{
        setSingleTask(e.target.value)
    }

    const handleAddTask = (e) =>{
        e.preventDefault();
        dispatch(addTask({id: Date.now(), text: singleTask}))
        setSingleTask('')
    }


  return (
    <div className='mt-7'>
        <form className='flex justify-center gap-4'>
            <input value={singleTask} onChange={handleChange} type="text" className="p-4 bg-slate-100 rounded-lg outline-none text-lg" placeholder='Enter your task here'/>
            <button onClick={handleAddTask} className="bg-green-600 rounded-lg p-2 px-6 text-white hover:opacity-70">Add</button>
        </form>
    </div>
  )
}
