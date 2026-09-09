import {
  Radio,
  ListChecks,
  Zap,
  Users,
  MonitorPlay,
  BarChart3,
  ShieldCheck,
  Lock,
  MessageSquare,
  LogIn,
  PlayCircle,
  DoorOpen,
  ClipboardCheck,
  Trophy,
  type LucideIcon,
} from 'lucide-react';

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Product', href: '#product' },
  { label: 'Features', href: '#features' },
  { label: 'Process', href: '#how-it-works' },
  { label: 'Team', href: '#team' },
  { label: 'Mentor', href: '#mentor' },
  { label: 'Contact', href: '#contact' },
];

export const FEATURE_HIGHLIGHTS: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  { icon: Radio, title: 'Live Learning', description: 'Real-time sessions, not replays.' },
  { icon: ListChecks, title: 'Interactive MCQs', description: 'Questions launched during the lesson.' },
  { icon: Zap, title: 'Instant Feedback', description: 'Results the moment a question closes.' },
  { icon: Users, title: 'Scalable', description: 'From one classroom to an institution.' },
];

export const FEATURES: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  { icon: MonitorPlay, title: 'Live Classroom', description: 'Teaching and participation, together.' },
  { icon: ListChecks, title: 'Real-Time MCQs', description: 'Questions answered live, no delay.' },
  { icon: Zap, title: 'Instant Feedback', description: 'Results delivered in real time.' },
  { icon: BarChart3, title: 'Performance', description: 'Individual and class-wide tracking.' },
  { icon: BarChart3, title: 'Trainer Dashboard', description: 'Manage sessions, questions, participation.' },
  { icon: ShieldCheck, title: 'Permissions', description: 'Control who speaks, shares, or views.' },
  { icon: Users, title: 'Scalable', description: 'One classroom or an entire institution.' },
  { icon: Lock, title: 'Role-Based Access', description: 'Secure, separated student and trainer roles.' },
];

export const HOW_IT_WORKS: {
  icon: LucideIcon;
  step: string;
  title: string;
}[] = [
  { icon: LogIn, step: '01', title: 'Trainer logs in' },
  { icon: PlayCircle, step: '02', title: 'Starts a live session' },
  { icon: DoorOpen, step: '03', title: 'Students join' },
  { icon: ListChecks, step: '04', title: 'Trainer launches an MCQ' },
  { icon: MessageSquare, step: '05', title: 'Students answer' },
  { icon: ClipboardCheck, step: '06', title: 'System evaluates' },
  { icon: Trophy, step: '07', title: 'Results delivered' },
];

