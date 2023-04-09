import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'

function App() {


  return (
    <div className="App">
      <div>
        <Header></Header>
        <Outlet></Outlet>
      </div>
    </div>
  )
}


export default App
