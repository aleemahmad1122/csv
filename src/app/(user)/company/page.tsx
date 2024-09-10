import * as C from "@/components/index";
import * as con from "@/constants/index";

const company = () => (
  <>
    <C.Hero
      url="#contact-form"
      btn={"tell us about your project"}
      heading="Why Our Clients Choose Us as Their Preferred Partner"
      poster="/banner-1.png"
    />
    <C.CompanyPartners />
    <C.CompanyAbout
      description={con.companyAbout[0].description}
      heading={con.companyAbout[0].heading}
      image={con.companyAbout[0].image}
      tagline={con.companyAbout[0].tagline}
    />
    <C.CompanyValues />
    <C.CompanyAbout
      description={con.companyAbout[1].description}
      heading={con.companyAbout[1].heading}
      image={con.companyAbout[1].image}
      tagline={con.companyAbout[1].tagline}
    />
    <C.Team />
  </>
);

export default company;

export const metadata = {
  title: `Company | ${con.companyName}`,
};
