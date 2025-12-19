export interface Essay {
  id: string;
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: number;
}

export const essays: Essay[] = [
  {
    id: '1',
    slug: 'software-engineering-journey',
    title: 'Software Engineering Journey',
    description: 'Software engineering is such a dynamic intersection of problem-solving, creativity, and technological innovation...',
    date: 'January 24, 2024',
    readTime: 8,
  },
  {
    id: '2',
    slug: 'reflect-on-typescript',
    title: 'Reflection on Typescript',
    description: 'Migration to TypeScript has been quite an enlightenment after my experiences with JavaScript...',
    date: 'January 26, 2024',
    readTime: 6,
  },
  {
    id: '3',
    slug: 'smart-questions',
    title: 'The Art of Smart Questions',
    description: 'In the world of software development, the ability to communicate effectively and ask questions intelligently can make the difference...',
    date: 'January 31, 2024',
    readTime: 7,
  },
  {
    id: '4',
    slug: 'coding-standards',
    title: 'Coding Standards and Development Best Practices',
    description: 'Coding standards are much more than a set of guidelines for code formatting; they are the building blocks of clean, maintainable software...',
    date: 'February 1, 2024',
    readTime: 10,
  },
  {
    id: '5',
    slug: 'ui-frameworks',
    title: 'The Evolution of Web Development',
    description: 'In the early days of web development, creating a professional-looking website meant writing countless lines of HTML and CSS...',
    date: 'October 9, 2025',
    readTime: 8,
  },
  {
    id: '6',
    slug: 'effort-estimation-reflection',
    title: 'Reflection on Effort Estimation',
    description: 'Estimating development effort is a critical part of software engineering, yet it is often challenging due to uncertainty...',
    date: 'December 2025',
    readTime: 7,
  },
  {
    id: '7',
    slug: 'ai-reflection-ics314',
    title: 'Reflecting on My Use of AI in ICS 314',
    description: 'A reflection on how AI tools were used throughout ICS 314 and their impact on learning, problem-solving, and software engineering...',
    date: 'December 2025',
    readTime: 6,
  },
  {
    id: '8',
    slug: 'reflect-on-software-engineering',
    title: 'Reflecting on Software Engineering',
    description: 'A reflection on configuration management, coding standards, and UI frameworks and how these software engineering foundations...',
    date: 'December 2025',
    readTime: 9,
  },
];
