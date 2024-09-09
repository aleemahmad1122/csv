import * as C from "@/components/index"
import { companyName, jobsCard } from "@/constants/index"



// Return a list of `params` to populate the [jobs] dynamic segment
export async function generateStaticParams() {

  return jobsCard.map((_) => ({
    jobs: _.url,
  }))
}




const Jobs = ({ params }: { params: { jobs: string } }) => {

  const title = `applying for ${params.jobs}`


  return (
    <><C.Hero
      heading="Ignite Your Career with Exciting Opportunities"
      text="enterprises growth companies startups"
      url="#contact-form" btn={'tell us about your project'} poster="/banner-1.png" />

      <h1 className="font-bold text-TDarkBlue text-center md:text-4xl capitalize py-20">{title}</h1>

      <C.JobForm /></>
  )
}

export default Jobs

export const metadata = {
  title: `Careers | ${companyName}`,
}

