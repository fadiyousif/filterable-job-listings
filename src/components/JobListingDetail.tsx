export type JobListingDetailProps = {
   detail: string
}

export const JobListingDetail = ({ detail }: JobListingDetailProps) => (
   <li className="job-detail-item">{detail}</li>
)
