import emoji from "react-easy-emoji";
import { Icon } from "@iconify/react";
import splashAnimation from "../assets/lottie/splashAnimation"; 

// Import images directly
import profileImage from "../assets/img/AkashMishra.jpg";
import vivafit from "../assets/img/vivafit.png";
import Weboin from "../assets/img/Weboin.png";
import CodeNetra from "../assets/img/codeNetra.png";

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

// Navigation Bar Configuration
const navBar = {
  show: true, // Toggle visibility of the navigation bar
};

// Main Body Configuration
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Akash",
  middleName: "",
  lastName: "Mishra",
  message: "Passionate about changing the world with technology.",
  icons: [
    { image: githubIcon, url: "https://github.com/RyomenDev" },
    {
      image: linkedinIcon,
      url: "https://www.linkedin.com/in/akash-mishra-123456789",
    },
  ],
};

// About Section Configuration
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

// Leadership Section Configuration
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

// Skills Section
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

// Get In Touch Section Configuration
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message: `
    I'm currently seeking full-time opportunities in Software Development.  
    If you know of any available positions, have questions, or just want to connect, please feel free to email me at:
  `,
  email: "ai.akash.mishra@gmail.com", // Contact email
};

// Experiences Section Configuration
const experiences = {
  show: true, // Show the experiences section
  heading: "Experiences",
  data: [
    {
      role: "Frontend Developer", // Role title
      companyLogo: CodeNetra,
      completionLetter: "#",
      date: "Dec-25 – Present", // Duration
      description:
        "I worked on developing user interfaces and implementing core functionalities for company projects using React.js, ensuring a seamless and responsive user experience. I contributed to frontend optimization, state management, and component-based architecture to enhance performance. Additionally, I worked on backend development using Django, implementing key features and APIs for efficient data handling. I also integrated AWS services like EC2 for hosting and S3 for scalable storage solutions. My role involved collaborating with teams to refine UI/UX, troubleshoot issues, and ensure the development of robust, efficient, and scalable applications. ",
    },
    {
      role: "Web Development Intern", // Role title
      companyLogo: vivafit,
      completionLetter:
        "https://drive.google.com/file/d/1vsXcwlx-J5thWsvQycWRDgeNuaeEvzR4/view",
      date: "June 2024 – July 2024", // Duration
      description:
        "During my internship, I developed an Exercise Tracker and Healthy Eats platform using the MERN stack to enhance user health management. The Exercise Tracker enables users to log workouts, track durations, filter exercises by category, and search for specific routines. It features secure authentication, real-time data updates, and a personalized profile system. Healthy Eats focuses on personalized meal planning by integrating nutrition APIs to provide dietary recommendations. I implemented an admin panel for recipe management and designed an intuitive UI for better user experience. Both applications ensure seamless interaction, security, and efficiency in fitness and nutrition tracking. ",
    },
    {
      role: "Full Stack Developer", // Role title
      companyLogo: Weboin,
      completionLetter:
        "https://drive.google.com/file/d/17cYPi3Bm7sLyyfzAbMrbBjFUdl9n3dL1/view",
      date: "June 2023 – July 2023", // Duration
      description:
        "I developed a dynamic E-commerce platform using React and MongoDB, focusing on API-driven product management and an intuitive UI with real-time updates. I built the frontend with React Hooks for a responsive user experience and implemented a secure backend to manage user data, product catalogs, and orders efficiently. Additionally, I integrated JWT authentication for security and utilized the Google Maps API to optimize delivery logistics, enabling precise location identification. By optimizing database architecture and ensuring fast API response times, I contributed to creating a scalable and high-performance platform capable of handling heavy traffic smoothly.",
    },
  ],
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
      profileLink: "#",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "#",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "#",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "#",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "#",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "#",
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
  experiences,
  seoData,
  projectsHeader,
  competitiveSites,
  splashScreen,
  greeting,
};
