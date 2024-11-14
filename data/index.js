import { brewman, go } from "@/assets";


const navLinks = [
    {
        id: "home",
        title: "Home",
        link: "/"
    },
    {
        id: "about-us",
        title: "About Us",
        link: "#about-us"
    },
    {
        id: "work",
        title: "Our Work",
        link: "#our-work"
    },
    {
        id: "services",
        title: "Our Services",
        link: "#our-services"
    },
    {
        id: "blogs",
        title: "Blogs",
        link: "#blogs"
    },
];

const services = [
    {
        title: "Strategy",
        points: [
            "Brand Strategy",
            "Creative Strategy"
        ],

    },
    {
        title: "Production",
        points: [
            "TVC & Content Production",
        ],

    },
    {
        title: "Design",
        points: [
            "Brand Identity",
            "Brand Nomenclature",
            "Packaging Design",
            "Retail Design",
            "Web Design",
        ],

    },
    {
        title: "Communications",
        points: [
            "Integrated Creative Development",
            "Content Development",
            "Social & Influencer Marketing",
            "Measurement & Reportin",
        ],

    },

];

const testimonials = [
    {
        testimonial:
            "Before we define any approach, we need to deline the brands overall goal. We then need to dive.",
        name: "Sara Jay",
        designation: "Traveller",
        rating: 5,
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "Before we define any approach, we need to deline the brands overall goal. We then need to dive.",
        name: "Cristian Daniel",
        designation: "Traveller",
        rating: 5,
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "Before we define any approach, we need to deline the brands overall goal. We then need to dive.",
        name: "Kausar Hasan",
        designation: "Traveller",
        rating: 5,
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const works = [
    {
        image: brewman,
        text: "Brand Identity for",
        brand: "BrewMan",
    },
    {
        image: go,
        text: "Ad Campaign for",
        brand: "Femm",
    },
    {
        image: brewman,
        text: "Label Design for",
        brand: "Go",
    },
    {
        image: go,
        text: "Brand Identity for",
        brand: "BrewMan",
    },
    {
        image: brewman,
        text: "Ad Campaign for",
        brand: "Femm",
    },
    {
        image: go,
        text: "Label Design for",
        brand: "Go",
    },
];

const contact = {
    location: "Vadodara",
    phone: "+91-219923192",
    mail: "XYZ@gmail.com"
};

const socials = {
    facebook: "",
    youtube: "",
    instagram: "",
}

export { services, testimonials, navLinks, works, contact, socials };