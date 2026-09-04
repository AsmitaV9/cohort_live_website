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
    photo: 'https://images.pexels.com/photos/5308640/pexels-photo-5308640.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
    name: '[Founder Name]',
    role: 'CEO',
    year: 'Final Year · Computer Engineering',
    bio: 'Placeholder — replace with founder background.',
    skills: ['Leadership', 'Strategy', 'Product'],
    linkedin: '#',
    github: null,
  },
  {
    photo: 'https://images.pexels.com/photos/6942776/pexels-photo-6942776.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
    name: '[Founder Name]',
    role: 'CTO',
    year: 'Final Year · Computer Engineering',
    bio: 'Placeholder — replace with technical background.',
    skills: ['Architecture', 'Backend', 'Real-Time'],
    linkedin: '#',
    github: '#',
  },
  {
    photo: 'https://images.pexels.com/photos/7717254/pexels-photo-7717254.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
    name: '[Founder Name]',
    role: 'CMO',
    year: 'Final Year · Computer Engineering',
    bio: 'Placeholder — replace with marketing experience.',
    skills: ['Marketing', 'Branding', 'Content'],
    linkedin: '#',
    github: null,
  },
  {
    photo: 'https://images.pexels.com/photos/37273005/pexels-photo-37273005.png?auto=compress&cs=tinysrgb&h=400&w=400',
    name: '[Founder Name]',
    role: 'COO',
    year: 'Final Year · Computer Engineering',
    bio: 'Placeholder — replace with operations background.',
    skills: ['Operations', 'Planning'],
    linkedin: '#',
    github: null,
  },
  {
    photo: 'https://images.pexels.com/photos/749091/pexels-photo-749091.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
    name: '[Founder Name]',
    role: 'Developer',
    year: 'Final Year · Computer Engineering',
    bio: 'Placeholder — replace with technical skills.',
    skills: ['Frontend', 'Backend', 'Testing'],
    linkedin: '#',
    github: '#',
  },
  {
    photo: 'https://images.pexels.com/photos/25651531/pexels-photo-25651531.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
    name: '[Founder Name]',
    role: 'UI/UX Lead',
    year: 'Final Year · Computer Engineering',
    bio: 'Placeholder — replace with design experience.',
    skills: ['UI Design', 'UX Research'],
    linkedin: '#',
    github: null,
  },
  {
    photo: 'https://images.pexels.com/photos/8312669/pexels-photo-8312669.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
    name: '[Founder Name]',
    role: 'Research Lead',
    year: 'Final Year · Computer Engineering',
    bio: 'Placeholder — replace with research focus.',
    skills: ['Research', 'Analysis'],
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
