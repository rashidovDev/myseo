//  icons
import {
  
  FiInstagram,
  FiGithub,
  
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
} from 'react-icons/fi';

import {RiEnglishInput} from "react-icons/ri"; 

import {
  FaLinkedin,
  FaTelegram
} from "react-icons/fa"

// companies icons
import FreelancerBrandIcon from './assets/img/brands/freelancer.png';
import UpworkBrandIcon from './assets/img/brands/upwork.png';
import FiverBrandIcon from './assets/img/brands/fiverr.png';
import BehanceBrandIcon from './assets/img/brands/behance.png';
import DribbbleBrandIcon from './assets/img/brands/dribbble.png';

// projects images
import Project1 from './assets/img/projects/zorfastfood.jpg';
import Project2 from './assets/img/projects/dtm.jpg';
import Project3 from './assets/img/projects/weatherr.jpg';
import Project4 from './assets/img/projects/shoppinguz.jpg';
import Project5 from './assets/img/projects/myportfolio.jpg';
import Project6 from './assets/img/projects/calculatorr.jpg';

// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/bootstrap.png';
import SkillImg4 from './assets/img/skills/sass.png';
import SkillImg5 from './assets/img/skills/js.png';
import SkillImg6 from './assets/img/skills/reactjs.png';
import SkillImg7 from './assets/img/skills/nextjs.png';
import SkillImg8 from './assets/img/skills/typescript.png';
import SkillImg9 from './assets/img/skills/figma.png';
import SkillImg10 from './assets/img/skills/git.png';
import SkillImg11 from './assets/img/skills/nodejs.png';
import SkillImg12 from './assets/img/skills/expressjs.png';
import SkillImg13 from './assets/img/skills/mongodb.png';


// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'portfolio',
    href: 'portfolio',
  },
  {
    name: 'services',
    href: 'services',
  },
];

// social
export const social = [
  {
    icon: <FiInstagram />,
    href: 'http://instagram.com/rashidov_dev',
  },
  {
    icon: <FiGithub />,
    href: 'http://github.com/rashidovDev',
  },
  {
    icon: <FaLinkedin />,
    href: 'https:linkedin.com/in/anvarrashidov17',
  },
  {
    icon: <FaTelegram />,
    href: 'http://t.me/anvar_rashidov',
  },
];

// projects
export const projectsData = [
  {
    id: '1',
    image: Project1,
    title: "Redux,Redux toolkit,Tailwind",
    name: "Zo'rFastfood.uz",
    category: 'NextJS',
    href : "https://zorfastfooduz.netlify.app"
  },
  {
    id: '2',
    image: Project2,
    title: "Typescript,React-Redux",
    name: 'Dtm-clone',
    category: 'Typescript',
    href : "https://dtmuzz.netlify.app/"
  },
  {
    id: '3',
    image: Project3,
    title: "React,Weather API",
    name: 'Weather',
    category: 'ReactJS',
    href : "http://weather-rashidov.netlify.app"
  },
  {
    id: '4',
    image: Project4,
    title: "React,React-Redux,Bootstrap",
    name: 'ShoppingUz',
    category: "javascript",
    href : "https://rashidovshop.netlify.app/"
  },
  {
    id: '5',
    image: Project5,
    title: "NextJS,Reactstrap",
    name: 'Portfolio',
    category: 'NextJS',
    href : "http://myportrashidov.netlify.app"
  },
  {
    id: '6',
    image: Project6,
    title: "React, React Hooks",
    name: 'Calculator',
    category: 'ReactJS',
    href : "http://calculator-rashidov.netlify.app"
  },
];

// projects
export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'ReactJS',
  },
  {
    name: 'NextJS',
  },
  {
    name: 'Typescript',
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
  {
    image: SkillImg9,
  },
  {
    image: SkillImg10,
  },
  {
    image: SkillImg11,
  },
  {
    image: SkillImg12,
  },
  {
    image: SkillImg13,
  },
];


// services
export const services = [
  {
    icon: <FiLayout />,
    name: 'Web Design',
    description:
      'I have a good standart to build amazing UI interfaces',
  },
  {
    icon: <FiSettings />,
    name: 'Solution Logical Challenges',
    description:
      "I am big fan of Coding challenges that's why I can solve several confusing Coding challenges ",
  },
  {
    icon: <FiPenTool />,
    name: 'Socialism',
    description:
      'I am social person and I get on with team without complication ',
  },
  {
    icon: <RiEnglishInput/>,
    name: 'Polyglot',
    description:
      'I have a pretty knowledge in English and I have a good communication skills',
  }
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Have a question?',
    subtitle: 'I am here to help you',
    description: 'It is my email anvarrashiodv17@gmail.com',
  },
  {
    icon: <FiMapPin />,
    title: 'Current Location',
    subtitle: 'Tashkent, Uzbekistan',
    description: 'I can serve clients around the world',
  },
];
