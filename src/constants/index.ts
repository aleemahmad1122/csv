import * as T from '@/types'
import * as Yup from 'yup';
import { Input } from "@/components/ui/input"
import { TbBrandMinecraft } from "react-icons/tb";
import { PiHandshakeThin } from "react-icons/pi";
import { PiClubFill } from "react-icons/pi";
import { Textarea } from "@/components/ui/textarea"
import {
  FaLinkedinIn, FaFacebookF, FaInstagram, FaSearchengin, FaAws, FaSalesforce,
  FaYoutube, FaArrowRight, FaUser, FaHome, FaShopify, FaRobot,
  FaDigitalOcean
} from "react-icons/fa";
import { FaXTwitter, FaBattleNet, FaQuoteLeft, FaLightbulb, FaMobileScreenButton, FaUserGroup, FaServicestack } from "react-icons/fa6";
import { LuPenTool } from "react-icons/lu";
import { BsPersonFillGear, BsClipboard2Data } from "react-icons/bs";
import { IoAnalytics, IoDocumentTextOutline, IoPhonePortraitOutline } from "react-icons/io5";
import { GiBigGear, GiVrHeadset, GiGiftOfKnowledge } from "react-icons/gi";
import { SiMulesoft, SiBlockchaindotcom, SiInternetcomputer, SiSinglestore, SiCyberdefenders, SiBugcrowd, SiMixcloud, SiPowerbi, SiJquery, SiGooglemarketingplatform, SiAdobecreativecloud, SiSalesforce } from "react-icons/si";
import { CgWebsite } from "react-icons/cg";
import { GrIntegration } from "react-icons/gr";
import { MdOutlineHealthAndSafety, MdOutlineMail, MdOutlineWorkOutline, MdOutlineLocationOn } from "react-icons/md";
import { HiShoppingBag } from 'react-icons/hi';



export const companyName: string = 'CSV'



export const navLinks: T.NavLink[] = [
  { title: "home", link: "/", menu: false },
  { title: "Services", link: "/services", menu: [{ title: 'comming soon', link: '/some' }] },
  { title: "company", link: "/company", menu: false },
  { title: "careers", link: "/careers", menu: false },
  { title: "projects", link: "/our-work", menu: false },
  // { title: "Team", link: "/our-team", menu: false },
];


export const socialLinks: T.SocialLinks[] = [
  { Icon: FaLinkedinIn, url: "https://www.linkedin.com/company/csvantage" },
  { Icon: FaFacebookF, url: "https://www.facebook.com/csvantage/" },
  { Icon: FaInstagram, url: "https://www.instagram.com/csvantage/reel/C2czMr6v-OL/" },

]


export const formValidation: T.FormValidation = {
  fullName: Yup.string()
    .required("Full name is Required")
    .min(2, "Full name must be at least 2 characters")
    .max(50, "Full name cannot exceed 50 characters"),
  email: Yup.string().required("Email is Required").email("Invalid email address"),
  phone: Yup.string().required('Phone number is required'),
  organization: Yup.string().required("Organization is Required").min(3, "Message must be at least 3 characters").max(200, "Message cannot exceed 200 characters"),
  message: Yup.string().required("Message is Required").min(10, "Message must be at least 10 characters").max(200, "Message cannot exceed 200 characters"),
};


export const formInputs: T.FormInputs[] = [
  { label: 'Your Name', type: 'text', name: 'fullName', field: Input },
  { label: 'Your Email', type: 'email', name: 'email', field: Input },
  { label: 'Your Number', type: 'tel', name: 'phone', field: Input },
  { label: 'Your Organization', type: 'text', name: 'organization', field: Input },
  { label: 'Your message...', type: '', name: 'message', field: Textarea },
]


