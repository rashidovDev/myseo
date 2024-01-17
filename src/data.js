//  icons
import {
  FiInstagram,
  FiGithub,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiMail,
  FiMapPin,
} from 'react-icons/fi';

import {RiEnglishInput, RiKakaoTalkFill} from "react-icons/ri"; 
import {
  FaLinkedin,
  FaTelegram
} from "react-icons/fa"



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

// projects images
import tezkor1 from './assets/project/tezkor24/tezkor1.png'
import tezkor2 from './assets/project/tezkor24/tezkor2.png'
import tezkor3 from './assets/project/tezkor24/tezkor3.png'
import tezkor4 from './assets/project/tezkor24/tezkor4.png'
import tezkor5 from './assets/project/tezkor24/tezkor5.png'
import tezkor6 from './assets/project/tezkor24/tezkor6.png'

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
    name: 'projects',
    href: 'projects',
  }
];

// social
export const social = [
  {
    icon: <FiInstagram />,
    href: 'http://instagram.com/arashidov_',
  },
  {
    icon: <FiGithub />,
    href: 'http://github.com/rashidovDev',
  },
  {
    icon: <FaLinkedin />,
    href: 'http://www.linkedin.com/in/anvarrashidov',
  },
  {
    icon: <FaTelegram />,
    href: 'http://t.me/anvar_rashidov',
  },
  // {
  //   icon: <RiKakaoTalkFill />,
  //   href: 'http://t.me/anvar_rashidov',
  // },
];

// projects
export const projectsData = [
{
  id : 1,
  name : 'Tezkor24',
  technology : "Node JS, Express JS, REST API, React JS, React Redux",
  description : `Tezkor24 is startup project on the fast and convenient 
  delivery service of food and fast food products in Tashkent. When it 
  comes to the project, I work on both the backend and frontend from 
  scratch to cover more functionality of this project. To develop the Backend,
  I used Express js to handle requests, and business logic and interact with 
  the database. During the development process, there were small problems
  such as implementing user authentication and authorization,
  creating user roles etc. According to Frontend, I used React and 
  some libraries such as Redux to develop user-friendly web application.
  There is an admin panel that is only available for admins so far to monitor
  important actions and receive information about order processes, customers,
  couriers and also restaurants and their products as well.`,
  projectURL : 'https://tezkor24.vercel.app/',
  githubURL : 'https://github.com/rashidovDev/Tezkor24client',
  images : [
  {
    id : 1,
    image : tezkor1
  },
  {
    id : 2,
    image : tezkor2
  },
  {
    id : 3,
    image : tezkor3
  },
  {
    id : 4,
    image : tezkor4
  },
  {
    id : 5,
    image : tezkor5
  },
  {
    id : 6,
    image : tezkor6
  },
  ]
},
{
  id : 2,
  name : 'Tezkor24',
  technology : "Node JS, Express JS, REST API, React JS, React Redux",
  description : `Tezkor24 is startup project on the fast and convenient 
  delivery service of food and fast food products in Tashkent. When it 
  comes to the project, I work on both the backend and frontend from 
  scratch to cover more functionality of this project. To develop the Backend,
  I used Express js to handle requests, and business logic and interact with 
  the database. During the development process, there were small problems
  such as implementing user authentication and authorization,
  creating user roles etc. According to Frontend, I used React and 
  some libraries such as Redux to develop user-friendly web application.
  There is an admin panel that is only available for admins so far to monitor
  important actions and receive information about order processes, customers,
  couriers and also restaurants and their products as well.`,
  projectURL : 'https://tezkor24.vercel.app/',
  githubURL : 'https://tezkor24.vercel.app/',
  images : [
  {
    id : 1,
    image : tezkor1
  },
  {
    id : 2,
    image : tezkor2
  },
  {
    id : 3,
    image : tezkor3
  },
  {
    id : 4,
    image : tezkor4
  },
  {
    id : 5,
    image : tezkor5
  },
  {
    id : 6,
    image : tezkor6
  },
  ]
},
]

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
  }
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
