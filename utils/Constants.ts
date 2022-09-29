import { MdEmail } from 'react-icons/md';
import {
  GrLinkedinOption,
  GrGithub,
  GrTwitter,
  GrFacebookOption
} from 'react-icons/gr';

export const social = [
  {
    title: 'Email',
    icon: MdEmail,
    link: 'mailto:kbpatel5802@gmail.com'
  },
  {
    title: 'LinkedIn',
    icon: GrLinkedinOption,
    link: 'https://www.linkedin.com/in/kruna1pate1'
  },
  {
    title: 'Github',
    icon: GrGithub,
    link: 'https://github.com/Kruna1Pate1'
  },
  {
    title: 'Twitter',
    icon: GrTwitter,
    link: 'https://twitter.com/Kruna1Pate1'
  },
  {
    title: 'Facebook',
    icon: GrFacebookOption,
    link: 'https://www.facebook.com/Kruna1Pate1'
  }
];

export const about = {
  name: 'Krunal Patel',
  taglines: [
    'I am <span class="text-[#a114ff]">Software Engineer</span>',
    'I am <span class="text-[#a114ff]">Android Developer</span>',
    'I am <span class="text-[#a114ff]">Backend Developer</span>',
    'Love to work in <span class="text-[#a114ff]">Java</span>',
    'Love to work in <span class="text-[#a114ff]">Kotlin</span>'
  ],
  descriptionSort:
    'I am passionate developer. Love to learn new technologies and take problems as challenges.',
  description: `
    Hi, I am Krunal Patel.
    Currently pursuing B.E. in Computer Engineering from Vishwakarma Government Engineering College, Ahmedabad.
    I am Software Engineering who is curious to know about Android development and Backend development.
    Also having good knowledge about Information security and Penetration testing of Website / Android Application. 
  `
};

export const languages = [
  {
    name: 'java',
    image: '/images/skill/java.png',
    url: ''
  },
  {
    name: 'kotlin',
    image: '/images/skill/kotlin.png',
    url: ''
  },
  {
    name: 'javascript',
    image: '/images/skill/javascript.png',
    url: ''
  },
  {
    name: 'typescript',
    image: '/images/skill/typescript.png',
    url: ''
  },
  {
    name: 'python',
    image: '/images/skill/python.png',
    url: ''
  },
  // {
  //   name: 'c',
  //   image: '/images/skill/c.png',
  //   url: ''
  // },
  {
    name: 'cplusplus',
    image: '/images/skill/cplusplus.png',
    url: ''
  },
  {
    name: 'bash',
    image: '/images/skill/bash.png',
    url: ''
  },
  {
    name: 'html5',
    image: '/images/skill/html5.png',
    url: ''
  },
  {
    name: 'css3',
    image: '/images/skill/css3.png',
    url: ''
  }
];

export const frameworks = [
  {
    name: 'android',
    image: '/images/skill/android.png',
    url: ''
  },
  {
    name: 'spring',
    image: '/images/skill/spring.png',
    url: ''
  },
  {
    name: 'mysql',
    image: '/images/skill/mysql.png',
    url: ''
  },
  {
    name: 'postgresql',
    image: '/images/skill/postgresql.png',
    url: ''
  },
  {
    name: 'reactjs',
    image: '/images/skill/reactjs.png',
    url: ''
  },
  {
    name: 'nextjs',
    image: '/images/skill/nextjs.png',
    url: ''
  },
  {
    name: 'git',
    image: '/images/skill/git.png',
    url: ''
  },
  // {
  //   name: 'oracle',
  //   image:
  //     '/images/skill/oracle.png',
  //   url: ''
  // },
  {
    name: 'sqlite',
    image: '/images/skill/sqlite.png',
    url: ''
  },
  {
    name: 'linux',
    image: '/images/skill/linux.png',
    url: ''
  },
  {
    name: 'redis',
    image: '/images/skill/redis.png',
    url: ''
  }
];

export const tools = [
  {
    name: 'androidstudio',
    image: '/images/skill/androidstudio.png',
    url: ''
  },
  {
    name: 'intellij',
    image: '/images/skill/intellij.png',
    url: ''
  },
  {
    name: 'vscode',
    image: '/images/skill/vscode.png',
    url: ''
  },
  {
    name: 'github',
    image: '/images/skill/github.png',
    url: ''
  },
  {
    name: 'figma',
    image: '/images/skill/figma.png',
    url: ''
  },
  {
    name: 'photoshop',
    image: '/images/skill/photoshop.png',
    url: ''
  }
];

export const projects = [
  {
    id: 0,
    title: 'Pictionary Game',
    description:
      'Multiplayer online game where people can have fun. Room of players where one player can draw and the remaining players guess the word. The correct answer gets reward points based on the time remaining.',
    image: '/images/project/pictionarygame.png',
    techstack: [
      'Android',
      'Kotlin',
      'Spring-Boot',
      'Java',
      'RSocket',
      'Jetpack-Compose',
      'MVVM-Clean-Architecture'
    ],
    source: [
      {
        name: 'github',
        icon: GrGithub,
        link: 'https://github.com/Kruna1Pate1/Pictionary-Game'
      }
    ]
  },
  {
    id: 1,
    title: 'Book-E-Sale',
    description:
      'Developed Book-E-Sale an e-commerce website for buying and selling books. It provides features such as Search and Filter books, Login, Registration and Cart module, Different Roles.',
    image: '/images/project/bookesale.png',
    techstack: [
      'Spring-Boot',
      'Spring-Security',
      'Java',
      'PostgreSQL',
      'ReactJS',
      'TypeScript',
      'React-Router',
      'Styled-Components',
      'Formik & Yup',
      'Toastify'
    ],
    source: [
      {
        name: 'github',
        icon: GrGithub,
        link: 'https://github.com/Kruna1Pate1/Book-E-Sale'
      }
    ]
  },
  {
    id: 2,
    title: 'AndroXploit',
    description:
      'Penetration testing application to identify devices connected to the network and service running on it. Provided features are Identify connected devices and services, Common vulnerabilities, Various scans, and Takeover or Takedown nodes.',
    image: '/images/project/Androxploit.png',
    techstack: [
      'Android',
      'Kotlin',
      'Nmap',
      'Metasploit-Framework',
      'RouterSploit',
      'MVVM-Clean-Architecture'
    ],
    source: [
      {
        name: 'github',
        icon: GrGithub,
        link: 'https://github.com/Kruna1Pate1/AndroXploit'
      }
    ]
  },
  {
    id: 3,
    title: 'Cowin AutoBook',
    description:
      'Android application for automatically booking Covid-19 vaccination slot using Cowin API on availability. Available features AutoFetch OTP, Relogin on token expiration, Slot checking interval 5s, Select beneficiaries list.',
    image: '/images/project/cowinautobook.gif',
    techstack: ['Android', 'Kotlin', 'CoWin-API', 'MVVM-Architecture'],
    source: [
      {
        name: 'github',
        icon: GrGithub,
        link: 'https://github.com/Kruna1Pate1/cowin-autobook'
      }
    ]
  },
  {
    id: 4,
    title: 'WeatherFX',
    description:
      'Desktop application for weather nowcasting of any city using JavaFX. Type name of city and it will make asynchronous request to openweathermap api to fetch data about that city.',
    image: '/images/project/weatherfx.png',
    techstack: [
      'Java',
      'JavaFX',
      'Scene Builder for fxml layout',
      'OpenWeatherMap API'
    ],
    source: [
      {
        name: 'github',
        icon: GrGithub,
        link: 'https://github.com/Kruna1Pate1/WeatherFX'
      }
    ]
  }
];