export const careerFormValidation: T.FormValidation = {
  fullName: Yup.string().required("Full name is Required").min(2, "Full name must be at least 2 characters")
    .max(50, "Full name cannot exceed 50 characters"),
  email: Yup.string().required("Email is Required").email("Invalid email address"),
  phone: Yup.string().required('Phone number is required'),
  cv: Yup.string().required('C.V is required'),
};


export const careerFormInputs: T.FormInputs[] = [
  { label: 'Your Name', type: 'text', name: 'fullName', field: Input },
  { label: 'Your Email', type: 'email', name: 'email', field: Input },
  { label: 'Your Number', type: 'tel', name: 'phone', field: Input },
  { label: 'Your CV', type: 'file', name: 'cv', field: Input },
]




export const formInfo: T.FormInfo = {
  image: '/logo.png',
  title: "CyberSoft Vantage",
  heading: "Business Expert Manager",
  email: "info@cybersoftvantage.com",
  phone: "+92 51 613 1111",
  link: {
    Icon: FaLinkedinIn,
    url: "https://www.linkedin.com/company/csvantage/mycompany/verification/"
  }
}


export const companyCard: T.CompanyCard[] = [
  {
    Icon: PiHandshakeThin,
    heading: 'building partnerships that last',
    description: 'we nurture long-term relationships by creating value for our clients in all industries.'
  },
  {
    Icon: TbBrandMinecraft,
    heading: 'creating value',
    description: 'our world-class team of engineers is ready to take on diverse and challenging projects to create real value.'
  },
  {
    Icon: FaBattleNet,
    heading: 'proven capability',
    description: 'give us a problem and we will engineer a solution! we build enterprise and analytical software for every industry.'
  }
]


export const jobsCard: T.JobsCard[] = [
  {
    heading: 'Solution Implementation',
    Icon: FaArrowRight,
    location: 'new york,us',
    url: 'solution-implementation'
  },
  {
    heading: 'Emerging Technologies',
    Icon: FaArrowRight,
    location: 'new york,us',
    url: 'emerging-technologies'
  },
  {
    heading: 'Software Development',
    Icon: FaArrowRight,
    location: 'new york,us',
    url: 'software-development'
  },
  {
    heading: 'Social Media Services',
    Icon: FaArrowRight,
    location: 'new york,us',
    url: 'social-media-services'
  },
  {
    heading: 'Consultation Services',
    Icon: FaArrowRight,
    location: 'new york,us',
    url: 'consultation-services'
  },
]


export const ourPeople: T.OurPeople = {
  image: '/ourWork.jpg',
  heading: 'Discover Our Stellar Team at CSV',
  description: `CSV is fueled by a diverse team of more than 100 professionals spread across two global offices. With a track record of over 150 successful projects and an outstanding rating of 4.9, we are recognized for our unwavering commitment to excellence. Our team blends expertise from diverse backgrounds, united by a common goal of pioneering innovation and surpassing client aspirations. Each success story at CSV is crafted by talented individuals who form the cornerstone of our accomplishments. Join us as we embark on a journey of innovation and unparalleled achievement`,
  btn: 'learn more!',
  url: '/company',
}


export const homePartnership: T.HomePartnership = {
  image: '/worker.png',
  heading: 'Our Technology Partnerships',
  description: `CSV cultivates strategic partnerships with top technology providers to enhance our solutions significantly. These collaborations grant us access to state-of-the-art tools, platforms, and resources, empowering our team to deliver innovative solutions that surpass client expectations. By maintaining close alignment with industry leaders, we consistently ensure our offerings remain at the forefront of technological advancements, delivering exceptional results and value to our clients.`
}


export const homePartnership2: T.HomePartnership2 = {
  image: '/Illustration2.png',
  heading: 'Year Highlighting Exceptional Partnerships',
  description: `CSV takes immense pride in the enduring relationships we've cultivated over Year  of partnership with industry leaders. These long-standing collaborations signify our commitment to excellence and continuous innovation. Through mutual trust and shared goals, we've navigated technological shifts and market trends, consistently delivering exceptional solutions to our clients. Our enduring partnerships serve as a testament to our reliability, adaptability, and unwavering dedication to driving success for all stakeholders involved.`,
  btn: 'view our technical skill set',
  url: '/our-work'
}


