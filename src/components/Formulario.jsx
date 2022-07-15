import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';


export const Formulario = ({ onSubmit })  => {
  
  const [input, setInput] = useState('')

  const handleChange = (e) => setInput(e.target.value)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const newTarea = {
      text: input,
      id: uuidv4(),
      completada: false,

    }
    if(input.trim().length > 0) {
      
      onSubmit(prevS => [newTarea,...prevS])
      document.getElementById('input').value=''
    }

    
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='input-group mb-3'>
        <input
            id='input'
            type='text'
            name='text'
            className='form-control'
            onChange={handleChange}
            placeholder='Agregue su tarea...'
            autoComplete='off'
          />
          <button
            type='submit'
            className='btn btn-outline-secondary'>
            
              Anotar</button>
    </form>
  )
}
