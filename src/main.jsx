import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {TaskContextProvider} from './context/TaskContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Sets the context as a main container */}
    <TaskContextProvider>
      <App />
    </TaskContextProvider>
  </React.StrictMode>,
)
