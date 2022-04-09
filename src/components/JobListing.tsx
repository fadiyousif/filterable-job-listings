import cx from "classnames"
import { CompanyName, CompanyNameProps } from "./CompanyName"
import { JobDetails, JobDetailsProps } from "./JobDetails"
import { JobTitle, JobTitleProps } from "./JobTitle"
import { JobListingTag } from "./JobListingTag"
import { Filters, FiltersProps } from "./Filters"
import { Image } from "./Image"

export type JobListingProps = {
   logo: string
   featured: boolean
   newListing: boolean
} & JobDetailsProps &
   JobTitleProps &
   FiltersProps &
   CompanyNameProps

export const JobListing = ({
   featured,
   logo,
   company,
   newListing,
   position,
   postedAt,
   contract,
   location,
   role,
   level,
   languages,
   tools,
}: JobListingProps) => {
   const fileName = logo.split("/")[2]
   const path = require(`../images/${fileName}`)

   return (
      <li className={cx("job-listing", { featured: featured })}>
         <div className="job-info">
            <Image src={path} alt={`${company} logo`} className="logo" />
            <div>
               <div className="info-upper-row">
                  <CompanyName company={company} />
                  {newListing && (
                     <JobListingTag className="new-tag" content="new!" />
                  )}
                  {featured && (
                     <JobListingTag
                        className="featured-tag"
                        content="featured"
                     />
                  )}
               </div>
               <JobTitle position={position} />
               <JobDetails
                  postedAt={postedAt}
                  contract={contract}
                  location={location}
               />
            </div>
         </div>
         <Filters
            role={role}
            level={level}
            languages={languages}
            tools={tools}
         />
      </li>
   )
}
