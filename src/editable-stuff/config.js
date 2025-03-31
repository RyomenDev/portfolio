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

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000, // Set animation duration as per your animation
};

const greeting = {
  username: "Akash Mishra",
  title: "Hi all, I'm Akash Mishra",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Nodejs  and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true, // Set false to hide this section, defaults to true
};

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

const skills = {
  title: "What I do",
  subTitle:
    "FULL STACK DEVELOPER WHO WANTS TO EXPLORE and utilize cutting-edge technologies to create innovative, user-centric applications.",
  data: [
    {
      title: "Full Stack Development",
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
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

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
  skills,
  leadership,
  getInTouch,
  seoData,
  projectsHeader,
  competitiveSites,
  splashScreen,
  greeting,
  educationInfo,
  experience,
  workExperiences,
};
