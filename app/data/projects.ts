export interface Project {
  name: string;
  desc: string;
  detailedDesc: string;
  images: string[];
  github: string;
}

export const projects: Project[] = [
  {
    name: "UoWM Restaurant Menu App",
    desc: "An app developed for the University of Western Macedonia's students to access the weekly menu in a clean and simple way.",
    detailedDesc: "A comprehensive mobile application built with React Native that provides easier access to the university cafeteria's weekly menu.",
    images: [
      "/pimages/uowm-app.jpg"
    ],
    github: "https://github.com/michadasis/generic-restaurant-app",
  },
  {
    name: "Multimusic Launcher",
    desc: "Multimusic Launcher is a powerful tool designed to simplify the process of launching music applications from a single interface.",
    detailedDesc: "A desktop application that unifies multiple music streaming services into one launcher. Built with Electron, it allows users to quickly switch between Spotify, Apple Music, YouTube Music without cluttering their taskbar.",
    images: [
      "/pimages/multimusic.png"
    ],
    github: "https://github.com/michadasis/multimusiclauncher",
  },
  {
    name: "Kewl Bot",
    desc: "A feature rich Discord bot with server moderation utilities, designed to help everyday discord server management while having fun commands.",
    detailedDesc: "A comprehensive Discord bot built with Discord.js featuring automated moderation tools, role management, welcome messages, and server analytics. Includes advanced features like anti-spam protection, temporary mutes/bans, and logging system, while having some fun related commands.",
    images: [
      "/pimages/kewlbot-1.png",
      "/pimages/kewlbot-2.png",
      "/pimages/kewlbot-3.png",
    ],
    github: "https://github.com/michadasis/kewlbot",
  },
];