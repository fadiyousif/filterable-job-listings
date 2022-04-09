type JobListingTagProps = {
   className: string
   content: string
}

export const JobListingTag = ({ className, content }: JobListingTagProps) => (
   <span className={className}>{content}</span>
)
