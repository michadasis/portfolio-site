export interface GitHubLink {
  label: string;
  url: string;
  icon?: "github" | "frontend" | "backend" | "globe";
}

export interface Project {
  name: string;
  desc: string;
  detailedDesc: string;
  images: string[];
  github: GitHubLink[];
}

export const projects: Project[] = [
  {
    name: "UoWM Restaurant Menu App",
    desc: "An app developed for the University of Western Macedonia's students to access the weekly menu in a clean and simple way.",
    detailedDesc: "A mobile application built with React Native that provides easier access to the university's restaurant weekly menu.",
    images: [
      "/pimages/uowm-app.jpg"
    ],
      github: [
    { label: "View on GitHub", url: "https://github.com/michadasis/generic-restaurant-app" },
  ],
  },
  {
    name: "Multimusic Launcher",
    desc: "Multimusic Launcher is a powerful tool designed to simplify the process of launching music applications from a single interface.",
    detailedDesc: "A desktop application that unifies multiple music streaming services into one launcher. Built with Electron, it allows users to quickly switch between Spotify, Apple Music, YouTube Music without taking up excessive space in their taskbar.",
    images: [
      "/pimages/multimusic.png"
    ],
    github: [
    { label: "View on GitHub", url: "https://github.com/michadasis/multimusiclauncher" },
  ],
  },
  {
    name: "Kewl Bot",
    desc: "A feature rich Discord bot with server moderation utilities, designed to help everyday discord server management",
    detailedDesc: "A Discord bot built with Discord.js & MongoDB featuring automated moderation tools, role management, welcome messages, and server analytics. Includes advanced features like anti spam protection, temporary mutes/bans, and logging system, while having some fun related commands.",
    images: [
      "/pimages/kewlbot-1.png",
      "/pimages/kewlbot-2.png",
      "/pimages/kewlbot-3.png",
    ],
    github: [
    { label: "View on GitHub", url: "https://github.com/michadasis/kewlbot" },
  ],
  },
  {
    name: "Blood Alcohol Level Calculator",
    desc: "A web based blood alcohol level calculator that estimates blood alcohol concentration",
    detailedDesc: "A full stack web application built with React and Tailwind CSS that allows users to estimate their Blood Alcohol Concentration (BAC) based on gender, weight, number of drinks, drink volume, alcohol percentage, and hours since last drink. The frontend calculates total grams of alcohol consumed and sends the data to a FastAPI backend, which processes the request using the Widmark formula and returns the estimated BAC along with an interpretation level (Sober, Slight Impairment, Impaired, Legally Intoxicated).",
    images: [
    "/pimages/bac-1.png",
    "/pimages/bac-2.png",
  ],
  github: [
    { label: "View live site", url: "https://alccalc.vercel.app/", icon: "globe" },
    { label: "View frontend on github", url: "https://github.com/BM-utils/BAC-Counter-Frontend", icon: "frontend" },
    { label: "View backend on github", url: "https://github.com/BM-utils/BAC-counter-backend", icon: "backend" },
  ],
},
];