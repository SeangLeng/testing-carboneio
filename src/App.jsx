import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TestingServiceCarbone from './component/TestingServiceCarbone'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TestingServiceCarbone />
    </>
  )
}

export default App
