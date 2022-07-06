import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

import {Typography} from "@mui/material"
import {Admin} from "react-admin"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Typography>Test</Typography>
      <Admin />
    </div>
  )
}

export default App
