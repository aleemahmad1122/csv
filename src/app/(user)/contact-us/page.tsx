import * as C from "@/components/index";
import { companyName } from "@/constants/index";

const ContactUs = () => (
  <>
    <C.Hero
      heading="Connect with Us Today for Expert Support and Assistance"
      url="#contact-form"
      btn={"tell us about your project"}
      poster="/banner-1.png"
    />

    <C.ContactInfo />
  </>
);

export default ContactUs;

export const metadata = {
  title: `Contact Us | ${companyName}`,
};
