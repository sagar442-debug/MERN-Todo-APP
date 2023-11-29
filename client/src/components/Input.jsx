import React from 'react'

export default function Input() {
    


  return (
    <div>
        <form className='flex gap-4 justify-center items-center py-5'>
            <input className="bg-slate-100 rounded-lg p-3" type="text" placeholder="Enter your task" />
            <button className="bg-green-600 hover:opacity-90 p-3 rounded-lg text-white">Add</button>
        </form>
    </div>
  )
}
