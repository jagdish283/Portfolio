import logoTech9 from '@/images/logos/Wipro.png';
import logoGithub from '@/images/logos/Github-Copilot.png';
import logoPowerBI from '@/images/logos/Power-BI.png';
import logoGCP from '@/images/logos/Associate-CloudEngineer.png';
import snowproLogo from '@/images/logos/Snowflake.png';




export const WORK = [
  {
    company: 'Wipro',
    title: 'Project Engineer',
    logo: logoTech9,
    start: 'Aug 2024',
    end: {
      label: 'Present',
      dateTime: new Date().getFullYear(),
    },
  },
 
];

export const CERTIFICATIONS = [
  {
    company: 'Google Cloud Certified Associate Cloud Engineer',
    title: 'Google Cloud ',
    logo: logoGCP,
    start: 'Jan 2025',
    end: 'Jan 2028',
    href: 'https://www.credly.com/badges/a1ad3c04-e62d-47f5-b17e-43c620385b66',
    credential: 'a1ad3c04-e62d-47f5-b17e-43c620385b66',
  },
  {
    company: 'SnowPro Associate - Platform Certification',
    title: 'Snowflake',
    logo: snowproLogo,
    start: 'July 2025',
    end: 'july 2027',
    href: 'https://achieve.snowflake.com/76513139-68c2-4af7-bc92-747779ee28d7#acc.TW86BQkC',
    credential: 'S106272-250731-SOL25',
  },
  {
    company: 'Microsoft Certified: Power BI Data Analyst Associate',
    title: 'Microsoft',
    logo: logoPowerBI,
    start: 'Feb 2025',
    end: 'Dec 2026',
    href: 'https://learn.microsoft.com/en-us/users/jagdishsutar-2127/credentials/a02fe8e4efbb3d28',
    credential: 'a02fe8e4efbb3d28',
  },
  {
    company: 'Github Copilot Certified',
    title: 'Github',
    logo: logoGithub,
    start: 'March 2025',
    end: 'March 2028',
    href: 'https://www.credly.com/badges/01f8e850-82f8-4636-9b1d-150c183b576b',
    credential: '01f8e850-82f8-4636-9b1d-150c183b576b',
  },
  
  
  
];

export const TOOLS_AND_TECH = [
  {
     id: 1,
    title: 'Source Control',
    technologies: [
      {
        id: 1,
        title: 'Git',
        href: 'https://git-scm.com/',
        description:
          'Git is the backbone of my version control workflow. I use it for everything from solo projects to collaborative enterprise-scale applications.',
      },
      {
        id: 2,
        title: 'GitHub',
        href: 'https://github.com/',
        description:
          'I use GitHub for hosting repositories, managing pull requests, and contributing to open-source. It helps me streamline my development pipeline and CI/CD flows.',
      },
    ],
  },
  {
    id: 2,
    title: 'IDEs & Code Editors',
    technologies: [
      {
        id: 1,
        title: 'VS Code',
        href: 'https://code.visualstudio.com/',
        description:
          'Visual Studio Code is my primary editor, with extensions like GitLens, Prettier, and Copilot enhancing my productivity every day.',
      },
    ],
  },
  {
    id: 3,
    title: 'AI Tools',
    technologies: [
      {
        id: 1,
        title: 'GitHub Copilot',
        href: 'https://github.com/features/copilot',
        description:
          'Copilot helps me write and refactor code faster using AI-driven suggestions based on my code context.',
      },
      {
        id: 2,
        title: 'Gemini Code Assist',
        href: 'https://ai.google.dev/gemini',
        description:
          'Gemini helps streamline development by assisting with code generation, bug fixes, and documentation in real-time.',
      },
    ],
  },
  {
    id: 4,
    title: 'Database Technologies',
    technologies: [
      {
        id: 1,
        title: 'Oracle SQL',
        href: 'https://www.oracle.com/database/technologies/appdev/sql.html',
        description:
          'Oracle SQL is a powerful relational database language. I use it for writing efficient queries and managing enterprise-grade databases.',
      },
      {
        id: 2,
        title: 'Snowflake',
        href: 'https://www.snowflake.com/',
        description:
          'Snowflake is a modern cloud data platform. I use it for building scalable data pipelines and performing advanced analytics.',
      },
      {
      id: 3,
      title: 'Informatica IICS',
      href: 'https://www.informatica.com/products/cloud-integration/informatica-intelligent-cloud-services.html',
      description:
        'Informatica IICS is a leading cloud data integration platform. I use it to design ETL pipelines, perform data transformations, and orchestrate data flows across systems.',
    },
    ],
  },
  {
    id: 7,
    title: 'DevTools & Browsers',
    technologies: [
      {
        id: 1,
        title: 'Chrome DevTools',
        href: 'https://developer.chrome.com/docs/devtools/',
        description:
          'I rely on Chrome DevTools for debugging, inspecting elements, analyzing performance, and testing responsiveness.',
      },
    ],
  },
  
];