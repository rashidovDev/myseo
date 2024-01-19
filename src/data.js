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
import tezkor7 from './assets/project/tezkor24/tezkor7.png'
import tezkor8 from './assets/project/tezkor24/tezkor8.png'
import tezkor9 from './assets/project/tezkor24/tezkor9.png'

import airfel1 from './assets/project/Airfel/airfel1.png'
import airfel2 from './assets/project/Airfel/airfel2.png'
import airfel3 from './assets/project/Airfel/airfel3.png'

import asaxiy1 from './assets/project/Asaxiy/asaxiy1.png'
import asaxiy2 from './assets/project/Asaxiy/asaxiy2.png'
import asaxiy3 from './assets/project/Asaxiy/asaxiy3.png'
import asaxiy4 from './assets/project/Asaxiy/asaxiy4.png'

import zor1 from './assets/project/zor/zor1.png'
import zor2 from './assets/project/zor/zor2.png'
import zor3 from './assets/project/zor/zor3.png'
import zor4 from './assets/project/zor/zor4.png'
import zor5 from './assets/project/zor/zor5.png'

import yu1 from './assets/project/youtube/yu1.png'
import yu2 from './assets/project/youtube/yu2.png'
import yu3 from './assets/project/youtube/yu3.png'
import yu4 from './assets/project/youtube/yu4.png'

import dtm1 from './assets/project/dtm/dtm1.png'
import dtm2 from './assets/project/dtm/dtm2.png'
import dtm3 from './assets/project/dtm/dtm3.png'
import dtm4 from './assets/project/dtm/dtm4.png'
import dtm5 from './assets/project/dtm/dtm5.png'

import k1 from './assets/project/ksneaker/k1.png'
import k2 from './assets/project/ksneaker/k2.png'
import k3 from './assets/project/ksneaker/k3.png'
import k4 from './assets/project/ksneaker/k4.png'
import k5 from './assets/project/ksneaker/k5.png'
import k6 from './assets/project/ksneaker/k6.png'
import k7 from './assets/project/ksneaker/k7.png'
import k8 from './assets/project/ksneaker/k8.png'

import yemak1 from './assets/project/yemak/yemak1.png'
import yemak2 from './assets/project/yemak/yemak2.png'
import yemak3 from './assets/project/yemak/yemak3.png'

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
  technology : `Node JS, Express JS, REST API, React JS, React query, React forms, 
  React Redux, Tailwind css, Nodemailer, JWT Token`,
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
  {
    id : 7,
    image : tezkor7
  },
  {
    id : 8,
    image : tezkor8
  },
  {
    id : 9,
    image : tezkor9
  },
  ]
},
{
  id : 2,
  name : 'Airfel',
  technology : `React JS, React Redux, Redux toolkit, React query,  JWT Token, Unit testing,
   REST API, Sass, Bootstrap5`,
  description : `Airfel is a Turkish company which sells air conditioners around the world.
  We worked on develop Admin and Operator panel to monitor sales and other information in Uzbekistan. 
   During development process
  I was responsible for implementing various CRUD operations through receiving different kind of API.
  Moreover we wrote unit test in order to contribute to the reliability and maintainability and
  prevent unexpected errors in production.
  `,
  projectURL : 'https://airfel.com/',
  githubURL : 'https://tezkor24.vercel.app/',
  images : [
  {
    id : 1,
    image : airfel1
  },
  {
    id : 2,
    image : airfel2
  },
  {
    id : 3,
    image : airfel3
  }
  ]
},
{
  id : 3,
  name : 'Yemak.uz',
  technology : "React JS, Sass, Bootstrap, React Redux, Unit testing",
  description : `This project offers different kind of restaurants to customer to order foods online in Karshi, Uzbekistan.To develop it, 
  we use React and several react libraries to optimize performance.Moreover we used google map Adding google map to enhance user experience and
  providing additional functionality`,
  projectURL : 'https://yemak.uz',
  githubURL : 'https://tezkor24.vercel.app/',
  images : [
  {
    id : 1,
    image : yemak1
  },
  {
    id : 2,
    image : yemak2
  },
  {
    id : 3,
    image : yemak3
  }
  ]
},
{
  id : 4,
  name : 'Asaxiy LLC',
  technology : "React JS, Typescript, React Redux, Reduxt toolkit, Tailwind css, Material UI",
  description : `In this project I built a clone of Asaxiy which is one of the popular ecommerce website in Uzbekistan.
  In this project I used Typescript to handle and prevent unexpected errors which occurs with types and values.For state managemennt I used Redux toolkit
  which is one of the popular react library and this project is fully user friendly as well`,
  projectURL : 'https://asaxiy-rashidovdev.netlify.app/',
  githubURL : 'https://tezkor24.vercel.app/',
  images : [
  {
    id : 1,
    image : asaxiy1
  },
  {
    id : 2,
    image : asaxiy2
  },
  {
    id : 3,
    image : asaxiy3
  },
  {
    id : 4,
    image : asaxiy4
  }
  ]
},

