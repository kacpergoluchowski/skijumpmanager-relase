import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
const { ipcRenderer } = window.require('electron')
import './app.scss';

function App() {
  const [count, setCount] = useState(0)

  function handleCloseApp() {
    ipcRenderer.send('closeApp');
  }

  return (
    <div className='main-container'> 
      <h1> Ski jump manager - relase version </h1>
      <button onClick={handleCloseApp}> Close </button>
    </div>
  )
}

export default App
