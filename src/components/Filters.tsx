import { FILTERS_BUTTON } from '../consts'
import type { FilterValue } from '../types'

interface Props {
  filterSelected: FilterValue
  onFilterChange: (filter: FilterValue) => void
}

function Filters({ filterSelected, onFilterChange }: Props) {
  return (
    <ul className='filters'>
      {Object.entries(FILTERS_BUTTON).map(([key, { href, literal }]) => {
        const isSelected = key === filterSelected
        const className = isSelected ? 'selected' : ''
        return (
          <li key={key}>
            <a
              href={href}
              className={className}
              onClick={event => {
                event.preventDefault()
                onFilterChange(key as FilterValue)
              }}
            >
              {literal}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default Filters
