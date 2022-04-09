import { createContext, Dispatch, SetStateAction } from "react"

type FiltersContextState = {
   filters: string[]
   setFilters: Dispatch<SetStateAction<string[]>>
}

export const FiltersContext = createContext<FiltersContextState>({
   filters: [],
   setFilters: () => {},
})