{
  id : 5,
  name : 'My Youtube',
  technology : "React JS, Typescript, React Redux, Tailwind Css, Material UI",
  description : `In this project I built a my youtube which is specialised to work as 
  how real Youtube works.You can watch any latest video you want without complication.
  In this project, I used some free APIs to get latest youtube videos.
  There is a search input and you can search any video or channel you want`,
  projectURL : 'https://youtube-rashidov.netlify.app/',
  githubURL : 'https://tezkor24.vercel.app/',
  images : [
  {
    id : 1,
    image : yu1
  },
  {
    id : 2,
    image : yu2
  },
  {
    id : 3,
    image : yu3
  },
  {
    id : 4,
    image : yu4
  }
  ]
},
{
  id : 6,
  name : 'DTM.UZ',
  technology : "React JS, Typescript, React Redux, Sass",
  description : `In this project I built a clone of dtm.uz whis is test organized center
  for students to qualify all universities in Uzbekistan. In this project I used React Typescript and Redux toolkit`,
  projectURL : 'https://dtmuzz.netlify.app/',
  githubURL : 'https://tezkor24.vercel.app/',
  images : [
  {
    id : 1,
    image : dtm1
  },
  {
    id : 2,
    image : dtm2
  },
  {
    id : 3,
    image : dtm3
  },
  {
    id : 4,
    image : dtm4
  },
  {
    id : 5,
    image : dtm5
  }
  ]
},
{
  id : 7,
  name : 'Zorfastfood.uz',
  technology : "React JS, React Redux, Reduxt toolkit Tailwind Css",
  description : `In this project I built a website for Zorfastfood fastfood center. In this project I used React.For state management I used Redux toolkit
  which is one of the popular react library and this project is fully user friendly as well.For using this application is very convenient 
  for consumers to order different kinds of fastfood products`,
  projectURL : 'https://zorfastfooduz.vercel.app/',
  githubURL : 'https://tezkor24.vercel.app/',
  images : [
  {
    id : 1,
    image : zor1
  },
  {
    id : 2,
    image : zor2
  },
  {
    id : 3,
    image : zor3
  },
  {
    id : 4,
    image : zor4
  },
  {
    id : 5,
    image : zor5
  }
  ]
},
{
  id : 8,
  name : 'KSneakers',
  technology : "React JS, Typescript, React Redux, Tailwind CSS",
  description : `  In this project I build a shop which sells various sneakers.For creating it I used React 
  Typescript and Tailwind CSS for styling`,
  projectURL : 'https://commerce-rashidov.netlify.app/',
  githubURL : 'https://tezkor24.vercel.app/',
  images : [
  {
    id : 1,
    image : k1
  },
  {
    id : 2,
    image : k2
  },
  {
    id : 3,
    image : k3
  },
  {
    id : 4,
    image : k4
  },
  {
    id : 5,
    image : k5
  },
  {
    id : 6,
    image : k6
  },
  {
    id : 7,
    image : k7
  },
  {
    id : 8,
    image : k8
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
