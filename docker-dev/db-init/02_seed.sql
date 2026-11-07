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
INSERT INTO projects (name, icon, short_desc, detailed_desc, images, github_links, sort_order) VALUES
(
  'UoWM Restaurant Menu App',
  '/picons/uowm-app.png',
  'An app developed for the University of Western Macedonia''s students to access the weekly menu in a clean and simple way.',
  'A mobile application built with React Native that provides easier access to the university''s restaurant weekly menu.',
  '["/pimages/uowm-app.jpg"]',
  '[{"label":"View on GitHub","url":"https://github.com/michadasis/generic-restaurant-app"}]',
  1
),
(
  'UniOS',
  '/picons/unios.png',
  'A free and open source Linux distribution tailored to the needs of Greek university students.',
  'UniOS is a custom Linux distribution made by a student open source community, together with a set of apps that ship with it: UniBackpack, UniDesk, UniNews and an update notifier. I worked on the ISO build and provisioning scripts, UniDesk, the landing page and the documentation.',
  '["/pimages/unios.jpg"]',
  '[{"label":"View live site","url":"https://unios-project.eu/","icon":"globe"},{"label":"View documentation","url":"https://open-source-uom.github.io/UniOS-docs/","icon":"frontend"},{"label":"View on GitHub","url":"https://github.com/open-source-uom/unios-iso"}]',
  2
),
(
  'UniBackpack',
  '/picons/unibackpack.png',
  'A Qt6 app that installs all the software your university department needs in one go.',
  'A lightweight C++ and Qt6 application that automates the installation of the software and development tools students need for their courses. You pick your university and department, it detects the distribution''s package manager (apt or pacman) and installs the whole toolchain for you. It ships as part of UniOS.',
  '[]',
  '[{"label":"View on GitHub","url":"https://github.com/open-source-uom/UniBackpack"}]',
  3
),
(
  'StaffOS',
  '/picons/staffos.png',
  'A web based staff management platform',
  'StaffOS is a full stack staff management platform built on Next.js 14, Prisma, and MySQL. It handles employee management, task tracking, attendance, leave requests, payroll configuration, direct messaging, performance reporting, and more behind a role based access system.',
  '["/pimages/staffos12.png","/pimages/staffos.png","/pimages/staffos1.png","/pimages/staffos2.png","/pimages/staffos3.png","/pimages/staffos4.png","/pimages/staffos5.png","/pimages/staffos6.png","/pimages/staffos7.png","/pimages/staffos8.png","/pimages/staffos9.png","/pimages/staffos10.png","/pimages/staffos11.png","/pimages/staffos13.png"]',
  '[{"label":"View live site","url":"https://staffos-chi.vercel.app//","icon":"globe"},{"label":"View documentation","url":"https://github.com/michadasis/staffos/blob/main/README.md","icon":"frontend"},{"label":"View on github","url":"https://github.com/michadasis/staffos"}]',
  4
),
(
  'UoWM Auth Discord Bot',
  NULL,
  'A verification bot for the Department of Informatics'' Discord server that gives members their role once they prove they own a @uowm.gr email.',
  'A Discord bot built with Discord.js & MariaDB. Members verify their institutional @uowm.gr mailbox with a one time code entirely inside Discord and automatically get the student, faculty or staff role, without ever being asked for their university password. It also has rate limiting, guest roles for first year students, moderation commands, message statistics with charts and CSV exports, and an admin panel.',
  '[]',
  '[{"label":"View on GitHub","url":"https://github.com/michadasis/UoWM-Auth-Discord-Bot"}]',
  5
),
(
  'Blood Alcohol Level Calculator',
  '/picons/bac.png',
  'A web based blood alcohol level calculator that estimates blood alcohol concentration',
  'A full stack web application built with React and Tailwind CSS that allows users to estimate their Blood Alcohol Concentration (BAC) based on gender, weight, number of drinks, drink volume, alcohol percentage, and hours since last drink. The frontend calculates total grams of alcohol consumed and sends the data to a FastAPI backend, which processes the request using the Widmark formula and returns the estimated BAC along with an interpretation level (Sober, Slight Impairment, Impaired, Legally Intoxicated).',
  '["/pimages/bac-1.png","/pimages/bac-2.png"]',
  '[{"label":"View live site","url":"https://alccalc.vercel.app/","icon":"globe"},{"label":"View frontend on github","url":"https://github.com/BM-utils/BAC-Counter-Frontend","icon":"frontend"},{"label":"View backend on github","url":"https://github.com/BM-utils/BAC-counter-backend","icon":"backend"}]',
  6
);
