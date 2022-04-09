import { Dispatch, SetStateAction } from "react"
import { ActiveFilterItem } from "./ActiveFilterItem"

export type ActiveFiltersProps = {
   filters: string[]
   setFilters: Dispatch<SetStateAction<string[]>>
}

export const ActiveFilters = ({ filters, setFilters }: ActiveFiltersProps) => {
   const clearFilters = () => setFilters([])

   return (
      <div className="active-filters-container">
         <ul className="active-filters">
            {filters.map((filter, index) => (
               <ActiveFilterItem
                  filter={filter}
                  setFilters={setFilters}
                  key={`filter-${index}`}
               />
            ))}
         </ul>
         <button className="clear-btn" onClick={clearFilters}>
            Clear
         </button>
      </div>
   )
}
