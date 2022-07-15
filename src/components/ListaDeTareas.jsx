import React from 'react'
import { Tarea } from './Tarea'
import './stylesheets/ListaDeTareas.css'
export const ListaDeTareas = ({ tareas,deleteTarea,completeTarea }) => {
  
  
  
  return (
    <div className=' tarea-list-container'>
        
    {
      tareas.map(item => <Tarea 
          text={item.text}
          key={item.id}
          id={item.id}
          deleteTarea={deleteTarea}
          completeTarea={completeTarea}
          completada={item.completada}
           />)
    }

    </div>
  )
}