export const testimonial: T.Testimonial[] = [

  {
    tagLine: 'Exceptional Quality!',
    description: 'I was blown away by the exceptional quality of service provided. The team went above and beyond to meet my expectations.',
    Icon: FaQuoteLeft,
    heading: 'Emily Smith, Director of Marketing',
    image: 'https://avatars.mds.yandex.net/i?id=f73d2032ea7a3adc6dae74dc073b5bb54f353205-10806524-images-thumbs&n=13',
  },

  {
    tagLine: 'Outstanding Support!',
    description: 'The support team was outstanding! They were prompt, knowledgeable, and resolved my issue in no time. Highly recommended!',
    Icon: FaQuoteLeft,
    heading: 'David Johnson, IT Manager',
    image: 'https://avatars.mds.yandex.net/i?id=f73d2032ea7a3adc6dae74dc073b5bb54f353205-10806524-images-thumbs&n=13',
  },

  {
    tagLine: 'Impressive Results!',
    description: `I'm thoroughly impressed with the results delivered by this service. It has exceeded my expectations and added tremendous value to our project.`,
    Icon: FaQuoteLeft,
    heading: 'Sarah Williams, Project Manager',
    image: 'https://avatars.mds.yandex.net/i?id=f73d2032ea7a3adc6dae74dc073b5bb54f353205-10806524-images-thumbs&n=13',
  },

  {
    tagLine: 'Unbeatable Performance!',
    description: 'The performance of this product/service is unbeatable. It has significantly improved our efficiency and productivity.',
    Icon: FaQuoteLeft,
    heading: 'Michael Brown, Operations Manager',
    image: 'https://avatars.mds.yandex.net/i?id=f73d2032ea7a3adc6dae74dc073b5bb54f353205-10806524-images-thumbs&n=13',
  },

  {
    tagLine: 'Exceptional Experience!',
    description: 'Working with this team has been an exceptional experience. Their professionalism and dedication are commendable.',
    Icon: FaQuoteLeft,
    heading: 'Jessica Miller, HR Director',
    image: 'https://avatars.mds.yandex.net/i?id=f73d2032ea7a3adc6dae74dc073b5bb54f353205-10806524-images-thumbs&n=13',
  }
];


export const journey: T.Journey[] = [
  {
    count: 100,
    p: 'people onboard',
    plus: true,
    Icon: FaUser
  },
  {
    count: 4,
    p: 'global offices',
    plus: false,
    Icon: FaHome
  },
  {
    count: 150,
    p: 'projects completed',
    plus: true,
    Icon: FaLightbulb
  },
  {
    count: 4.9,
    p: 'clutch rating',
    plus: false,
    Icon: PiClubFill
  },
]

export const marqueeImageLinks: string[] = [
  '/projects/1.png',
  '/projects/2.png',
  '/projects/3.png',
  '/projects/4.png',
  '/projects/5.png',
  '/projects/6.png',
  '/projects/7.png',
  '/projects/8.png',
  '/projects/9.png',
  '/projects/10.png',
  '/projects/11.png',
  '/projects/12.png',
  '/projects/13.png',
  '/projects/14.png',
  '/projects/15.png',
  '/projects/16.jpg',
  '/projects/17.png',
  '/projects/18.png',
  '/projects/19.png',
  '/projects/20.png',
  '/projects/21.jpg',
]


