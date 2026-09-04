import {
  Radio,
  ListChecks,
  Zap,
  Users,
  MonitorPlay,
  BarChart3,
  ShieldCheck,
  Lock,
  Video,
  MessageSquare,
  CircleCheck,
  Settings2,
  LogIn,
  PlayCircle,
  DoorOpen,
  HelpCircle,
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

export const PRODUCT_TRAINERS: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  { icon: Video, title: 'Live Sessions', description: 'Start and broadcast in one click.' },
  { icon: ListChecks, title: 'Real-Time MCQs', description: 'Push questions to every student live.' },
  { icon: BarChart3, title: 'Live Monitoring', description: 'Watch responses arrive in real time.' },
  { icon: BarChart3, title: 'Class Statistics', description: 'Aggregated results after each session.' },
  { icon: Settings2, title: 'Participation Control', description: 'Manage who speaks, shares, or views.' },
];

export const PRODUCT_STUDENTS: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  { icon: DoorOpen, title: 'Join Sessions', description: 'Enter with a single click.' },
  { icon: Video, title: 'Watch Live', description: 'Clear, focused teaching stream.' },
  { icon: HelpCircle, title: 'Answer MCQs', description: 'Respond the moment questions launch.' },
  { icon: Zap, title: 'Instant Feedback', description: 'Know if you were right immediately.' },
  { icon: ClipboardCheck, title: 'Track Progress', description: 'Your accuracy across every session.' },
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

export const COMPARISON: {
  traditional: string[];
  approach: string[];
} = {
  traditional: [
    'Passive viewing',
    'Delayed assessment',
    'Limited interaction',
    'Separate learning and assessment',
  ],
  approach: [
    'Live participation',
    'Real-time MCQs',
    'Instant feedback',
    'Integrated learning and assessment',
  ],
};

export const TECHNOLOGY_STACK: {
  icon: LucideIcon;
  category: string;
  placeholder: string;
}[] = [
  { icon: MonitorPlay, category: 'Frontend', placeholder: 'To be announced' },
  { icon: Settings2, category: 'Backend', placeholder: 'To be announced' },
  { icon: BarChart3, category: 'Database', placeholder: 'To be announced' },
  { icon: Radio, category: 'Real-Time', placeholder: 'To be announced' },
  { icon: Lock, category: 'Authentication', placeholder: 'To be announced' },
  { icon: CircleCheck, category: 'Cloud / Deploy', placeholder: 'To be announced' },
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
    photo: 'AsmitaImage.jpeg',
    name: '[Asmita Paygude]',
    role: 'CEO',
    year: 'Final Year · Computer Engineering',
    bio: 'Placeholder — replace with founder background.',
    skills: ['Leadership', 'Strategy', 'Product'],
    linkedin: '#',
    github: null,
  },
  {
    photo: '20260328_164856 - Sakshi Madane',
    name: '[Sakshi Madane]',
    role: 'CTO',
    year: 'Final Year · Computer Engineering',
    bio: 'Strong interest in Full Stack Python Development and AI/ML',
    skills: ['Python','Django', 'REST Framework', 'React', 'JavaScript', 'MySQL'],
    linkedin: '#',
    github: '#',
  },
  {
    photo: 'https://images.pexels.com/photos/7717254/pexels-photo-7717254.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
    name: '[Riya Tilkari]',
    role: 'CMO',
    year: 'Final Year · Computer Engineering',
    bio: 'Placeholder — replace with marketing experience.',
    skills: ['Marketing', 'Branding', 'Content'],
    linkedin: '#',
    github: null,
  },
  {
    photo: 'file_0000000018947206b5bb981076adcbc5 - vaishnavi dhole',
    name: '[Vaishnavi Dhole]',
    role: 'COO',
    year: 'Final Year · Computer Engineering',
    bio: 'Passionate about software development and learning new technologies.',
    skills: ['Java', 'Python', 'SQL', 'Spring Boot', 'React', 'Planning'],
    linkedin: '#',
    github: null,
  },
  {
    photo: 'IMG_20260904_185137 - Pragati Rajput',
    name: '[Pragati Rajput]',
    year: 'Final Year · Computer Engineering',
    bio: 'Placeholder — replace with technical skills.',
    skills: ['Java', 'Frontend Development', 'AI/ML', 'SQL & Databases'],
    linkedin: '#',
    github: '#',
  },
  {
    photo: 'IMG_20260819_230753 - Shreya Nikkam',
    name: '[Shreya Nikkam]',
    year: 'Final Year · Computer Engineering',
    bio: 'Placeholder — replace with design experience.',
    skills: ['Python', 'SQL', 'Excel', 'Power BI', 'Tableau'],
    linkedin: '#',
    github: null,
  },
  {
    photo: 'IMG-20260904-WA0083 - Patel Chetna',
    name: '[Chetna Patel]',
    year: 'Final Year · Computer Engineering',
    bio: 'Placeholder — replace with research focus.',
    skills: ['Data Science','Data Analysis'],
    linkedin: '#',
    github: null,
  },

  {
    photo: 'Gemini_Generated_Image_f1y49zf1y49zf1y4 - Gitanjali Narute',
    name: '[Gitanjali Narute]',
    year: 'Final Year · Computer Engineering',
    bio: 'Placeholder — replace with research focus.',
    skills: ['Java' , 'OOP','Basic Python'],
    linkedin: '#',
    github: null,
  },
  {
    photo: '35714c03-e529-4fed-8e36-c9305f333971 - Poonam Yadav',
    name: '[Poonam Yadav]',
    year: 'Final Year · Computer Engineering',
    bio: 'Placeholder — replace with research focus.',
    skills: ['Python', 'SQL'],
    linkedin: '#',
    github: null,
  },
  {
    photo: 'SAVE_20241225_171758 - Payal Sawant',
    name: '[Payal Sawant]',
    year: 'Final Year · Computer Engineering',
    bio: 'Full-stack development',
    skills: ['Java', 'HTML', 'CSS', 'JavaScript', 'SQL'],
    linkedin: '#',
    github: null,
  },
  {
    photo: 'SAVE_20241225_171758 - Payal Sawant',
    name: '[Dnyaneshwari Sayam]',
    year: 'Final Year · Computer Engineering',
    bio: 'App developer',
    skills: ['App development'],
    linkedin: '#',
    github: null,
  },
];


export const MENTOR = {
  photo: 'https://images.pexels.com/photos/35490806/pexels-photo-35490806.jpeg?auto=compress&cs=tinysrgb&h=500&w=500',
  name: '[Mentor Name]',
  designation: '[Designation / Title]',
  department: 'Department of Computer Engineering',
  description:
    'Placeholder — replace with the mentor\'s guidance, academic background, and role in supporting the project.',
};

export const COMPANY = {
  name: 'LiveLearn',
  tagline: 'Learning that happens in real time.',
  email: 'contact@livelearn.example',
  college: '[College / Institution Name]',
  linkedin: '#',
  github: '#',
};
