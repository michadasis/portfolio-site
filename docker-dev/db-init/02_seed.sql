-- SKILLS
INSERT INTO skills (category, item, sort_order) VALUES
('languages', 'TypeScript', 1), ('languages', 'JavaScript', 2), ('languages', 'Python', 3),
('languages', 'Java', 4), ('languages', 'C', 5), ('languages', 'C++', 6), ('languages', 'Bash', 7),
('frontend', 'React', 1), ('frontend', 'Next.js', 2), ('frontend', 'React Native', 3),
('frontend', 'Expo', 4), ('frontend', 'Tailwind CSS', 5), ('frontend', 'Framer Motion', 6),
('backend', 'Node.js', 1), ('backend', 'Express.js', 2), ('backend', 'FastAPI', 3),
('backend', 'Prisma ORM', 4), ('backend', 'MySQL', 5), ('backend', 'MongoDB', 6), ('backend', 'JWT / RBAC', 7),
('tools', 'Git', 1), ('tools', 'GitHub', 2), ('tools', 'GitLab', 3), ('tools', 'Electron', 4),
('tools', 'Qt6', 5), ('tools', 'Vercel', 6), ('tools', 'Linux', 7), ('tools', 'Raspberry Pi', 8);

-- PROJECTS
INSERT INTO projects (name, short_desc, detailed_desc, images, github_links, sort_order) VALUES
(
  'UoWM Restaurant Menu App',
  'An app developed for the University of Western Macedonia''s students to access the weekly menu in a clean and simple way.',
  'A mobile application built with React Native that provides easier access to the university''s restaurant weekly menu.',
  '["/pimages/uowm-app.jpg"]',
  '[{"label":"View on GitHub","url":"https://github.com/michadasis/generic-restaurant-app"}]',
  1
),
(
  'Multimusic Launcher',
  'Multimusic Launcher is a powerful tool designed to simplify the process of launching music applications from a single interface.',
  'A desktop application that unifies multiple music streaming services into one launcher. Built with Electron, it allows users to quickly switch between Spotify, Apple Music, YouTube Music without taking up excessive space in their taskbar.',
  '["/pimages/multimusic.png"]',
  '[{"label":"View on GitHub","url":"https://github.com/michadasis/multimusiclauncher"}]',
  2
),
(
  'StaffOS',
  'A web based staff management platform',
  'StaffOS is a full stack staff management platform built on Next.js 14, Prisma, and MySQL. It handles employee management, task tracking, attendance, leave requests, payroll configuration, direct messaging, performance reporting, and more behind a role based access system.',
  '["/pimages/staffos12.png","/pimages/staffos.png","/pimages/staffos1.png","/pimages/staffos2.png","/pimages/staffos3.png","/pimages/staffos4.png","/pimages/staffos5.png","/pimages/staffos6.png","/pimages/staffos7.png","/pimages/staffos8.png","/pimages/staffos9.png","/pimages/staffos10.png","/pimages/staffos11.png","/pimages/staffos13.png"]',
  '[{"label":"View live site","url":"https://staffos-chi.vercel.app//","icon":"globe"},{"label":"View documentation","url":"https://github.com/michadasis/staffos/blob/main/README.md","icon":"frontend"},{"label":"View on github","url":"https://github.com/michadasis/staffos"}]',
  3
),
(
  'Blood Alcohol Level Calculator',
  'A web based blood alcohol level calculator that estimates blood alcohol concentration',
  'A full stack web application built with React and Tailwind CSS that allows users to estimate their Blood Alcohol Concentration (BAC) based on gender, weight, number of drinks, drink volume, alcohol percentage, and hours since last drink. The frontend calculates total grams of alcohol consumed and sends the data to a FastAPI backend, which processes the request using the Widmark formula and returns the estimated BAC along with an interpretation level (Sober, Slight Impairment, Impaired, Legally Intoxicated).',
  '["/pimages/bac-1.png","/pimages/bac-2.png"]',
  '[{"label":"View live site","url":"https://alccalc.vercel.app/","icon":"globe"},{"label":"View frontend on github","url":"https://github.com/BM-utils/BAC-Counter-Frontend","icon":"frontend"},{"label":"View backend on github","url":"https://github.com/BM-utils/BAC-counter-backend","icon":"backend"}]',
  4
),
(
  'Kewl Bot',
  'A feature rich Discord bot with server moderation utilities, designed to help everyday discord server management',
  'A Discord bot built with Discord.js & MongoDB featuring automated moderation tools, role management, welcome messages, and server analytics. Includes advanced features like anti spam protection, temporary mutes/bans, and logging system, while having some fun related commands.',
  '["/pimages/kewlbot-1.png","/pimages/kewlbot-2.png","/pimages/kewlbot-3.png"]',
  '[{"label":"View on GitHub","url":"https://github.com/michadasis/kewlbot"}]',
  5
);
