import { useState } from 'react'
import './App.css'
import AngkaBoom from './component/angka_boom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AngkaBoom />
    </>
  )
}

export default App
