export type JobTitleProps = {
   position: string
}

export const JobTitle = ({ position }: JobTitleProps) => (
   <h2 className="position">{position}</h2>
)
