import { useState } from 'react'
import DisplayComponent from './DisplayComponent'
import MapComponent from './MapComponent'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex justify-center items-center h-screen bg-slate-100 p-5'>
        <MapComponent></MapComponent>
    </div>
  )
}

export default App
