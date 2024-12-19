import type { TodoId, Todo as TodoType } from '../types'
import Todo from './Todo'

interface Props {
  todos: TodoType[]
  onToggleCompleted: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
  onRemoveTodo: (id: TodoId) => void
}

function Todos({ todos, onToggleCompleted, onRemoveTodo }: Props) {
  return (
    <ul className='todo-list'>
      {todos.map(todo => (
        <li key={todo.id} className={`${todo.completed ? 'completed' : ''}`}>
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            onToggleCompleted={onToggleCompleted}
            onRemoveTodo={onRemoveTodo}
          />
        </li>
      ))}
    </ul>
  )
}

export default Todos
