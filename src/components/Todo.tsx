import { TodoId, Todo as TodoType } from '../types'

interface Props extends TodoType {
  onToggleCompleted: ({
    id,
    completed
  }: Pick<TodoType, 'id' | 'completed'>) => void
  onRemoveTodo: (id: TodoId) => void
}

function Todo({
  id,
  title,
  completed,
  onToggleCompleted,
  onRemoveTodo
}: Props) {
  return (
    <div className='view'>
      <input
        className='toggle'
        type='checkbox'
        checked={completed}
        onChange={event => {
          onToggleCompleted({ id, completed: event.currentTarget.checked })
        }}
      />
      <label>{title}</label>
      <button
        className='destroy'
        onClick={() => {
          onRemoveTodo(id)
        }}
      ></button>
    </div>
  )
}

export default Todo