export const workCards: T.WorkCards[] = [
  {
    image: "/work-cards/1.png",
    text: "Arbisoft helped edX create apps, courses, and data analytics for 20M+ learners.",
    url: '/'
  },
  {
    image: "/work-cards/2.png",
    text: "With zero downtime, we have expanded six continents.",
    url: '/'
  },
  {
    image: "/work-cards/3.png",
    text: "Developing an award-winning app that helped the company expand into Europe & North America.",
    url: '/'
  },
  {
    image: "/work-cards/4.png",
    text: "Building the world’s leading travel search engine from scratch.",
    url: '/'
  },
  {
    image: "/work-cards/5.png",
    text: "Reducing crawl time from 168 hours to 4 hours to save millions in revenue.",
    url: '/'
  },
  {
    image: "/work-cards/6.png",
    text: "Arbisoft and Philanthropy University partnered to create a learning platform that transforms the impact of local organizations.",
    url: '/'
  }
]


export const teamCards: T.TeamCards[] = [
  {
    image: '/team/csv/1.png',
    heading: 'Fasahat Malik',
    tagline: 'Founder & Chairman',
    description: 'Visionary leadership and technological prowess converge under the guidance of our esteemed Founder & Chairman, driving CyberSoft Vantage towards boundless innovation and unparalleled success.',
    linkedin: 'https://www.linkedin.com/in/fasahat-malik-357b0b25/'
  },
  {
    image: '/team/csv/15.png',
    heading: 'Fouad Shahid',
    tagline: 'Chief Executive Officer',
    description: 'At the helm of CyberSoft Vantage, our Chief Executive Officer orchestrates a symphony of innovation, excellence, and strategic direction, propelling us to new heights in the dynamic realm of technology.',
    linkedin: 'https://www.linkedin.com/in/fouad-shahid-60ba5635/'
  },
  {
    image: '/team/csv/11.png',
    heading: 'MUHAMMAD QASIM SHAMIM ALI KHAN',
    tagline: 'COO & HEAD OF SALES',
    description: 'As the driving force behind our operational excellence and revenue growth, our COO & Head of Sales at CyberSoft Vantage orchestrates a harmonious blend of strategy, execution, and customer-centric innovation, ensuring unparalleled success in the ever-evolving landscape of technology.',
    linkedin: 'https://www.linkedin.com/in/qasim-shamim/'
  },
  {
    image: '/team/csv/6.png',
    heading: 'FAIZAN AFZAL',
    tagline: 'Head of Projects',
    description: 'As the architect of our project landscape, our Head of Projects at CyberSoft Vantage expertly navigates the complexities of IT initiatives, seamlessly blending vision with execution to drive transformative outcomes.',
    linkedin: 'https://www.linkedin.com/in/faizan-afzal-365b34114/'
  },
  {
    image: '/team/csv/12.png',
    heading: 'TEHZEEB AHMAD',
    tagline: 'Head of Human Resource',
    description: 'At CyberSoft Vantage, our Head of Human Resources is the guardian of our company culture, nurturing a dynamic and inclusive environment where talent thrives, innovation flourishes, and success knows no bounds.',
    linkedin: 'https://www.linkedin.com/in/tehzeeb-ahmad-925b55133/'
  },
  {
    image: '/team/csv/4.png',
    heading: 'ALEEM AHMAD',
    tagline: 'senior product manager',
    description: 'As the linchpin of project success at CyberSoft Vantage, senior product manager meticulously coordinates every aspect of our initiatives, ensuring seamless execution and delivering exceptional results that exceed expectations.',
    linkedin: 'https://www.linkedin.com/in/aleem-ahmed-47399268?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
  },
  {
    image: '/team/csv/2.png',
    heading: 'Abdullah zubair',
    tagline: 'Senior Technical Project Manager',
    description: 'As the linchpin of project success at CyberSoft Vantage, our Senior Technical Project Manager meticulously coordinates every aspect of our initiatives, ensuring seamless execution and delivering exceptional results that exceed expectations.',
    linkedin: "https://www.linkedin.com/in/abdullah-zubair-/"
  },
  {
    image: '/team/csv/8.png',
    heading: 'Muhammad Sohail Nawaz',
    tagline: 'Technical lead',
    description: 'As the linchpin of project success at CyberSoft Vantage, our Technical lead meticulously coordinates every aspect of our initiatives, ensuring seamless execution and delivering exceptional results that exceed expectations.',
    linkedin: "https://www.linkedin.com/in/muhammad-sohail-nawaz-4b0b40222/"
  },
  {
    image: '/team/csv/5.png',
    heading: 'Aslam Ali',
    tagline: 'Technical lead',
    description: 'As the linchpin of project success at CyberSoft Vantage, our Senior Technical lead meticulously coordinates every aspect of our initiatives, ensuring seamless execution and delivering exceptional results that exceed expectations.',
    linkedin: "https://www.linkedin.com/in/aslam-ali-1a79aa20b/"
  },
  {
    image: '/team/csv/13.png',
    heading: 'Usama Gulraiz',
    tagline: 'Technical lead',
    description: 'As the linchpin of project success at CyberSoft Vantage, our Senior Technical lead meticulously coordinates every aspect of our initiatives, ensuring seamless execution and delivering exceptional results that exceed expectations.',
    linkedin: "https://www.linkedin.com/in/usamagulraiz/"
  },
  {
    image: '/team/csv/14.png',
    heading: 'Usama Bhatti',
    tagline: 'Technical lead',
    description: 'As the linchpin of project success at CyberSoft Vantage, our Senior Technical lead meticulously coordinates every aspect of our initiatives, ensuring seamless execution and delivering exceptional results that exceed expectations.',
    linkedin: "https://www.linkedin.com/in/usama-bhatti-029bb9190/"
  },
  {
    image: '/team/csv/3.png',
    heading: 'Affan Ahmed',
    tagline: 'Technical lead',
    description: 'As the linchpin of project success at CyberSoft Vantage, our Senior Technical lead meticulously coordinates every aspect of our initiatives, ensuring seamless execution and delivering exceptional results that exceed expectations.',
    linkedin: "https://www.linkedin.com/in/affan-ahmed-0b859521a/"
  },
  {
    image: '/team/csv/9.png',
    heading: 'Muhammad Sufyan',
    tagline: 'Technical lead',
    description: 'As the linchpin of project success at CyberSoft Vantage, our Senior Technical lead meticulously coordinates every aspect of our initiatives, ensuring seamless execution and delivering exceptional results that exceed expectations.',
    linkedin: "https://www.linkedin.com/in/muhammad-sufyan-373819140"
  },
  {
    image: '/team/csv/90.png',
    heading: 'Arbab Zafar',
    tagline: 'Software engineer ',
    description: 'As a key contributor at CyberSoft Vantage, Arbab Zafar meticulously coordinates every aspect of our initiatives, ensuring seamless execution and delivering exceptional results that exceed expectations. His expertise and dedication make him an invaluable asset to our team.',
    linkedin: "https://www.linkedin.com/in/arbab-zafar-web-developer/"
  },
]

