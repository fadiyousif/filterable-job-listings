import { Dispatch, SetStateAction } from "react"
import removeIcon from "../images/icon-remove.svg"
import { Image } from "./Image"

type ActiveFilterItemProps = {
   filter: string
   setFilters: Dispatch<SetStateAction<string[]>>
}

export const ActiveFilterItem = ({
   filter,
   setFilters,
}: ActiveFilterItemProps) => {
   const removeFilter = () =>
      setFilters(arr => arr.filter(item => item !== filter))

   return (
      <li>
         <button
            className="filter-btn active-filter-btn"
            onClick={removeFilter}
         >
            <span>{filter}</span>
            <div className="remove-icon-container">
               <Image src={removeIcon} alt="remove-icon" />
            </div>
         </button>
      </li>
   )
}
