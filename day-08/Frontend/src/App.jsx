import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'

function App() {
  const [notes,setNotes]=useState([{}])

axios.get('http://localhost:3000/api/notes')
.then((res)=>{
  setNotes(res.data.note)
})
  return(
    <>
    <div className='notes'>
      {
        notes.map(note=>{
        return <div className="note">
        <h3>{note.name}</h3>
        <h3>{note.age}</h3>
        <h3>{note.city}</h3>
        <h3>{note.role}</h3>
      </div>
        })
      }
    </div>
    </>
  )
}

export default App
