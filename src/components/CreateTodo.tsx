import React, { useState } from 'react'
import { Todo } from '../types'

interface Props {
  saveTodo: (title: Pick<Todo, 'title'>) => void
}

function CreateTodo({ saveTodo }: Props) {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    saveTodo({ title: inputValue })
    setInputValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className='new-todo'
        value={inputValue}
        onChange={(event) => {
          setInputValue(event.target.value)
        }}
        placeholder='¿Qué quieres hacer?'
        autoFocus
      />
    </form>
  )
}

export default CreateTodo
