import type { TodoTitle } from '../types'
import CreateTodo from './CreateTodo'

interface Props {
  onAddTodo: (title: TodoTitle) => void
}

function Header({ onAddTodo }: Props) {
  return (
    <header>
      <h1>
        <img
          style={{
            width: '20px',
            height: 'auto',
            marginLeft: '8px',
            borderRadius: '4px'
          }}
          src='https://irvinreal.github.io/irvin-landing/irvin.svg'
        />
      </h1>
      <CreateTodo saveTodo={onAddTodo} />
    </header>
  )
}

export default Header
