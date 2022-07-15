import React, { useEffect, useState } from 'react'
import { Formulario } from './Formulario'
import { ListaDeTareas } from './ListaDeTareas'

export const ToDoList = () => {
  
  const [tareas, setTareas] = useState([])

  const saveLocal = () => {
    localStorage.setItem('userTareas',JSON.stringify(tareas))

  }

  useEffect(() => {
    const tareaTemp = JSON.parse(localStorage.getItem('userTareas'))
    setTareas(tareaTemp)
  }, [])

  useEffect(() => {
    saveLocal()
  }, [tareas])
  
  






  const filterArr = (id) => {
    const newArr = tareas.filter(item => item.id !== id)
    setTareas(newArr)
  }

  const completeTarea = (id) => {
    const newArr = tareas.map(item =>{
      if(item.id === id && item.completada === false) {
        return {
          text: item.text,
          id: item.id,
          completada: true,

        }
      } else if(item.id === id && item.completada === true){
        return {
          text: item.text,
          id: item.id,
          completada: false,

        }
      }else {
        return item
      }

    
    })
    setTareas(newArr)
  }

  return (
    <div className='container bg-sucess bg-opacity-10'>
        <h1>Mi lista de Tareas</h1>
        <Formulario onSubmit={setTareas}/>
        <ListaDeTareas completeTarea={completeTarea} deleteTarea={filterArr} tareas={tareas}/>
        
        <button 
          type='button' 
          className="btn btn-danger"
          onClick={() => setTareas([])}>
            Eliminar todas las tareas
        </button>
    </div>
  )
}
