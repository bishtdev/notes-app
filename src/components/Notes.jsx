import React, { useContext } from 'react'
import { noteContext } from '../context/noteContext'



const Notes = ({text , date , id}) => {
    const getDate = () =>{
        const d = new Date(date)

        return`${d.getDate()}-${d.getMonth()+1}-${d.getFullYear()}`
    }

const{delNote} = useContext(noteContext)

  return (
    
      <div className='note'>
        <div className="text">{text}</div>
        <div className="footer">
          <div className="date">{getDate()}</div>
          <button className='btn' onClick={()=>delNote(id)}>Del</button>
        </div>
      </div>
   
  )
}

export default Notes