export const serviceCards: T.ServiceCards[] = [
  {
    heading: 'Solution Implementation',
    description: 'As a trusted partner of world’s leading CRM solutions, we can help you customize and implement business solutions 3x faster and smarter.',
    bg: false,
    services: [
      {
        Icon: SiSalesforce,
        title: 'Salesforce',
        url: 'salesforce'
      },
      {
        Icon: FaServicestack,
        title: 'Services Now',
        url: 'services-now'
      },
      {
        Icon: SiMulesoft,
        title: 'Mulesoft',
        url: 'mulesoft'
      },
      {
        Icon: FaAws,
        title: 'AWS',
        url: 'aws'
      },
      {
        Icon: SiCyberdefenders,
        title: 'Cyber Security',
        url: 'cyber-security'
      },
      {
        Icon: SiBugcrowd,
        title: 'BPO',
        url: 'bpo'
      },
      {
        Icon: SiMixcloud,
        title: 'Cloud Migration',
        url: 'cloud-migration'
      },
      {
        Icon: FaShopify,
        title: 'Shopify',
        url: 'shopify'
      },
      {
        Icon: SiPowerbi,
        title: 'Power Bi',
        url: 'power-bi'
      },
    ]
  },
  {
    heading: 'Emerging Technologies',
    description: 'We help companies become an early adopter of emerging technologies to stay ahead of their competitors.',
    bg: true,
    services: [
      {
        Icon: BsClipboard2Data,
        title: 'Data Science & AI',
        url: 'data-science-ai'
      },
      {
        Icon: SiBlockchaindotcom,
        title: 'Blockchain',
        url: 'blockchain'
      },
      {
        Icon: SiSinglestore,
        title: 'Internet Of Things',
        url: 'internet-of-things'
      },
      {
        Icon: GiVrHeadset,
        title: 'AR/VR',
        url: 'ar-vr'
      },


      {
        Icon: MdOutlineHealthAndSafety,
        title: 'Healthcare',
        url: 'healthcare'
      },
      {
        Icon: GiGiftOfKnowledge,
        title: 'E-learning',
        url: 'e-learning'
      },
      {
        Icon: FaRobot,
        title: 'Robotic Process Automation',
        url: 'robotic-process-automation'
      },
    ]
  },
  {
    heading: 'Software Development',
    description: 'Named among top 1% global companies by Clutch, we have the trust of 500+ companies when it comes to bespoke software solutions.',
    bg: false,
    services: [
      {
        Icon: FaSearchengin,
        title: 'Q/A Testing',
        url: 'qa-testing'
      },
      {
        Icon: LuPenTool,
        title: 'UI/UX Design',
        url: 'ui-ux-design'
      },
      {
        Icon: SiInternetcomputer,
        title: 'Dev Ops',
        url: 'dev-ops'
      },
      {
        Icon: FaMobileScreenButton,
        title: 'Mobile Development',
        url: 'mobile-development'
      },
      {
        Icon: CgWebsite,
        title: 'Custom Software Development',
        url: 'custom-software-development'
      },
      {
        Icon: SiInternetcomputer,
        title: 'Embedded Software Development',
        url: 'embedded-software-development'
      },
      {
        Icon: GrIntegration,
        title: 'Web App Development',
        url: 'web-app-development'
      },
    ]
  },
  {
    heading: 'Social media services',
    description: 'We help companies become an early adopter of Social media things to stay ahead of their competitors.',
    bg: true,
    services: [
      {
        Icon: SiGooglemarketingplatform,
        title: 'Marketing Strategy',
        url: 'marketing-strategy'
      },
      {
        Icon: SiAdobecreativecloud,
        title: 'Creative Design Services',
        url: 'creative-design-services'
      },
      {
        Icon: CgWebsite,
        title: 'Website Development Solutions',
        url: 'website-development-solutions'
      },
      {
        Icon: FaDigitalOcean,
        title: 'Digital Marketing Services',
        url: 'digital-marketing-services'
      },
      {
        Icon: HiShoppingBag,
        title: 'Ecommerce Marketing Services',
        url: 'ecommerce-marketing-services'
      },

    ]
  },
  {
    heading: 'Consultation Services',
    description: 'We will help you accelerate your digital transformation journey.',
    bg: true,
    services: [
      {
        Icon: FaUserGroup,
        title: 'Discovery Workshop',
        url: 'discovery-workshop'
      },
      {
        Icon: IoDocumentTextOutline,
        title: 'Product Strategy',
        url: 'product-strategy'
      },
      {
        Icon: BsPersonFillGear,
        title: 'Process Consulting',
        url: 'process-consulting'
      },
      {
        Icon: GiBigGear,
        title: 'POC',
        url: 'poc'
      },
    ]
  },
]