export const FOUNDERS: {
  photo: string;
  name: string;
  role: string;
  year: string;
  bio: string;
  skills: string[];
  linkedin: string;
  github: string | null;
}[] = [
  {
    photo: '/AsmitaImage.jpeg',
    name: 'Asmita Paygude',
    role: 'CEO',
    year: 'Final Year · Computer Engineering',
    bio: 'Leading product vision and team coordination.',
    skills: ['Leadership', 'Strategy', 'Product'],
    linkedin: '#',
    github: null,
  },
  {
    photo: '/file_0000000018947206b5bb981076adcbc5 - vaishnavi dhole.png',
    name: 'Vaishnavi Dhole',
    role: 'CTO',
    year: 'Final Year · Computer Engineering',
    bio: 'Passionate about software development and learning new technologies.',
    skills: ['Java', 'Python', 'SQL', 'Spring Boot', 'React', 'Planning'],
    linkedin: '#',
    github: null,
  },
  {
    photo: '/IMG_20260316_171154289_HDR - DHRITI PALANGE.jpg',
    name: 'Dhriti Palange',
    role: 'CMO',
    year: 'Final Year · Computer Engineering',
    bio: 'Data science and advanced analytics.',
    skills: ['Python', 'Advanced Excel'],
    linkedin: '#',
    github: null,
  },
  {
    photo: '/sakshi-madane.jpg',
    name: 'Sakshi Madane',
    role: 'COO',
    year: 'Final Year · Computer Engineering',
    bio: 'Strong interest in Full Stack Python Development and AI/ML.',
    skills: ['Python', 'Django', 'REST Framework', 'React', 'JavaScript', 'MySQL'],
    linkedin: '#',
    github: '#',
  },
  {
    photo: 'file_00000000cc7c7208ba238348e628ca66 - Shruti Dharpale.png',
    name: 'Shruti Dharpale',
    role: 'Developer',
    year: 'Final Year · Computer Engineering',
    bio: 'Full Stack Development',
    skills: ['HTML','CSS','React'],
    linkedin: '#',
    github: null,
  },

  {
    photo: '/IMG_2219 - riya tilkari.jpeg',
    name: 'Riya Tilkari',
    role: 'CHRO',
    year: 'Final Year · Computer Engineering',
    bio: 'Driving marketing strategy and brand presence.',
    skills: ['Marketing', 'Branding', 'Content'],
    linkedin: '#',
    github: null,
  },

  {
    photo: '/IMG_20260904_185137 - Pragati Rajput.jpg',
    name: 'Pragati Rajput',
    role: 'Developer',
    year: 'Final Year · Computer Engineering',
    bio: 'Focused on frontend development and AI/ML integration.',
    skills: ['Java', 'Frontend Development', 'AI/ML', 'SQL & Databases'],
    linkedin: '#',
    github: '#',
  },
  {
    photo: '/IMG_20260819_230753 - Shreya Nikkam.jpg',
    name: 'Shreya Nikkam',
    role: 'Data Analyst',
    year: 'Final Year · Computer Engineering',
    bio: 'Data visualization and analytics specialist.',
    skills: ['Python', 'SQL', 'Excel', 'Power BI', 'Tableau'],
    linkedin: '#',
    github: null,
  },
  {
    photo: '/IMG-20260904-WA0083 - Patel Chetna.jpg',
    name: 'Chetna Patel',
    role: 'Data Analyst',
    year: 'Final Year · Computer Engineering',
    bio: 'Data science and analytics for assessment insights.',
    skills: ['Data Science', 'Data Analysis'],
    linkedin: '#',
    github: null,
  },
  {
    photo: '/Gemini_Generated_Image_f1y49zf1y49zf1y4 - Gitanjali Narute.png',
    name: 'Gitanjali Narute',
    role: 'Developer',
    year: 'Final Year · Computer Engineering',
    bio: 'Java and OOP development specialist.',
    skills: ['Java', 'OOP', 'Basic Python'],
    linkedin: '#',
    github: null,
  },
  {
    photo: '/35714c03-e529-4fed-8e36-c9305f333971 - Poonam Yadav.png',
    name: 'Poonam Yadav',
    role: 'Developer',
    year: 'Final Year · Computer Engineering',
    bio: 'Python and database development.',
    skills: ['Python', 'SQL'],
    linkedin: '#',
    github: null,
  },
  {
    photo: 'ChatGPT Image Sep 8, 2026, 10_55_41 AM - Payal Sawant.png',
    name: 'Payal Sawant',
    role: 'Developer',
    year: 'Final Year · Computer Engineering',
    bio: 'Full-stack development across frontend and backend.',
    skills: ['Java', 'HTML', 'CSS', 'JavaScript', 'SQL'],
    linkedin: '#',
    github: null,
  },
  {
    photo: '/file_000000001d0071fa9a525b6d708237ef - Dnyaneshwari Sayam.png',
    name: 'Dnyaneshwari Sayam',
    role: 'App Developer',
    year: 'Final Year · Computer Engineering',
    bio: 'Mobile application development.',
    skills: ['App Development'],
    linkedin: '#',
    github: null,
  },
  {
    photo: 'IMG-20260521-WA0019 - Madhuri Sargaiyye.jpg',
    name: 'Madhuri Sargaiyye',
    role: 'Python Developer',
    year: 'Final Year · Computer Engineering',
    bio: 'Mobile application development.',
    skills: ['Python','Database'],
    linkedin: '#',
    github: null,
  },
  {
    photo: 'IMG_20260820_114549 - Supriya bhure.jpg',
    name: 'Supriya Bhure',
    role: 'Python Developer',
    year: 'Final Year · Computer Engineering',
    bio: 'Exploring AI, Cloud & DevOps ',
    skills: ['Java','Web Development'],
    linkedin: '#',
    github: null,
  },
  {
    photo: 'IMG_20260819_201303 - shreya khatake.png',
    name: 'Shreya Khatake',
    role: 'Python Developer',
    year: 'Final Year · Computer Engineering',
    bio: 'Web Development',
    skills: ['Java','Web Development'],
    linkedin: '#',
    github: null,
  },

  {
    photo: '/WhatsApp Image 2026-09-06 at 1.39.06 PM.jpeg',
    name: 'Priyanka Gupte',
    role: 'Data Analyst',
    year: 'Final Year · Computer Engineering',
    bio: 'Data science and advanced analytics.',
    skills: ['Python', 'Advanced Excel'],
    linkedin: '#',
    github: null,
  },
  {
    photo: '/WhatsApp Image 2026-09-06 at 1.19.48 PM.jpeg',
    name: 'Pratiksha Das',
    role: 'Data Analyst',
    year: 'Final Year · Computer Engineering',
    bio: 'Data science and advanced analytics.',
    skills: ['Python', 'Advanced Excel'],
    linkedin: '#',
    github: null,
  },
  {
    photo: '1788710839987 - Vaishnavi Bhosale.png',
    name: 'Vaishnavi Bhosale',
    role: 'Data Analyst',
    year: 'Final Year · Computer Engineering',
    bio: 'Python Developer',
    skills: ['Python'],
    linkedin: '#',
    github: null,
  },
];

export const MENTOR = {
  photo: '/WhatsApp Image 2026-09-05 at 9.38.04 PM.jpeg',
  name: 'Prof. Mayur Raut',
  designation: 'Mentor',
  description:
    'Supporting students through career guidance, industry engagement, training, and placement opportunities.',
};

export const COMPANY = {
  name: 'Cohort Live',
  tagline: 'Learning that happens in real time.',
  email: 'contact@cohortlive.example',
  college: 'Sinhgad Institute of Technology, Lonavala',
  linkedin: '#',
  github: '#',
};
