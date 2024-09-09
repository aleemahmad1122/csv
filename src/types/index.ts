import { IconType } from "react-icons";
import * as Yup from 'yup';




export interface MenuItem {
    title: string;
    link: string;
}


export interface NavLink {
    title: string;
    link: string;
    menu: boolean | MenuItem[];
}



export interface SocialLinks {
    Icon: IconType;
    url: string;
}



export interface FormValidation {
    [key: string]: Yup.StringSchema<string>;
}

export interface FormInputs {
    label: string,
    type: string,
    name: string,
    field: any
}


export interface FormValues {
    fullName: string;
    email: string;
    phone: string;
    organization: string;
    message: string;
}



export interface CareerFormValues {
    fullName: string;
    email: string;
    phone: string;
    cv: File;
}


export interface FormInfo {
    image: string;
    title: string;
    heading: string;
    email: string;
    phone: string;
    link: SocialLinks;
}


export interface CompanyCard {
    Icon: IconType;
    heading: string;
    description: string;
}


export interface JobsCard {
    Icon: IconType;
    heading: string;
    location: string;
    url: string;
}


export interface OurPeople {
    image: string;
    heading: string;
    description?: string;
    btn: string;
    url: string;
}


export interface HomePartnership {
    image: string;
    heading: string;
    description: string;
}

export interface HomePartnership2 extends HomePartnership {
    url: string;
    btn: string;
}


export interface Testimonial extends CompanyCard {
    image: string;
    tagLine: string;
}


export interface Journey {
    count: number;
    p: string;
    plus: boolean;
    Icon: IconType;

}

export interface WorkCards {
    image: string;
    text: string;
    url: string;
}


export interface TeamCards extends HomePartnership {
    tagline: string;
    linkedin: string;
}

export interface Services extends SocialLinks {
    title: string
}

export interface ServiceCards {
    heading: string;
    description: string;
    bg: boolean;
    services: Services[]
}

export interface CompanyAbout extends HomePartnership {
    tagline: string
}


export interface Faq {
    question: string;
    answer: string;
}



export interface ContactInfo {
    map: string;
    img: string;
    arr: {
        isLink: boolean;
        url: string | number;
        Icon: IconType;
    }[]
}

export interface CardsData {
    bg: boolean;
    heading: string;
    description: string;
    data: {
        Icon: IconType;
        title: string;
        description: string;
    }[];
}

export interface ServiceDetailCard {
    page: string;
    heading: string;
    description: string;
    cardsData: CardsData[];
}

export interface OurTeam extends WorkCards {
    name: string;
}