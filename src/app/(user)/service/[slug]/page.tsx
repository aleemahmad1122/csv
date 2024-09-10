import * as C from "@/components/index";
import * as Con from "@/constants/index";
import * as Pages from "@/utils/servicesDetailPage";

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const paths = Con.serviceCards.flatMap((card) =>
    card.services.map((service) => ({ slug: service.url }))
  );
  return paths;
}

interface Pros {
  params: {
    slug: string;
  };
}

const Jobs = ({ params: { slug } }: Pros) => {
  const paths = Con.serviceCards.flatMap((card) =>
    card.services.map((service) => service.url)
  );

  const data = Pages.serviceDetailCard.filter((p) => p.page == slug);

  return (
    <>
      <C.Hero
        heading={`${slug.split("-").join(" ")}`}
        text="enterprises growth companies startups"
        url="#contact-form"
        btn={"tell us about your project"}
        poster="/banner-1.png"
      />

      {paths.includes(slug) &&
        data.length > 0 &&
        data.map((v, i) => <C.ServiceDetailInfo key={i} data={v} />)}
    </>
  );
};

export default Jobs;

export const metadata = {
  title: `Services | ${Con.companyName}`,
};
