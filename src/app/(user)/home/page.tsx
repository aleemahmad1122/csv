import * as C from "@/components/index";
import {
  companyName,
  homePartnership,
  homePartnership2,
  serviceCards,
} from "@/constants/index";

const HomePage = () => (
  <>
    <C.Hero
      heading="Fostering Future Leaders in the Digital World"
      url="#contact-form"
      btn={"Describe Your Project!"}
      poster="/banner-1.png"
      video="/hero.webm"
    />

    <C.Journey />

    <C.VelocityText content="CSV is fueled by a diverse team of more than 100 professionals spread across two global offices. With a track record of over 150 successful projects and an outstanding rating of 4.9.  " />

    <C.OurPeople />

    {/* <C.Info /> */}

    <C.TextParallaxContent />
    <C.Services
      bg={true}
      url="/services"
      btn="views more!"
      description={serviceCards[0].description}
      heading={serviceCards[0].heading}
      services={serviceCards[0].services}
    />

    <C.HomePartnership
      heading={homePartnership.heading}
      description={homePartnership.description}
      image={homePartnership.image}
    />

    {/* <C.Testimonial /> */}

    <C.HomePartnership
      heading={homePartnership2.heading}
      description={homePartnership2.description}
      image={homePartnership2.image}
      className={"flex-row-reverse"}
      url={homePartnership2.url}
      btn={homePartnership2.btn}
    />
    <C.Accordion />
  </>
);

export default HomePage;

export const metadata = {
  title: `Home | ${companyName}`,
};
