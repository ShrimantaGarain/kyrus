/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Kyrus",
  title: "Hi all, I'm Shrimanta",
  subTitle: emoji(
    "I am trying to become a successful professional in the field of Information Technology by utilizing my skills and enable further personal and professional development and work towards the prosperity of the organization."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1jlROhbTF4hu4NClgc5gboESJO-5EvBP4/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};
// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ShrimantaGarain",
  linkedin: "https://www.linkedin.com/in/shrimanta-garain-494911219/",
  gmail: "shrimantag26@gmail.com",
  // gitlab: "https://gitlab.com/KyrusGG",
  facebook: "https://www.facebook.com/kyrusg",
  medium: "https://medium.com/@shrimantakyrus1999",
  stackoverflow: "https://stackoverflow.com/users/16821360/shrimanta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "A BTech(CSE) Student WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Can make web and android mobile applications"),
    emoji("⚡ Automate some tasks through Bots and APIs"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],
  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },

    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },

    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },

    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },

    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Army Public School",
      logo: require("./assets/images/aps.png"),
      subHeader: "10+2",
      duration: "September 2015 - April 2017",
      desc: "Studied PCM.",
      descBullets: ["10th : General", "12th : Science"]
    },
    {
      schoolName: "Brainware University",
      logo: require("./assets/images/brain.png"),
      subHeader: "Bachelor of Technology (CSE)",
      duration: "September 2017 - Present",
      desc: " Took courses about Software Engineering, Web Security, Operating Systems, IOT ...",
      descBullets: ["Bachelor of Technology in Computer Science"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "MARC II ",
  projects: [
    {
      image: require("./assets/images/1.webp"),
      projectName: "Manual Auto Rover Contro v2",
      projectDesc: "I have worked on autonomous car prototype. It has many features, which includes guided control, RTL(Return To Launch), Self-Steering or lane control,... etc It has a Failsafe mode also which prevent the rover to loose its control and avoids obstacles. ",
      footerLink: [
        {
          name: "Details",
          url: "https://docs.google.com/document/d/1cRQJ5oNPUMvebC6P3TDt4io9gPcyKayc2WJEp5v9Kt4/edit?usp=sharing"
        }
        //  you can add extra buttons here.
        //  you can add extra buttons here.
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "SIH (Smart India Hackathon)",
      subtitle:
        "SIH (Smart India Hackathon) 2019 Software Edition 1st Prize winner",
      image: require("./assets/images/sih.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1OGdWAmIuyAGUJScgBxh_01rP3kkcpkN5/view?usp=sharing"
        }
      ]
    },
    {
      title: " Technitiate",
      subtitle:
        " Built a veichle which can be controlled or auto,using python and raspberry pi named it MARC:manual auto rover control.",
      image: require("./assets/images/tech.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1DVVr5vZYrTmuqVaUIS7zjH6rT5rvLo3L/view?usp=sharing"
        }
      ]
    },

    {
      title: "Robogence Robotic compition",
      subtitle:
        "Won first prize in Robogence inter college Robotic Competition",
      image: require("./assets/images/robo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1gotNTjRQtX9Ocys25P0Fv2munm-bO1hm/view?usp=sharing"
        }
      ]
    },
    {
      title: " Texibition ",
      subtitle:
        " Build a CNC printer using raspberry pi and arduino which can draw photos from a camera.",
      image: require("./assets/images/tex.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1udxABqnUIHpEqK5-7A7tvOD_92jeahSu/view?usp=sharing"
        }
      ]
    },
    {
      title: "IoT (Internet Of Things) Workshop",
      subtitle:
        "IoT (Internet Of Things) Workshop, using embedded systems to control different devices over internet",
      image: require("./assets/images/iot.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1otHJHnAyer5ZPTBi2Y52p1BqPNfXsxGh/view?usp=sharing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};
// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write about various technologies and gaming stuffs.",
  displayMediumBlogs: true, // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@shrimantakyrus1999/amd-mobile-gpu-2022-update-radeon-6000s-series-6x50m-parts-and-navi-24-based-6500m-and-6300m-342554923c06",
      title: "AMD Mobile GPU 2022 Update",
      description:
        "Radeon RX 6000S Series: Slimming Down For 1080p Gaming, New 6x50M Parts, and Navi 24-Based 6500M and 6300M"
    },
    {
      url: "https://freegamesupdates.blogspot.com/2021/11/halo-infinite-multiple-free-to-play.html",
      title: "HALO INFINITE MULTIPLAYER ( free to play)",
      description: "HALO INFINITE MULTIPLAYER BETA PLAYERS AVAILABLE NOW"
    },
    {
      url: "https://freegamesupdates.blogspot.com/2021/11/this-new-among-us-stimulated.html",
      title: "THIS NEW AMONG US STIMULATED (free to play)",
      description: "THIS NEW AMONG US STIMULATED BETA PLAYERS AVAILABLE NOW"
    },
    {
      url: "https://medium.com/@shrimantakyrus1999/amd-fidelityfx-super-resolution-white-fbc8fafa5c41",
      title: "AMD FidelityFX Super Resolution",
      description:
        "AMD FidelityFX™ Super Resolution (FSR) is our open source, high-quality solution for producing high resolution frames from lower resolution inputs."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Playlist 🎧"),
  subtitle: "I LOVE TO LISTEN TO MUSIC WHILE CODING 🎧",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://open.spotify.com/embed/playlist/3h9j5wGjKv6EMMeK6pmYpU?utm_source=generator"
  ],

  display: true // Set false to hide this section, defaults to true
};

const discordSection = {
  title: emoji("Discord Status 💬"),
  // Please Provide with Your Podcast embeded Link
  discord: ["https://discord.c99.nl/widget/theme-1/467785927213973534.png"],

  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "",
  email_address: "shrimantag26@gmail.com",
  display: true // Set false to hide this section, defaults to true
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  discordSection,
  contactInfo,
  twitterDetails
};
