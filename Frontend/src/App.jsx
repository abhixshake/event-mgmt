import React from 'react'
import Home from './home/Home'
import { Route, Routes } from "react-router-dom"
import Events from './events/Events'
import Signup from './components/Signup'

const App = () => {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/eventspage" element={<Events/>}/>
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App