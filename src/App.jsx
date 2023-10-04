
import './App.css'
import { Outlet } from 'react-router-dom'


function App() {


  return (
    <>
      <div>
        <p className="read-the-docs">
          This is root
        </p>
        <Outlet></Outlet>
      </div>
    </>
  )
}

export default App
