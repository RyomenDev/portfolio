import emoji from "react-easy-emoji";
import { Icon } from "@iconify/react";
import splashAnimation from "../assets/lottie/splashAnimation";

// Import images directly
import profileImage from "../assets/img/AkashMishra.jpg";
//
import vivafit from "../assets/img/vivafit.png";
import Weboin from "../assets/img/Weboin.png";
import CodeNetra from "../assets/img/codeNetra.png";
//
import School from "../assets/img/School.png";
import College from "../assets/img/College.png";

import linkedinIcon from "../assets/svg/linkedin-brands-solid.svg";
import githubIcon from "../assets/svg/github-brands-solid.svg";

import ScrapeSmartImg from "../assets/projects/scrapeSmart.png";
import GlamourGrove from "../assets/projects/GlamourGroveImg.png";
import CodeQuest from "../assets/projects/CodeQuestImg.png";

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000, // Set animation duration as per your animation
};

const greeting = {
  username: "Akash Mishra",
  title: "Hi All, I'm Akash Mishra",
  logo_name: "Akash Mishra",
  message: "Driven to innovate and create impactful technological solutions.",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Nodejs  and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/196IVtHi1vBhe9KjHaRzlrle7AMKoa_cn/view?usp=drivesdk", // Set to empty to hide the button
  downloadLink:
    "https://drive.google.com/uc?export=download&id=196IVtHi1vBhe9KjHaRzlrle7AMKoa_cn", // Set to empty to hide the button
  githubProfile: "https://github.com/ashutosh1919",
  displayGreeting: true, // Set false to hide this section, defaults to true
};

const socialMediaLinks = [
  /* Your Social Media Link */

  {
    name: "Github",
    link: "https://github.com/ashutosh1919",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ashutosh1919/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://youtube.com/c/DevSense19",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:ashutoshhathidara98@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://twitter.com/ashutosh_1919",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/laymanbrother.19/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/layman_brother/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const navBar = {
  show: true, // Toggle visibility of the navigation bar
};

const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Akash",
  middleName: "",
  lastName: "Mishra",
  message: "Driven to innovate and create impactful technological solutions.",
  icons: [
    { image: githubIcon, url: "https://github.com/RyomenDev" },
    {
      image: linkedinIcon,
      url: "https://www.linkedin.com/in/akash-mishra-123456789",
    },
  ],
};

const about = {
  show: true,
  heading: "About Me",
  imageLink: profileImage, // Use imported profile picture
  imageSize: 375,
  message: `
    My name is Akash Mishra, a final-year Computer Science and Engineering student at IIIT Ranchi. 
    I'm passionate about web development and building efficient, scalable solutions using technologies like the MERN stack. 
    I thrive on working on personal projects that challenge my abilities and enable me to create impactful, user-focused applications.
  `,
  resume:
    "https://drive.google.com/file/d/196IVtHi1vBhe9KjHaRzlrle7AMKoa_cn/view?usp=drivesdk", // Link to resume
};

// Projects Section Configuration
const repos = {
  show: true,
  heading: "Projects",
  gitHubUsername: "RyomenDev",
  reposLength: 0, // Set to 0 to stop fetching recent projects
  specificRepos: [
    "CodeQuest",
    "GlamourGrove",
    "Round-Robin-Coupon-Distribution",
    "aether-ai",
    "UrbanGems",
    "ScrapeSmart",
  ], // List your specific repositories here
};

