import React from 'react'
import { BsFillBackspaceFill } from "react-icons/bs";
import './stylesheets/Tarea.css'


export const Tarea = ( { text,deleteTarea,id,completeTarea,completada } ) => {
  
  console.log(completada)
  return (
    <div className={`tarea-container`}>
        
        <p 
        className={`${completada === true ? "through" : ""} 'tarea-text'`}
        onClick={()=> completeTarea(id)}
        >
            {text}
        </p>

        <BsFillBackspaceFill 
        className='tarea-icon'
        onClick={() => deleteTarea(id)}/>


    </div>
  )
}
