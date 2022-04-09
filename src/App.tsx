import { useState } from "react"
import { FiltersContext } from "./context/FiltersContext"
import { ActiveFilters } from "./components/ActiveFilters"
import { Jobs } from "./components/Jobs"
import "./App.css"

export const App = () => {
   const [filters, setFilters] = useState<string[]>([])

   return (
      <>
         <header></header>

         {filters.length > 0 && (
            <ActiveFilters filters={filters} setFilters={setFilters} />
         )}

         <FiltersContext.Provider value={{ filters, setFilters }}>
            <Jobs filters={filters} />
         </FiltersContext.Provider>
      </>
   )
}
