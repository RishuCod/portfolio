import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Portfolio {
  getProfile() {
    return {
      name: 'RISHABH SAGAR',
      location: 'Ghaziabad, India',
      email: 'rishabhsagar123@gmail.com',
      links: {
        linkedin: 'https://www.linkedin.com',
        codechef: 'https://www.codechef.com',
        leetcode: 'https://leetcode.com'
      }
    };
  }

  getEducation() {
    return   {
      institute: 'ABES Institute of Technology, Ghaziabad',
      period: '2021–2025',
      degree: 'B.Tech - Computer Science and Engineering',
      cgpa: '7.51',
      location: 'Ghaziabad, Uttar Pradesh'
    }
    
    
  }
  

  getCoursework(): string[] {
    return [
      'Data Structures',
      'Operating Systems',
      'Computer Architecture',
      'Computer Networks',
      'System Design',
      'Cloud Computing',
      'Software Engineering',
      'Database Management'
    ];
  }

  getExperience() {
    return [
      {
        company: 'Digiglobe Solutions',
        role: 'Front-end Developer Intern',
        period: 'June 2024 – July 2024',
        location: 'Remote',
        points: [
          'Built interactive front-end components using JavaScript and React.',
          'Contributed Community Built Components: navbars, heroes, buttons, footers.'
        ]
      }
    ];
  }

  getProjects(): { title: string; description: string; link?: string }[] {
    return [
      {
        title: 'AI Interviewer',
        description:
          'NextJS, ReactJS, Postgres, Clerk, Google Gemini API • Generates questions, real-time feedback, and report cards; tracks 5–10 past sessions (July 2024)'
      },
      {
        title: 'Cowork',
        description:
          'ReactJS, NodeJS, ExpressJS, Socket.io • Real-time collaborative editor supporting 500–600 concurrent users (March 2024)'
      },
      {
        title: 'Chat Application',
        description:
          'ReactJS, Firebase • One-on-one chat with authentication for 20+ active users (September 2022)'
      }
    ];
  }

  getSkills() {
    return {
      languages: ['C/C++', 'JavaScript', 'Java', 'Python'],
      technologies: [
        'HTML5', 'CSS3', 'ReactJS', 'MongoDB', 'React Native', 'Typescript',
        'ExpressJS', 'NodeJS', 'NextJS', 'MySQL', 'Firebase', 'Socket.io',
        'Django', 'Django REST Framework', 'Pandas', 'Numpy', 'Matplotlib'
      ],
      tools: ['VS Code', 'PyCharm', 'Google Gemini', 'Git']
    };
  }

  getAchievements(): string[] {
    return [
      'Solved 500+ DSA problems across various coding platforms.',
      'Global rank 10/21146 in Starters 192 at Codechef.',
      'Global rank 300/25559 in Starters 195 at Codechef.',
      'Global rank 292/29657 in Starters 196 at Codechef.',
      'Global rank 983/25750 in Order Capital Round 1 on Codeforces.',
      'Global rank 810/31527 in Educational Codeforces Round 181 on Codeforces.',
      'Expert on Codeforces with max rating 1648.',
      'Highest rating 1793 at Codechef.'
    ];
  }
}
