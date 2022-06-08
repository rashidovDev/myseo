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

import {
  FaTelegram
} from "react-icons/fa"

// companies icons
import FreelancerBrandIcon from './assets/img/brands/freelancer.png';
import UpworkBrandIcon from './assets/img/brands/upwork.png';
import FiverBrandIcon from './assets/img/brands/fiverr.png';
import BehanceBrandIcon from './assets/img/brands/behance.png';
import DribbbleBrandIcon from './assets/img/brands/dribbble.png';

// projects images
import Project1 from './assets/img/projects/crypto.jpg';
import Project2 from './assets/img/projects/calculator.jpg';
import Project3 from './assets/img/projects/ecommerce.jpg';
import Project4 from './assets/img/projects/portfolio.jpg';
import Project5 from './assets/img/projects/shopping.jpg';
import Project6 from './assets/img/projects/weather.jpg';

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
  {
    name: 'contact',
    href: 'contact',
  },
];

// social
export const social = [
  {
    icon: <FiInstagram />,
    href: 'http://instagram.com/rashidovdev',
  },
  {
    icon: <FiGithub />,
    href: 'http://github.com/rashidovDev',
  },
  {
    icon: <FaTelegram />,
    href: 'http://github.com/rashidovDev',
  },

];

// projects
export const projectsData = [
  {
    id: '1',
    image: Project1,
    title: "Here you can explore all of the coins and this project works online",
    name: 'Crypto Currency',
    category: 'with API',
  },
  {
    id: '2',
    image: Project2,
    title: "Here you can implement some calculation without difficulties ",
    name: 'Calculator',
    category: 'javascript',
  },
  {
    id: '3',
    image: Project3,
    title: "Here you have opportunity to buy something",
    name: 'Ecommerce',
    category: 'branding',
  },
  {
    id: '4',
    image: Project4,
    title: "Here you can have an information about me and my skills",
    name: 'Portfolio',
    category: "javascript",
  },
  {
    id: '5',
    image: Project5,
    title: "Here you can buy something ",
    name: 'Shopping',
    category: 'branding',
  },
  {
    id: '6',
    image: Project6,
    title: "Here you can have an information about weather all of the sides of the world",
    name: 'Weather',
    category: 'with API',
  },
];

// projects
export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'with API',
  },
  {
    name: 'javascript',
  },
  {
    name: 'branding',
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