const leadership = {
  show: false, // Currently hidden
  heading: "Leadership",
  message: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Vitae auctor eu augue ut lectus arcu bibendum at varius. 
    Libero justo laoreet sit amet cursus sit amet.
  `,
  images: [
    {
      img: profileImage,
      label: "First slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      img: profileImage,
      label: "Second slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
  ],
  imageSize: {
    width: "615",
    height: "450",
  },
};

const skillsCollection = {
  title: "What I do",
  subTitle:
    "FULL STACK DEVELOPER WHO WANTS TO EXPLORE and utilize cutting-edge technologies to create innovative, user-centric applications.",
  data: [
    {
      title: "Skills Collection",
      skills: [
        {
          text: "Building responsive and dynamic web applications using React.js & Redux",
          emoji: "⚡",
        },
        {
          text: "Developing RESTful APIs and backend services using Node.js, Express.js, and MongoDB",
          emoji: "⚡",
        },
        {
          text: "Integrating third-party APIs like Stripe for payments and Google Maps for location-based services",
          emoji: "⚡",
        },
        {
          text: "Enhancing performance with optimized database architecture and scalable backend solutions",
          emoji: "⚡",
        },
        {
          text: "Implementing secure authentication and authorization using JWT",
          emoji: "⚡",
        },
      ],
      softwareSkills: [
        { skillName: "Node", iconifyTag: "vscode-icons:file-type-node" },
        { skillName: "Reactjs", iconifyTag: "vscode-icons:file-type-reactjs" },
        { skillName: "AWS", iconifyTag: "logos:aws" },
        { skillName: "Swagger API", iconifyTag: "logos:swagger" },
        { skillName: "Firebase", iconifyTag: "logos:firebase" },
        { skillName: "Gemini", iconifyTag: "logos:gemini" },
        { skillName: "Puppeteer", iconifyTag: "logos:puppeteer" },
        { skillName: "OpenAI", iconifyTag: "logos:openai" },
        { skillName: "Tailwind CSS", iconifyTag: "logos:tailwindcss-icon" },
        { skillName: "Redux", iconifyTag: "logos:redux" },
        // { skillName: "Express.js", iconifyTag: "logos:express" },

        //
        { skillName: "Cpp", iconifyTag: "vscode-icons:file-type-cpp" },
        { skillName: "JavaScript", iconifyTag: "logos:javascript" },
        { skillName: "TypeScript", iconifyTag: "logos:typescript-icon" },
        { skillName: "Python", iconifyTag: "logos:python" },
        { skillName: "C", iconifyTag: "vscode-icons:file-type-c" },
        { skillName: "Elastic Stack", iconifyTag: "logos:elasticsearch" },
        { skillName: "Docker", iconifyTag: "logos:docker-icon" },
        { skillName: "Git", iconifyTag: "logos:git-icon" },
        { skillName: "GitHub", iconifyTag: "akar-icons:github-fill" },
        { skillName: "Strapi", iconifyTag: "logos:strapi" },

        //
        { skillName: "Cloudinary", iconifyTag: "logos:cloudinary" },
        { skillName: "VS Code", iconifyTag: "vscode-icons:file-type-vscode" },
        { skillName: "MongoDB", iconifyTag: "logos:mongodb" },
        { skillName: "SQL", iconifyTag: "logos:mysql" },
        { skillName: "Redis", iconifyTag: "logos:redis" },
        { skillName: "Appwrite", iconifyTag: "logos:appwrite" },
        { skillName: "Heroku", iconifyTag: "logos:heroku-icon" },
        { skillName: "Vercel", iconifyTag: "logos:vercel-icon" },
        { skillName: "Vite", iconifyTag: "logos:vitejs" },
        {
          skillName: "Markdown",
          iconifyTag: "vscode-icons:file-type-markdown",
        },
        //
        { skillName: "CSS", iconifyTag: "vscode-icons:file-type-css" },
        { skillName: "JSON", iconifyTag: "vscode-icons:file-type-json" },
        { skillName: "MongoDB", iconifyTag: "logos:mongodb" },
        { skillName: "Postman", iconifyTag: "logos:postman-icon" },
        { skillName: "MySQL", iconifyTag: "logos:mysql" },
        { skillName: "Stripe", iconifyTag: "logos:stripe" },
        { skillName: "Google Maps API", iconifyTag: "logos:google-maps" },
        { skillName: "Google APIs", iconifyTag: "logos:google" },
        { skillName: "WebSockets", iconifyTag: "logos:websocket" },
        // { skillName: "MySQL Workbench", iconifyTag: "logos:mysql" },
      ],
    },
  ],
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Developing dynamic and responsive user interfaces for web and mobile platforms",
        "⚡ Designing and integrating scalable backend architectures for seamless data flow",
        "⚡ Implementing real-time communication and AI-powered features to enhance user experience",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "logos:firebase",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gemini",
          fontAwesomeClassname: "logos:gemini",
          style: { color: "#00BCD4" }, // Cyan
        },
        {
          skillName: "Puppeteer",
          fontAwesomeClassname: "logos:puppeteer",
          style: { color: "#40B5A4" }, // Sea Green
        },
        {
          skillName: "OpenAI",
          fontAwesomeClassname: "logos:openai",
          style: { color: "#412991" }, // Deep Purple
        },
        {
          skillName: "Redux",
          fontAwesomeClassname: "logos:redux",
          style: { color: "#764ABC" }, // Official Redux Purple
        },
        {
          skillName: "Tailwind CSS",
          fontAwesomeClassname: "logos:tailwindcss-icon",
          style: { color: "#38BDF8" }, // Official Tailwind Blue
        },
        {
          skillName: "Elastic Stack",
          fontAwesomeClassname: "logos:elasticsearch",
          style: { color: "#FEC514" }, // Elastic Yellow
        },
        {
          skillName: "Strapi",
          fontAwesomeClassname: "logos:strapi",
          style: { color: "#8E75FF" }, // Strapi Purple
        },
        {
          skillName: "WebSockets",
          fontAwesomeClassname: "logos:websocket",
          style: { color: "#FA7E1E" }, // Orange
        },
        // {
        //   skillName: "Yarn",
        //   fontAwesomeClassname: "simple-icons:yarn",
        //   style: {
        //     color: "#2C8EBB",
        //   },
        // },
        // {
        //   skillName: "Gatsby",
        //   fontAwesomeClassname: "simple-icons:gatsby",
        //   style: {
        //     color: "#663399",
        //   },
        // },
        // {
        //   skillName: "Flutter",
        //   fontAwesomeClassname: "simple-icons:flutter",
        //   style: {
        //     color: "#02569B",
        //   },
        // },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Managing media storage, content delivery, and real-time data syncing across services",
        "⚡ Working with backend infrastructure, including databases and cloud-hosted APIs",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "Vercel",
          fontAwesomeClassname: "logos:vercel-icon",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "Cloudinary",
          fontAwesomeClassname: "logos:cloudinary",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "logos:heroku-icon",
          style: {
            color: "#326CE5",
          },
        },
        // {
        //   skillName: "Kubernetes",
        //   fontAwesomeClassname: "simple-icons:kubernetes",
        //   style: {
        //     color: "#326CE5",
        //   },
        // },
        // {
        //   skillName: "GCP",
        //   fontAwesomeClassname: "simple-icons:googlecloud",
        //   style: {
        //     color: "#4285F4",
        //   },
        // },
        // {
        //   skillName: "Azure",
        //   fontAwesomeClassname: "simple-icons:microsoftazure",
        //   style: {
        //     color: "#0089D6",
        //   },
        // },
        // {
        //   skillName: "PostgreSQL",
        //   fontAwesomeClassname: "simple-icons:postgresql",
        //   style: {
        //     color: "#336791",
        //   },
        // },
      ],
    },
    {
      title: "Tools & Platforms I Use",
      fileName: "DesignImg", // keep your illustration/animation name the same if still appropriate
      skills: [
        "⚡ Designing highly attractive user interfaces for web applications",
        "⚡ Managing APIs, backends, and headless CMS platforms efficiently",
        "⚡ Optimizing development and testing workflows with modern developer tools",
      ],
      softwareSkills: [
        {
          skillName: "Strapi",
          fontAwesomeClassname: "logos:strapi",
          style: { color: "#8E75FF" },
        },
        {
          skillName: "Appwrite",
          fontAwesomeClassname: "logos:appwrite-icon",
          style: { color: "#F02E65" },
        },
        {
          skillName: "VS Code",
          fontAwesomeClassname: "simple-icons:visualstudiocode",
          style: { color: "#007ACC" },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: { color: "#F1502F" },
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "simple-icons:github",
          style: { color: "#181717" },
        },
        {
          skillName: "Postman",
          fontAwesomeClassname: "simple-icons:postman",
          style: { color: "#FF6C37" },
        },
        {
          skillName: "Swagger API",
          fontAwesomeClassname: "simple-icons:swagger",
          style: { color: "#85EA2D" },
        },
      ],
    },

    // {
    //   title: "UI/UX Design",
    //   fileName: "DesignImg",
    //   skills: [
    //     "⚡ Designing highly attractive user interface for mobile and web applications",
    //     "⚡ Customizing logo designs and building logos from scratch",
    //     "⚡ Creating the flow of application functionalities to optimize user experience",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Adobe XD",
    //       fontAwesomeClassname: "simple-icons:adobexd",
    //       style: {
    //         color: "#FF2BC2",
    //       },
    //     },
    //     {
    //       skillName: "Figma",
    //       fontAwesomeClassname: "simple-icons:figma",
    //       style: {
    //         color: "#F24E1E",
    //       },
    //     },
    //     {
    //       skillName: "Adobe Illustrator",
    //       fontAwesomeClassname: "simple-icons:adobeillustrator",
    //       style: {
    //         color: "#FF7C00",
    //       },
    //     },
    //     {
    //       skillName: "Inkscape",
    //       fontAwesomeClassname: "simple-icons:inkscape",
    //       style: {
    //         color: "#000000",
    //       },
    //     },
    //   ],
    // },
  ],
};

const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message: `
    I'm currently seeking full-time opportunities in Software Development.  
    If you know of any available positions, have questions, or just want to connect, please feel free to email me at:
  `,
  email: "ai.akash.mishra@gmail.com", // Contact email
};

const seoData = {
  title: "Akash Mishra | Full Stack Developer | MERN Stack Expert",
  author: "Akash Mishra",
  description:
    "Akash Mishra is a Full Stack Developer specializing in JavaScript, React, Node.js, and MongoDB. Explore his portfolio, projects, and skills, and connect for opportunities.",
  url: "https://akashmishra-portfolio.vercel.app/",
  image: profileImage,
  keywords: [
    "Akash Mishra",
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "MERN Stack",
    "JavaScript Developer",
    "React",
    "Node.js",
    "MongoDB",
    "Web Development",
    "Portfolio",
    "IIIT Ranchi",
    "Indian Institute of Information Technology",
  ],
};

const projectsHeader = {
  title: "Projects",
  gitHubUsername: "RyomenDev",
  description:
    "My projects leverage the latest web technologies to build scalable and efficient applications. I specialize in full-stack development, integrating real-time features, cloud services, and optimized database solutions to enhance user experience and performance. I also deploy web applications using cloud infrastructure for better scalability and reliability.",
  avatar_image_path: "projects_image.svg",
};

const projectsData = [
  {
    id: 1,
    name: "ScrapeSmart: AI-Powered Scraper",
    description:
      "ScrapeSmart is a MERN-based Amazon Smart TV scraper that extracts product details, pricing, offers, and AI-generated review summaries. Built with Node.js, Puppeteer, Express, React.js, and MongoDB, it provides an interactive UI for seamless product data retrieval and storage.",
    tools: [
      "React.js",
      "Express",
      "MongoDB",
      "tailwindcss",
      "OpenAI API",
      "Gemini API",
      "Puppeteer",
      "render",
      "vercel",
    ],
    role: "",
    image: ScrapeSmartImg,
    code: "https://github.com/RyomenDev/ScrapeSmart",
    demo: "https://scrapesmart.vercel.app/",
  },
  {
    id: 2,
    name: "GlamourGrove: Clothing Website",
    description:
      "GlamourGrove is a full-stack fashion e-commerce platform that offers a seamless shopping experience with modern UI, secure transactions, and advanced search capabilities. Built with the MERN stack, it provides users with a stylish and intuitive interface to explore and purchase the latest fashion trends.",
    tools: [
      "RetellAi",
      "React.js",
      "Express",
      "MongoDB",
      "tailwindcss",
      "FireBase",
      "Stripe",
      "Redux",
      "Cloudinary",
    ],
    role: "",
    image: GlamourGrove,
    code: "https://github.com/RyomenDev/GlamourGrove",
    demo: "https://glamourgrove-umber.vercel.app/",
  },
  {
    id: 3,
    name: "CodeQuest: Document Search Engine",
    description:
      "CodeQuest is a document search engine leveraging NLP techniques for efficient information retrieval. It implements BM25 and TF-IDF vectorization for accurate query matching and ranking, with tokenization, stopword removal, and lemmatization. Built using Node.js, Express.js, and EJS, it offers a dynamic UI for seamless document exploration and retrieval.",
    tools: [
      "Node.js",
      "Express.js",
      "EJS",
      "HTML5",
      "CSS3",
      "NLP Libraries",
      "BM25",
    ],
    image: CodeQuest,
    code: "https://github.com/RyomenDev/CodeQuest",
    role: "",
    demo: "https://codequest-jalp.onrender.com/",
  },
];

const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/u/RyoZephyr/",
    },
    {
      siteName: "GeeksforGeeks",
      iconifyClassname: "simple-icons:geeksforgeeks",
      style: {
        color: "#2F8D46",
      },
      profileLink: "https://github.com/RyomenDev",
    },

    // {
    //   siteName: "HackerRank",
    //   iconifyClassname: "simple-icons:hackerrank",
    //   style: {
    //     color: "#2EC866",
    //   },
    //   profileLink: "#",
    // },
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "#",
    // },
    // {
    //   siteName: "Codeforces",
    //   iconifyClassname: "simple-icons:codeforces",
    //   style: {
    //     color: "#1F8ACB",
    //   },
    //   profileLink: "#",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "#",
    // },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "#",
    // },
  ],
};

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Indian Institute of Information Technology Ranchi",
      logo: College,
      subHeader: "B.tech in Computer Science & Engineering",
      duration: "📅 2021 – 2025",
      desc: "Conducted research on UAV resource allocation as part of major and minor projects at IIIT Ranchi. Served as a Public Relations (PR) member, actively contributing to community engagement and event coordination.",
      descBullets: [
        "Developed and optimized UAV resource allocation models for efficient delivery and logistics.",
        "Explored swarm algorithms and energy-efficient strategies for UAV operations.",
        "Managed PR activities, fostering collaboration and outreach within the institute.",
      ],
    },
    {
      schoolName: "Radiant Central Children Academy",
      logo: School,
      subHeader: "Senior Secondary (Class 12)",
      duration: "📅 2018 – 2020",
      desc: "Completed schooling with a strong academic and extracurricular record. Served as the Discipline Head, ensuring a structured and organized environment. Actively participated in various sports competitions and Olympiads, securing multiple accolades.",
      descBullets: [
        "Led as the Discipline Head, maintaining decorum and leadership at the school level.",
        "Competed in national and international Olympiads, achieving notable rankings.",
        "Participated and won multiple sports competitions ",
      ],
    },
  ],
};

const experience = {
  title: "Experience",
  subtitle: "Work, Internship, and Volunteering",
  description: `Worked as a Full Stack Developer in multiple startups, gaining hands-on experience in building scalable web applications. Expertise includes developing robust backend services, optimizing database performance, implementing real-time features using WebSockets, integrating Google Maps API, working with AWS cloud services, UI/UX design, and API integration.
    Beyond tech, I have volunteered with NGOs, actively contributing to cancer awareness and prevention campaigns as well as child education initiatives.`,
  header_image_path: "experience.svg",
};

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Frontend Developer Intern",
      company: "CodeNetra",
      companylogo: CodeNetra,
      date: "Dec-25 – Present",
      desc: "Worked on developing user interfaces and implementing core functionalities using React.js, ensuring a seamless and responsive user experience. Contributed to frontend optimization, backend development, and cloud integration while collaborating with teams to refine UI/UX and enhance application performance.",
      descBullets: [
        "Developed and optimized frontend using React.js with a component-based architecture.",
        "Implemented state management and performance enhancements.",
        "Built backend features and APIs using Django for efficient data handling.",
        "Integrated AWS services like EC2 for hosting and S3 for scalable storage.",
        "Collaborated with teams to refine UI/UX and troubleshoot application issues.",
        "Ensured the development of robust, efficient, and scalable applications.",
      ],
    },
    {
      role: "Web Developer Intern",
      company: "Vivafit",
      companylogo: vivafit,
      date: "June 2024 – July 2024",
      desc: "Developed an Exercise Tracker and a Healthy Eats platform using the MERN stack to enhance user health management. Focused on secure authentication, real-time updates, and an intuitive UI to improve user experience in fitness and nutrition tracking.",
      descBullets: [
        "Built an Exercise Tracker enabling users to log workouts, track durations, and filter exercises by category.",
        "Implemented secure authentication and a personalized profile system.",
        "Integrated real-time data updates for seamless interaction.",
        "Developed a Healthy Eats platform with personalized meal planning and nutrition API integration.",
        "Designed an admin panel for efficient recipe management.",
        "Ensured security, efficiency, and an intuitive UI for both applications.",
      ],
    },
    {
      role: "Full Stack Developer Intern",
      company: "Weboin",
      companylogo: Weboin,
      date: "June 2023 – July 2023",
      desc: "Developed a dynamic E-commerce platform using React and MongoDB, focusing on API-driven product management, real-time updates, and an optimized user experience. Ensured security, scalability, and efficiency in handling user data, product catalogs, and order processing.",
      descBullets: [
        "Built a responsive frontend using React Hooks for seamless user interaction.",
        "Designed a secure backend for managing users, products, and orders.",
        "Implemented JWT authentication to ensure secure user access.",
        "Integrated Google Maps API for optimized delivery logistics and precise location identification.",
        "Optimized database architecture for fast API response times and high-performance scalability.",
      ],
    },
  ],
};

export {
  navBar,
  mainBody,
  about,
  repos,
  leadership,
  getInTouch,
  seoData,
  //
  splashScreen,
  greeting,
  //
  skills,
  skillsCollection,
  //
  socialMediaLinks,
  educationInfo,
  //
  projectsHeader,
  projectsData,
  //
  competitiveSites,
  experience,
  workExperiences,
};
