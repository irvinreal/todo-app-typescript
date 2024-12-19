import { useState } from 'react'
import Todos from './components/Todos'
import type { FilterValue, TodoId, TodoTitle, Todo as TodoType } from './types'
import { TODO_FILTERS } from './consts'
import Footer from './components/Footer'
import Header from './components/Header'

const mockTodos = [
  {
    id: '1',
    title: 'Completar curso de typescript',
    completed: true
  },
  {
    id: '2',
    title: 'Aprender bun',
    completed: false
  },
  {
    id: '3',
    title: 'Practicar con proyectos',
    completed: false
  }
]

function App() {
  const [todos, setTodos] = useState(mockTodos)
  const [filterSelected, setFilterSelected] = useState<FilterValue>(
    TODO_FILTERS.ALL
  )

  const handleRemove = (id: TodoId) => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const handleCompleted = ({
    id,
    completed
  }: Pick<TodoType, 'id' | 'completed'>) => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed
        }
      }
      return todo
    })
    setTodos(newTodos)
  }

  const handleFilterchange = (filter: FilterValue) => {
    setFilterSelected(filter)
  }

  const handleRemoveAllCompleted = () => {
    const newTodos = todos.filter(todo => !todo.completed)
    setTodos(newTodos)
  }

  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.length - activeCount

  const filteredTodos = todos.filter(todo => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })

  const handleAddTodo = ({ title }: TodoTitle) => {
    const newTodo = {
      title,
      id: crypto.randomUUID(),
      completed: false
    }
    const newTodos = [...todos, newTodo]
    setTodos(newTodos)
  }

  return (
    <div className='todoapp'>
      <Header onAddTodo={handleAddTodo} />
      <Todos
        onToggleCompleted={handleCompleted}
        onRemoveTodo={handleRemove}
        todos={filteredTodos}
      />
      <Footer
        activeCount={activeCount}
        completedCount={completedCount}
        filterSelected={filterSelected}
        onClearCompleted={handleRemoveAllCompleted}
        handleFilterchange={handleFilterchange}
      />
    </div>
  )
}

export default App
