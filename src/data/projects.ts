export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  image: string;
  technologies: string[];
  overview: string;
  myRole: string[];
  challenges: string;
  keyFeatures: string[];
  learned: string[];
  githubLink: string;
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'java-encryption-decryption',
    title: 'Java Encryption & Decryption',
    description: 'A simple message decoder. Shifts letters back and forth.',
    shortDescription: 'A simple message decoder that shifts letters back and forth.',
    image: '/images/project1.jpg',
    technologies: ['Java', 'VI', 'Git'],
    overview: 'The encryptor and decrypter program is for simple messages. Anyone can easily disguise a message and send it to a person with the existing code. So long as the person receiving the message knows the phase direction, the message can be decrypted using the same program. This project was developed as part of my ICS coursework at UH Manoa.',
    myRole: [
      'Designing the encrypter and decrypter',
      'Implementing the user message phase',
      'Creating the basic UI',
      'Testing and debugging the program'
    ],
    challenges: 'One of the main challenges was to get the program done as soon as possible. I was helping my friend decode messages in his ICS class. I offered immediate assistance and was able to create a running program within a few minutes.',
    keyFeatures: [
      'Decrypt simple encrypted messages',
      'Encrypt simple decrypted messages'
    ],
    learned: [
      'Design and time management',
      'User interface development',
      'Project planning and documentation'
    ],
    githubLink: 'https://github.com/ndv0gel/Java-source-code.git'
  },
  {
    id: '2',
    slug: 'windchill-calculator',
    title: 'Windchill Calculator',
    description: 'A simple windchill forecast calculator. Takes in wind speed and temperature.',
    shortDescription: 'Wind chill calculation tool with interactive input.',
    image: '/images/project2.jpg',
    technologies: ['JavaScript', 'HTML/CSS', 'Git'],
    overview: 'A web-based windchill calculator that computes the apparent temperature based on wind speed and actual temperature values.',
    myRole: [
      'Designing the user interface',
      'Implementing calculation logic',
      'Creating responsive design'
    ],
    challenges: 'Building an intuitive interface that clearly displays the windchill calculations with proper validation.',
    keyFeatures: [
      'Real-time windchill calculations',
      'Input validation',
      'Clear result display'
    ],
    learned: [
      'JavaScript mathematical operations',
      'Form handling and validation',
      'User input management'
    ],
    githubLink: 'https://github.com/ndv0gel'
  },
  {
    id: '3',
    slug: 'record-editor',
    title: 'Record Editor',
    description: 'A program that can add, delete, and find records. Written in the C Language.',
    shortDescription: 'Terminal-based record management system in C.',
    image: '/images/project3.jpg',
    technologies: ['C', 'Terminal', 'VI'],
    overview: 'A command-line application written in C that allows users to manage records with add, delete, and search functionality.',
    myRole: [
      'Designing the record structure',
      'Implementing CRUD operations',
      'Building command-line interface',
      'Memory management'
    ],
    challenges: 'Managing memory properly and creating an efficient data structure for fast record lookups and manipulations.',
    keyFeatures: [
      'Add new records',
      'Delete existing records',
      'Search and find records',
      'Data persistence'
    ],
    learned: [
      'C programming fundamentals',
      'Memory management in C',
      'Data structure design',
      'File I/O operations'
    ],
    githubLink: 'https://github.com/ndv0gel'
  }
];
