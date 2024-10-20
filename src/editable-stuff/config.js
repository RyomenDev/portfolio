import emoji from "react-easy-emoji";
import { Icon } from "@iconify/react";

// Import images directly
import profileImage from "../assets/img/AkashMishra.jpg";
import vivafit from "../assets/img/vivafit.png";
import Weboin from "../assets/img/Weboin.png";

import linkedinIcon from "../assets/svg/linkedin-brands-solid.svg";
import githubIcon from "../assets/svg/github-brands-solid.svg";

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
  imageSize: 300,
  message: `
    My name is Akash Mishra, a final-year Computer Science and Engineering student at IIIT Ranchi. 
    I'm passionate about web development and building efficient, scalable solutions using technologies like the MERN stack. 
    I thrive on working on personal projects that challenge my abilities and enable me to create impactful, user-focused applications.
  `,
  resume:
    "https://drive.google.com/file/d/1AHETMA0ahfXOgUPo9eg3tmijqe6GIu7f/view?usp=drivesdk", // Link to resume
};

// Projects Section Configuration
const repos = {
  show: true,
  heading: "Projects",
  gitHubUsername: "RyomenDev",
  reposLength: 0, // Set to 0 to stop fetching recent projects
  specificRepos: ["CodeQuest", "FashionFleet", "UrbanGems", "aether-ai"], // List your specific repositories here
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

// Skills Section Configuration
const skills = {
  title: "What I do",
  subTitle:
    "FULL STACK DEVELOPER WHO WANTS TO EXPLORE and utilize cutting-edge technologies to create innovative, user-centric applications.",
  data: [
    {
      title: "Full Stack Development",
      skills: [
        emoji(
          "⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"
        ),
        emoji("⚡ Building responsive static websites using Next.js"),
        emoji("⚡ Building RESTful APIs in Django & Django REST Framework"),
      ],
      softwareSkills: [
        { skillName: "Node", iconifyTag: "vscode-icons:file-type-node" },
        { skillName: "Reactjs", iconifyTag: "vscode-icons:file-type-reactjs" },
        { skillName: "JavaScript", iconifyTag: "logos:javascript" },
        { skillName: "Cpp", iconifyTag: "vscode-icons:file-type-cpp" },
        { skillName: "C", iconifyTag: "vscode-icons:file-type-c" },
        { skillName: "AWS", iconifyTag: "logos:aws" },
        { skillName: "Heroku", iconifyTag: "logos:heroku-icon" },
        { skillName: "Vercel", iconifyTag: "logos:vercel-icon" },
        { skillName: "Vite", iconifyTag: "logos:vitejs" },
        {
          skillName: "Markdown",
          iconifyTag: "vscode-icons:file-type-markdown",
        },
        { skillName: "CSS", iconifyTag: "vscode-icons:file-type-css" },
        { skillName: "JSON", iconifyTag: "vscode-icons:file-type-json" },
        { skillName: "Github", iconifyTag: "akar-icons:github-fill" },
        { skillName: "Python", iconifyTag: "logos:python" },
        { skillName: "MongoDB", iconifyTag: "logos:mongodb" },
        { skillName: "Postman", iconifyTag: "logos:postman-icon" },
        { skillName: "MySQL Workbench", iconifyTag: "logos:mysql" },
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
      role: "Web Development Intern", // Role title
      companyLogo: vivafit,
      completionLetter:
        "https://drive.google.com/file/d/1vsXcwlx-J5thWsvQycWRDgeNuaeEvzR4/view",
      date: "June 2024 – July 2024", // Duration
      description:
        "Developed an exercise tracker web app and a meal planning platform with integrated nutrition APIs.",
    },
    {
      role: "Full Stack Developer", // Role title
      companyLogo: Weboin,
      completionLetter:
        "https://drive.google.com/file/d/17cYPi3Bm7sLyyfzAbMrbBjFUdl9n3dL1/view",
      date: "June 2023 – July 2023", // Duration
      description:
        "Created a dynamic e-commerce website, implementing Google Maps API for delivery optimization.",
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
};
