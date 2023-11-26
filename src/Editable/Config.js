// Navigation Bar SECTION
export const navBar = {
    show: true,
  };
  
  // Main Body SECTION
  export const mainBody = {
    gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
    firstName: "Maria Victoria",
    middleName: "",
    lastName: "Correas",
    message: "Nothing is impossible, the word itself says ‘ I’m possible.’ ” — Audrey Hepburn",
    icons: [
      {
        image: "fa-github",
        url: "https://github.com/MVCorreas",
      },
      {
        image: "fa-facebook",
        url: "https://www.facebook.com/hashirshoaeb",
      },
      {
        image: "fa-instagram",
        url: "https://www.instagram.com/vicky.correas/",
      },
      {
        image: "fa-linkedin",
        url: "https://www.linkedin.com/in/mar%C3%ADa-victoria-correas-148049b2/",
      },
    ],
  };
  

  export const about = {
    show: true,
    heading: "About Me",
    message:
      "I am a Full-Stack developer with a university degree in English and broad experience in English-Spanish teaching and translation. Intensive training in Back-end, Front-end, and Database, using technologies such as NextJS, React-Redux, VITE, NodeJs and SQL. Vast knowledge of GIT, JAVA, Javascript, among others; and a true passion for CSS Frameworks. Goal-oriented, proactive, fast-learning, perseverant, and well-organized professional with a native-like level of English bestowed by the University of Cambridge. Extremely competent team-member dedicated to any job given to positively impact bottom line results.",
    resume: "https://drive.google.com/file/d/17Zxvcj2FW1N-PLHWZYtmBXdMWnEX6c45/view?usp=sharing",
  };
  
  // PROJECTS SECTION
  // Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
  //      i.e: reposLength: 0,
  // If you want to display specfic projects, add the repository names,
  //      i.e ["repository-1", "repo-2"]
  export const repos = {
    show: true,
    heading: "Recent Projects",
    gitHubUsername: "MVCorreas", 
    reposLength: 1,
    specificRepos: ["Proyecto-Integrador", "ProyectoIntegrador-Countries"],
  };
  
  // Leadership SECTION
  export const leadership = {
    show: false,
    heading: "Leadership",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
    images: [
     
      { 
       
        label: "Second slide label", 
        paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
      },
    ],
    imageSize: {
      width:"615",
      height:"450"
    }
  };
  
  // SKILLS SECTION
  export const skills = {
    show: true,
    heading: "Skills",
    hardSkills: [
      { name: "Javascript", value: 90 },
      { name: "Java", value: 70 },
      { name: "SQL", value: 85 },
      { name: "NextJs", value: 65 },
      { name: "React", value: 90 },
      { name: "NodeJs", value: 85 },
      { name: "HTML", value: 85 },
      { name: "CSS", value: 90 },
    ],
    softSkills: [
      { name: "Goal-Oriented", value: 95 },
      { name: "Accountability", value: 95 },
      { name: "Proactivity", value: 95 },
      { name: "Adaptability", value: 85 },
      { name: "Problem Solving", value: 75 },
      { name: "Empathy", value: 90 },
      { name: "Organization", value: 95 },
      { name: "Creativity", value: 80 },
    ],
  };
  
  // GET IN TOUCH SECTION
 export  const getInTouch = {
    show: true,
    heading: "Get In Touch",
    message:
      "I'm currently looking for job opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
    email: "correasmv@gmail.com",
  };
  
  export const experiences = {
    show: false,
    heading: "Experiences",
    data: [
      {
        role: 'Software Engineer',// Here Add Company Name
       
        date: 'June 2018 – Present',
      },
      {
        role: 'Front-End Developer',
       
        date: 'May 2017 – May 2018',
      },
    ]
  }

  
  //export  { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };