import { useState,useCallback} from 'react'
import './App.css'

function App() {
  const[length , setLength] = useState(8)
  const [numbers, setNumbers] = useState(false)
  const [characters, setCharacters] = useState(false)

  const[password, setPassword] = useState('')



  return (
    <>

    <div className='w full text-black my-10 mx-8 px-10 py-1  rounded-lg border-2 border-red-600'>
      <h1 className='text-black text-center text-4xl my-3'>Password Generator</h1>
      <div className='flex rounded-lg overflow-hidden my-3'>
        <input type="text" value={password} className='w-full text-yellow py-1 px-3 ' placeholder='password'/>
        <button className='bg-blue-700 text-white px-3 py-1'>copy</button>
      </div>
      

    </div>
   
    </>
  )
}

export default App
