export type CompanyNameProps = {
   company: string
}

export const CompanyName = ({ company }: CompanyNameProps) => (
   <h3 className="company">{company}</h3>
)
