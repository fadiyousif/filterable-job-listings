import { useState, useEffect } from "react"
import { JobListing } from "./JobListing"
import data from "../data/data.json"

type Job = {
   id: number
   company: string
   logo: string
   new: boolean
   featured: boolean
   position: string
   role: string
   level: string
   postedAt: string
   contract: string
   location: string
   languages: string[]
   tools: string[]
}

type JobsProps = {
   filters: string[]
}

export const Jobs = ({ filters }: JobsProps) => {
   const [jobs, setJobs] = useState<Job[]>([])

   useEffect(() => {
      setJobs(
         data.filter(job => {
            const { role, level, languages, tools } = job
            const tags = [role, level, ...languages, ...tools]

            return filters.every(filter => tags.includes(filter))
         })
      )
   }, [filters])

   return (
      <ul className="jobs" style={{ marginTop: filters.length === 0 ? 76 : 0 }}>
         {jobs.map(job => {
            const {
               id,
               company,
               logo,
               new: newListing,
               featured,
               position,
               role,
               level,
               postedAt,
               contract,
               location,
               languages,
               tools,
            } = job

            return (
               <JobListing
                  key={id}
                  company={company}
                  logo={logo}
                  newListing={newListing}
                  featured={featured}
                  position={position}
                  role={role}
                  level={level}
                  postedAt={postedAt}
                  contract={contract}
                  location={location}
                  languages={languages}
                  tools={tools}
               />
            )
         })}
      </ul>
   )
}
