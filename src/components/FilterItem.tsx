import { useContext } from "react"
import cx from "classnames"
import { FiltersContext } from "../context/FiltersContext"

type FilterItemProps = {
   filter: string
}

export const FilterItem = ({ filter }: FilterItemProps) => {
   const { filters, setFilters } = useContext(FiltersContext)

   const handleClick = () => {
      setFilters(arr =>
         !arr.includes(filter)
            ? [...arr, filter]
            : arr.filter(item => item !== filter)
      )
   }

   return (
      <li>
         <button
            className={cx("filter-btn", {
               active: filters.includes(filter),
            })}
            onClick={handleClick}
         >
            {filter}
         </button>
      </li>
   )
}
