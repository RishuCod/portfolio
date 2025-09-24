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


  getProjects(): { title: string; description: string;technology:string; link?: string }[] {
    return [
      {
        title: 'AI Interviewer',
        technology:"NextJS, ReactJS, Postgres, Clerk, Google Gemini API",
        description:
          'Developed an interview preparation tool using the Google Gemini API to generate personalized questions, assess responses, and provide real-time feedback. Implemented performance tracking and session history review, with early feedback indicating a 15–20% improvement in user performance.'
      },
      {
        title: 'Cowork',
        technology:"ReactJS, NodeJS, ExpressJS, Socket.io ",
        description:
          'Built a real-time collaborative editor supporting simultaneous content creation and editing for 500–600 users, with live updates and synchronized changes across all participants.'
      },
      {
        title: 'Chat Application',
        technology:"ReactJS, Firebase",
        description:"Developed a secure one-on-one chat app with real-time messaging and user authentication for 20+ active users, featuring an intuitive interface and organized data flow for easy access to conversation history."
       
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
