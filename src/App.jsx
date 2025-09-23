
import './App.css'
import { Outlet } from 'react-router-dom'


function App() {


  return (
    <>
      <div>
        <div className="read-the-docs bg-green-500 text-white flex justify-between items-center mb-4 sticky top-0 z-50">
          {/* This is root */}
          <p className='font-mono  px-2'>New Works Times News</p>
          <div className='flex gap-2  px-2'>
            <p className='text-sm underline '>Home</p>
            <p className='text-sm underline '>Today Top</p>
            <p className='text-sm underline '>Profile</p>
            <p>🎞️</p>
            <p>🎗️</p>
            <p>⚽</p>
            <p>🎭</p>
          </div>
        </div>
        <Outlet></Outlet>
      </div>
    </>
  )
}

export default App
