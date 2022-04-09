import { FilterItem } from "./FilterItem"

export type FiltersProps = {
   role: string
   level: string
   languages: string[]
   tools: string[]
}

export const Filters = ({ role, level, languages, tools }: FiltersProps) => {
   const filtersArr = [role, level, ...languages, ...tools]

   return (
      <ul className="filters">
         {filtersArr.map((filter, index) => (
            <FilterItem filter={filter} key={`filter-${index}`} />
         ))}
      </ul>
   )
}
