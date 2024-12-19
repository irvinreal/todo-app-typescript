import type { FilterValue } from '../types'
import Filters from './Filters'

interface Props {
  activeCount: number
  completedCount: number
  filterSelected: FilterValue
  onClearCompleted: () => void
  handleFilterchange: (filter: FilterValue) => void
}

function Footer({
  activeCount = 0,
  completedCount = 0,
  filterSelected,
  handleFilterchange,
  onClearCompleted
}: Props) {
  return (
    <footer className='footer'>
      <span className='todo-count'>
        <strong>{activeCount}</strong> tareas pendientes
      </span>
      <Filters
        filterSelected={filterSelected}
        onFilterChange={handleFilterchange}
      />
      {
        completedCount > 0 && (
          <button className='clear-completed' onClick={onClearCompleted}>Borrar completadas</button>
        )
      }
    </footer>
  )
}

export default Footer