export const companyAbout: T.CompanyAbout[] = [
  {
    heading: 'our vision',
    description: `CSV Vision: Excelling Today, Innovating Tomorrow
    At CSV, our vision is concise: to excel in the present and innovate for tomorrow. As an IT company, we're committed to leading the industry with cutting-edge solutions. We envision a future where CSV is synonymous with technological prowess, delivering unparalleled excellence in IT services. Our focus on constant innovation ensures that we remain at the forefront of the ever-evolving tech landscape. In essence, CSV is not just an IT company; we are the catalyst for progress, shaping the digital future.`,
    image: '/com.png',
    tagline: `Fasahat Malik - Founder & Chairman`
  },
  {
    heading: 'our mission',
    description: `Elevate IT Excellence
    CSV is on a mission to redefine IT excellence through innovation, client-centricity, and precision. We provide top-tier services, integrating cutting-edge technologies to empower our clients. Our commitment to execution excellence, agile adaptability, and sustainability sets a new standard in the dynamic IT landscape. In essence, we are shaping the future of IT services with focused, exceptional solutions.`,
    image: '/mission.png',
    tagline: 'COO & HEAD OF SALES'
  },
]




export const faqs: T.Faq[] = [
  {
    question: "What is custom software development?",
    answer: "Custom software development is the process of creating software solutions that are tailored to meet the specific needs of a particular business or organization."
  },
  {
    question: "What are the benefits of custom software development?",
    answer: "Benefits of custom software development include increased efficiency and productivity, improved data security, better alignment with business goals and processes, and the ability to scale and adapt to changing needs."
  },
  {
    question: "What are the steps involved in custom software development?",
    answer: "Steps involved in custom software development include requirements gathering, design, development, testing, and deployment."
  },
  {
    question: "How long does it take to develop a custom software solution?",
    answer: "The length of time it takes to develop a custom software solution can vary depending on the size and complexity of the project, but typically ranges from several months to a year."
  },
  {
    question: "What are the different types of custom software development services?",
    answer: "Types of custom software development services include web development, mobile app development, desktop application development, and custom software integration."
  },
  {
    question: "How much does custom software development cost?",
    answer: "The cost of custom software development can vary greatly depending on the size and complexity of the project, but typically ranges from several thousand to hundreds of thousands of dollars."
  },
  {
    question: "What is the role of the software development company in custom software development?",
    answer: "The role of the software development company is to work with the client to understand their needs and requirements, design and develop a custom software solution, and provide ongoing support and maintenance."
  },
  {
    question: "What is the process for choosing a software development company?",
    answer: "The process for choosing a software development company typically involves researching potential companies, reviewing their portfolio and client references, and evaluating their experience and expertise in custom software development."
  }
];



