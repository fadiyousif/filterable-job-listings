import { createContext } from "react"
import { ActiveFiltersProps } from "../components/ActiveFilters"

export const FiltersContext = createContext<ActiveFiltersProps>({
   filters: [],
   setFilters: () => {},
})
