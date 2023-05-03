import {
  css3,
  express,
  firebase,
  html5,
  javascript,
  mongodb,
  react,
  tailwindCSS,
} from "../../assets/icons";

import { SiGmail, SiLinkedin } from "react-icons/si";
import { BsGithub } from "react-icons/bs";

const navLinks = [
  {
    id: "/",
    title: "Home",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const icons = [
  { icon: SiGmail, link: "mailto:munnaahmed2025@gmail.com" },
  { icon: SiLinkedin, link: "https://www.linkedin.com/in/munnaahmed01/" },
  { icon: BsGithub, link: "https://github.com/MunnaAhmed130" },
];

const skills = [
  { icon: javascript, title: "JavaScript" },
  { icon: css3, title: "CSS3" },
  { icon: html5, title: "HTML5" },
  { icon: tailwindCSS, title: "Tailwind CSS" },
  { icon: react, title: "ReactJS" },
  { icon: express, title: "ExpressJS" },
  { icon: firebase, title: "Firebase" },
  { icon: mongodb, title: "MongoDB" },
];

export { navLinks, skills, icons };