export const jobFormValidation: T.FormValidation = {
  fullName: Yup.string()
    .required("Full name is Required")
    .min(2, "Full name must be at least 2 characters")
    .max(50, "Full name cannot exceed 50 characters"),
  email: Yup.string().required("Email is Required").email("Invalid email address"),
  phone: Yup.string().required('Phone number is required'),
};



export const contactInfo: T.ContactInfo = {
  map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d64888646.17333206!2d-11.512505920647309!3d6.951539692927721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df95d9200b7931%3A0x4cf6b7c45b15660c!2sCyber%20Soft%20Vantage%20-%20CSV!5e0!3m2!1sen!2sus!4v1713989347583!5m2!1sen!2sus',
  img: '/contact.png',
  arr: [

    {
      url: 'info@tekcoflow.com',
      Icon: MdOutlineMail,
      isLink: true
    },
    {
      url: 'queries@tekcoflow.com',
      Icon: SiJquery,
      isLink: true
    },
    {
      url: 'careers@tekcoflow.com',
      Icon: MdOutlineWorkOutline,
      isLink: true
    },
    {
      url: 6176584171,
      Icon: IoPhonePortraitOutline,
      isLink: true
    },
    {
      url: '3000 northside blvd, appartment 1440, richardson, texas 75080, us',
      Icon: MdOutlineLocationOn,
      isLink: false
    }
  ]
}


