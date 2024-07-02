import { useState } from 'react'
import DisplayComponent from './DisplayComponent'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex justify-center items-center h-screen bg-slate-100 p-5'>
        <DisplayComponent></DisplayComponent>
        <DisplayComponent></DisplayComponent>
        <DisplayComponent></DisplayComponent>

    </div>
  )
}

export default App
