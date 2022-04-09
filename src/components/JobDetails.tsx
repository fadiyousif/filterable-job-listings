import { JobListingDetail } from "./JobListingDetail"

export type JobDetailsProps = {
   postedAt: string
   contract: string
   location: string
}

export const JobDetails = ({
   postedAt,
   contract,
   location,
}: JobDetailsProps) => {
   const details = [postedAt, contract, location]

   return (
      <ul className="job-details">
         {details.map((detail, index) => (
            <JobListingDetail detail={detail} key={`detail-${index}`} />
         ))}
      </ul>
   )
}
