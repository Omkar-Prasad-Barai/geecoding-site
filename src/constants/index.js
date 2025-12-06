import {
  FaCode,
  FaUserTie,
  FaProjectDiagram,
  FaRocket,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaYoutube,
  FaInstagram,
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
  FaMobileAlt,
  FaDatabase,
} from "react-icons/fa";

import {
  SiMongodb,
  SiSpringboot,
  SiCplusplus,
  SiTableau,
} from "react-icons/si";

import PowerBIIcon from "../components/ui/PowerBIIcon.jsx";

import mentor1 from "../assets/mentors/mentor-1.jpg";
import mentor2 from "../assets/mentors/mentor-2.jpg";

import startupCompanyLogo from '../assets/company/buildmystore_logo.png';

import promoImg1 from '../assets/images/promo-image-1.jpg'; 
import promoImg2 from '../assets/images/promo-image-2.jpg';

import omkarImg from '../assets/students/omkar.jpg';
//import prabinImg from '../assets/students/prabin.jpg';
//import swagatImg from '../assets/students/swagat.jpg';


export const GEECODING_INSTAGRAM =
  "https://www.instagram.com/geecoding?igsh=NWVqZjFrbngycWww";
export const GEECODING_YOUTUBE =
  "https://youtube.com/@burlesharma2327?si=XvvRIJoaMsWaHXDA";
export const GOOGLE_FORM_LINK = "https://forms.gle/a4jHfLdykcubBcaAA";

export const navLinks = [
  { id: "courses", title: "Courses" },
  { id: "mentors", title: "Mentors" },
  { id: "placements", title: "Placements" },
  { id: "about", title: "About" },
];

export const aboutFeatures = [
  {
    icon: FaCode,
    title: "Master the Fundamentals",
    description:
      "Build a rock-solid foundation in your chosen technology with expert-led guidance.",
  },
  {
    icon: FaProjectDiagram,
    title: "Build Real-World Projects",
    description:
      "Apply your knowledge by creating impressive projects for a standout portfolio.",
  },
  {
    icon: FaUserTie,
    title: "Get 1-to-1 Mentorship",
    description:
      "Receive personalized attention and get every single one of your doubts cleared.",
  },
  {
    icon: FaRocket,
    title: "Become Job-Ready",
    description:
      "Our curriculum is designed to equip you with the exact skills companies are looking for.",
  },
];

// Main Course List
export const courses = [
  {
    id: "mern-full-stack-development",
    title: "MERN Full-Stack Development",
    category: "Web Development",
    type: "OFFLINE BATCH",
    duration: "10 Months",
    level: "Intermediate",
    description:
      "Master the entire MERN stack to build powerful web applications.",
    learningOutcomes: [ 
      "Build dynamic, high-performance applications from scratch.",
      "Master both frontend and backend development principles.",
      "Understand industry-best practices and coding standards.",
      "Prepare a professional portfolio to showcase to recruiters."
    ],
      technologies: [
      { icon: SiMongodb, name: "MongoDB" },
      { icon: FaNodeJs, name: "Express.js" },
      { icon: FaReact, name: "React" },
      { icon: FaNodeJs, name: "Node.js" },
    ],
  },
  {
    id: "data-structures-and-algorithms",
    title: "Data Structures & Algorithms",
    category: "Core Programming",
    type: "ONLINE BATCH",
    duration: "5 Months",
    level: "Intermediate",
    description:
      "Strengthen your problem-solving skills, essential for top tech interviews.",
    technologies: [
      { icon: FaCode, name: "Logic" },
      { icon: FaJava, name: "Java" },
      { icon: SiCplusplus, name: "C++" },
    ],
  },
  {
    id: "data-analytics-foundation",
    title: "Data Analytics Foundation",
    category: "Data Science",
    type: "OFFLINE BATCH",
    duration: "4 Months",
    level: "Beginner",
    description:
      "Learn to analyze data and create dashboards using SQL, Excel, and PowerBI.",
    technologies: [
      { icon: FaDatabase, name: "SQL" },
      { icon: PowerBIIcon, name: "PowerBI" },
      { icon: SiTableau, name: "Tableau" },
    ],
  },
  {
    id: "advanced-ai-and-machine-learning",
    title: "Advanced AI & Machine Learning",
    category: "Data Science",
    type: "ONLINE BATCH",
    duration: "6 Months",
    level: "Advanced",
    description:
      "Dive deep into Machine Learning and Deep Learning with Python.",
    technologies: [
      { icon: FaPython, name: "Python" },
      { icon: FaCode, name: "Algorithms" },
    ],
  },
  {
    id: "react-native-cross-platform-dev",
    title: "React Native Cross-Platform Dev",
    category: "Mobile Development",
    type: "ONLINE BATCH",
    duration: "12 Months",
    level: "Intermediate",
    description: "Build apps for both Android and iOS with a single codebase.",
    technologies: [
      { icon: FaReact, name: "React Native" },
      { icon: FaMobileAlt, name: "Android & iOS" },
    ],
  },
  {
    id: "core-java-with-springboot",
    title: "Core Java with SpringBoot",
    category: "Core Programming",
    type: "OFFLINE BATCH",
    duration: "8 Months",
    level: "Intermediate",
    description:
      "Become a proficient Java developer with industry-standard frameworks.",
    technologies: [
      { icon: FaJava, name: "Java" },
      { icon: SiSpringboot, name: "SpringBoot" },
    ],
  },
  {
    id: "c-programming",
    title: "C Programming",
    category: "Foundation",
    type: "OFFLINE BATCH",
    duration: "2 Months",
    level: "Beginner",
    description: "Start your coding journey with the mother of all languages.",
    learningOutcomes: [
      "Understand core programming fundamentals like variables, loops, and functions.",
      "Learn how to manage memory with pointers.",
      "Build a strong logical foundation for all future programming."
    ],
    technologies: [],
  },
  {
    id: "cpp-programming",
    title: "C++ Programming",
    category: "Foundation",
    type: "ONLINE BATCH",
    duration: "3 Months",
    level: "Beginner",
    description:
      "Learn object-oriented programming and build a strong logical base.",
    technologies: [],
  },
  {
    id: "python-programming",
    title: "Python Programming",
    category: "Foundation",
    type: "ONLINE BATCH",
    duration: "3 Months",
    level: "Beginner",
    description:
      "Master the most versatile language for web, data science, and automation.",
    technologies: [],
  },
];

// Ultra-Detailed Syllabus for each course, keyed by ID
export const courseSyllabus = {
  "mern-full-stack-development": [
    {
      title: "Module 1: Mastering Frontend with React",
      topics: [
        "Understanding the Virtual DOM",
        "Creating Functional Components with JSX",
        "State Management with useState Hook",
        "Handling Side Effects with useEffect Hook",
        "Advanced Hooks (useContext, useReducer, useRef)",
        "Component Lifecycle",
        "Conditional Rendering & List Mapping",
        "Styling in React (CSS Modules, Styled-components)",
        "Client-Side Routing with React Router",
        "Building and Deploying a React App",
      ],
    },
    {
      title: "Module 2: Building Backend with Node.js & Express",
      topics: [
        "Node.js Architecture & Event Loop",
        "Creating an Express Server",
        "Routing (Parameters & Queries)",
        "Designing RESTful APIs (GET, POST, PUT, DELETE)",
        "Implementing Middleware for Authentication & Logging",
        "Handling Asynchronous Operations (Promises, Async/Await)",
        "Environment Variables with dotenv",
      ],
    },
    {
      title: "Module 3: Database Integration with MongoDB",
      topics: [
        "Introduction to NoSQL vs SQL Databases",
        "Setting up MongoDB Atlas",
        "Schema Design and Data Modeling with Mongoose",
        "Advanced CRUD Operations",
        "Data Validation and Middleware in Mongoose",
        "Indexing for Performance Optimization",
        "Aggregation Pipeline Basics",
      ],
    },
    {
      title: "Module 4: Full-Stack Project & Deployment",
      topics: [
        "Project Architecture Planning",
        "User Authentication with JSON Web Tokens (JWT)",
        "State Management with Redux Toolkit",
        "Building a Complete E-commerce Platform",
        "Payment Gateway Integration",
        "Deploying Frontend and Backend separately",
        "Final Project Presentation",
      ],
    },
  ],
  "data-structures-and-algorithms": [
    {
      title: "Module 1: Core Data Structures",
      topics: [
        "Algorithm Analysis: Time & Space Complexity (Big O Notation)",
        "Arrays: 1D, 2D, Dynamic Arrays (Vectors)",
        "Linked Lists: Singly, Doubly, Circular Lists & Operations",
        "Stacks: Implementation (Array & List) and Applications",
        "Queues: Implementation, Circular Queues, Deques",
      ],
    },
    {
      title: "Module 2: Advanced Data Structures",
      topics: [
        "Trees: Terminology, Binary Trees, Binary Search Trees (BST)",
        "Tree Traversals: Inorder, Preorder, Postorder, Level Order",
        "Heaps: Min-Heap, Max-Heap, and Priority Queues",
        "Graphs: Representation (Adjacency Matrix/List), BFS, DFS",
        "Hash Tables: Hashing Functions & Collision Resolution Techniques",
      ],
    },
    {
      title: "Module 3: Essential Algorithms",
      topics: [
        "Searching Algorithms: Linear Search vs. Binary Search",
        "Basic Sorting: Bubble Sort, Insertion Sort, Selection Sort",
        "Efficient Sorting: Merge Sort, Quick Sort, Heap Sort",
        "Analysis of Sorting Algorithms",
      ],
    },
    {
      title: "Module 4: Algorithmic Paradigms & Problem Solving",
      topics: [
        "Recursion and Backtracking (e.g., N-Queens)",
        "Divide and Conquer Strategy",
        "Greedy Algorithms (e.g., Dijkstra's)",
        "Dynamic Programming: Memoization & Tabulation (e.g., Fibonacci, Knapsack)",
      ],
    },
  ],
  "data-analytics-foundation": [
    {
      title: "Module 1: Advanced SQL for Data Analysis",
      topics: [
        "Complex Queries with multiple Joins",
        "Subqueries and Common Table Expressions (CTEs)",
        "Window Functions (RANK(), DENSE_RANK())",
        "Aggregation with GROUP BY and HAVING",
        "CASE Statements for Conditional Logic",
      ],
    },
    {
      title: "Module 2: Mastering Excel for Business",
      topics: [
        "Advanced Formulas (VLOOKUP, HLOOKUP, INDEX, MATCH)",
        "Data Cleaning and Validation",
        "Pivot Tables and Slicers for Interactive Reports",
        "What-If Analysis (Goal Seek, Scenario Manager)",
        "Introduction to VBA Macros for Automation",
      ],
    },
    {
      title: "Module 3: Dashboarding with Power BI",
      topics: [
        "Connecting to Various Data Sources",
        "Data Transformation with Power Query Editor (ETL)",
        "Data Modeling and Creating Relationships",
        "Writing DAX (Data Analysis Expressions) for Calculated Columns and Measures",
        "Building Interactive Dashboards and Reports",
        "Publishing and Sharing on Power BI Service",
      ],
    },
  ],
  "advanced-ai-and-machine-learning": [
    {
      title: "Module 1: Python Ecosystem for ML",
      topics: [
        "NumPy: Array manipulation, broadcasting",
        "Pandas: DataFrames, data cleaning, grouping, merging",
        "Matplotlib & Seaborn for Advanced Data Visualization",
        "Introduction to Scikit-learn: fit/transform/predict paradigm",
      ],
    },
    {
      title: "Module 2: Supervised Learning Models",
      topics: [
        "Linear & Logistic Regression In-Depth",
        "Decision Trees & Random Forests",
        "Support Vector Machines (SVM)",
        "Model Evaluation: Confusion Matrix, Precision, Recall, F1-Score",
        "Cross-Validation and Hyperparameter Tuning",
      ],
    },
    {
      title: "Module 3: Unsupervised Learning & Dimensionality Reduction",
      topics: [
        "K-Means Clustering",
        "Hierarchical Clustering",
        "DBSCAN",
        "Principal Component Analysis (PCA) for Dimensionality Reduction",
      ],
    },
    {
      title: "Module 4: Introduction to Deep Learning",
      topics: [
        "Anatomy of a Neural Network (Layers, Neurons, Activation Functions)",
        "Backpropagation and Gradient Descent",
        "Building your first Neural Network with TensorFlow/Keras",
        "Introduction to Convolutional Neural Networks (CNNs) for Image Recognition",
      ],
    },
  ],
  "react-native-cross-platform-dev": [
    {
      title: "Module 1: React Native Fundamentals",
      topics: [
        "Setting up the Environment (Expo vs. Bare)",
        "Core Components (View, Text, Image, ScrollView, FlatList)",
        "Styling with StyleSheet and Flexbox for Layouts",
        "Handling User Input (TextInput, Button)",
      ],
    },
    {
      title: "Module 2: Navigation and State Management",
      topics: [
        "Stack, Tab, and Drawer Navigation with React Navigation",
        "Passing Data Between Screens",
        "Advanced State Management with Context API and Redux Toolkit",
      ],
    },
    {
      title: "Module 3: Working with Native APIs",
      topics: [
        "Using the Permissions API",
        "Accessing Device Features: Camera, Geolocation",
        "Local Data Persistence with AsyncStorage",
        "Making API calls with Fetch / Axios",
      ],
    },
  ],
  "core-java-with-springboot": [
    {
      title: "Module 1: Advanced Core Java",
      topics: [
        "Advanced OOPs (Inheritance, Polymorphism, Abstraction)",
        "The Collections Framework In-Depth",
        "Exception Handling Best Practices",
        "Java 8 Features: Streams, Lambdas, Functional Interfaces",
        "Introduction to Multithreading",
      ],
    },
    {
      title: "Module 2: Spring Core & Dependency Injection",
      topics: [
        "Understanding Inversion of Control (IoC)",
        "Dependency Injection (Constructor, Setter)",
        "The Spring Bean Lifecycle",
        "Stereotype Annotations (@Component, @Service, @Repository)",
      ],
    },
    {
      title: "Module 3: Building Microservices with SpringBoot",
      topics: [
        "Introduction to SpringBoot and Auto-configuration",
        "Building RESTful APIs with @RestController",
        "Data Persistence with Spring Data JPA and Hibernate",
        "Basic API Security with Spring Security",
      ],
    },
  ],
  "c-programming": [
    {
      title: "Module 1: C Fundamentals",
      topics: [
        "Variables, Data Types, Constants, and Operators",
        "Standard Input/Output (scanf, printf)",
        "Conditional Statements (if, else-if, switch)",
        "Loops (for, while, do-while)",
      ],
    },
    {
      title: "Module 2: Functions, Arrays & Pointers",
      topics: [
        "Writing and Using Functions",
        "Understanding Scope and Recursion",
        "Arrays and String Manipulation",
        "Introduction to Pointers and Memory Addresses",
        "Dynamic Memory Allocation (malloc, free)",
      ],
    },
    {
      title: "Module 3: Advanced C Concepts",
      topics: [
        "Structures and Unions for Custom Data Types",
        "File Handling: Reading from and Writing to Files",
        "The C Preprocessor (Macros, Includes)",
        "Command Line Arguments",
      ],
    },
  ],
  "cpp-programming": [
    {
      title: "Module 1: C++ Basics",
      topics: [
        "From C to C++: Syntax and Improvements",
        "Input/Output Streams (cin, cout)",
        "Functions and Function Overloading",
        "Understanding References vs. Pointers",
      ],
    },
    {
      title: "Module 2: Deep Dive into Object-Oriented Programming",
      topics: [
        "Classes & Objects",
        "Constructors, Destructors, `this` pointer",
        "Inheritance and its Types",
        "Polymorphism: Virtual Functions and Operator Overloading",
        "Abstraction and Encapsulation",
      ],
    },
    {
      title: "Module 3: Standard Template Library (STL)",
      topics: [
        "Introduction to Templates",
        "STL Containers: Vector, List, Map, Set",
        "Iterators for Container Traversal",
        "Standard Algorithms (e.g., sort, find, count)",
      ],
    },
  ],
  "python-programming": [
    {
      title: "Module 1: Python Fundamentals",
      topics: [
        "Variables, Data Types, and Operators",
        "Control Flow: if-elif-else statements and Loops",
        "Functions, Arguments, and Lambda Expressions",
      ],
    },
    {
      title: "Module 2: Python Data Structures",
      topics: [
        "Working with Lists, Tuples, and Sets",
        "Mastering Dictionaries",
        "Advanced String Manipulation and Formatting",
        "List Comprehensions for Concise Code",
      ],
    },
    {
      title: "Module 3: Advanced Python & OOP",
      topics: [
        "Object-Oriented Programming: Classes and Inheritance",
        "File Handling (Reading and Writing Files)",
        "Exception Handling with try-except blocks",
        "Working with Modules and Creating Your Own",
      ],
    },
  ],
};

export const mentors = [
  {
    name: "Burle Sharma",
    title: "Founder & Full-Stack Mentor",
    image: mentor1,
    bgColor: "#f0f9ff",
    socials: [
      {
        icon: FaLinkedin,
        link: "https://www.linkedin.com/in/burle-sharma?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
      {
        icon: FaInstagram,
        link: "https://www.instagram.com/burlesharma?igsh=dnJ2ZXoxdTJ5bTdl",
      },
    ],
  },
  {
    name: "Anshuman Sahu",
    title: "Co-Founder DSA & System Design Expert",
    image: mentor2,
    bgColor: "#fefafcff",
    socials: [
      {
        icon: FaLinkedin,
        link: "https://www.linkedin.com",
      },
      {
        icon: FaInstagram,
        link: "https://www.instagram.com/anshuman.sairam?igsh=MWw0bTZoMjNxcDBkaA==",
      },
    ],
  },
];

export const placementCompanies = [
  { name: "TCS", logo: "https://logo.clearbit.com/tcs.com" },
  { name: "Infosys", logo: "https://logo.clearbit.com/infosys.com" },
  { name: "Wipro", logo: "https://logo.clearbit.com/wipro.com" },
  { name: "Accenture", logo: "https://logo.clearbit.com/accenture.com" },
  { name: "Capgemini", logo: "https://logo.clearbit.com/capgemini.com" },
  { name: "Cognizant", logo: "https://logo.clearbit.com/cognizant.com" },
  { name: "HCL Tech", logo: "https://logo.clearbit.com/hcltech.com" },
  { name: "Mindtree", logo: "https://logo.clearbit.com/mindtree.com" },
];

const logoMap = placementCompanies.reduce((acc, company) => {
  acc[company.name.toLowerCase()] = company.logo;
  return acc;
}, {});

logoMap['local startup'] = startupCompanyLogo;

export const STUDENT_DATA = [
  {
    id: 1,
    name: "Omkar Prasad Barai",
    image: omkarImg,
    dob: "09-25", // Birthday component ke liye
    
    // Placement data (Hall of Fame ke liye)
    isPlaced: true,
    batch: "MERN 2024",
    placedAt: "Infosys",
    cracked: ["TCS", "Wipro"]
  },
  {
    id: 2,
    name: "Omkar Prasad Barai",
    image: omkarImg,
    dob: "09-25", // Birthday component ke liye
    
    // Placement data (Hall of Fame ke liye)
    isPlaced: true,
    batch: "MERN 2024",
    placedAt: "Infosys",
    cracked: ["TCS", "Wipro"]
  },
  {
    id: 3,
    name: "Omkar Prasad Barai",
    image: omkarImg,
    dob: "09-25", // Birthday component ke liye
    
    // Placement data (Hall of Fame ke liye)
    isPlaced: true,
    batch: "MERN 2024",
    placedAt: "Infosys",
    cracked: ["TCS", "Wipro"]
  },
  {
    id: 4,
    name: "Omkar Prasad Barai",
    image: omkarImg,
    dob: "09-25", // Birthday component ke liye
    
    // Placement data (Hall of Fame ke liye)
    isPlaced: true,
    batch: "MERN 2024",
    placedAt: "Infosys",
    cracked: ["TCS", "Wipro"]
  }
];

export const COMPANY_LOGOS = logoMap;

export const contactInfo = [
  {
    icon: FaEnvelope,
    text: "geecoding@gmail.com",
    link: "mailto:geecoding@gmail.com",
  },
  { icon: FaPhone, text: "9861163981, 7978539920" },
  { icon: FaMapMarkerAlt, text: "Behind GM University, Khetrajpur Station Road, Sambalpur, Odisha", link: "#" },
];

export const socialMedia = [
  { icon: FaYoutube, link: GEECODING_YOUTUBE },
  { icon: FaInstagram, link: GEECODING_INSTAGRAM },
];

export const heroMarqueeTexts = [
  "• We are best at mastering _Coding",
  "• Building Real-World Applications",
  "• Mastering Data Structures & Algorithms",
  "• Your Career in Tech Starts Here",
  "• Learn. Code. Build. Repeat.",
];

export const promoData = [
  {
    "image": promoImg1,
    "alt": "Live Interactive Online Classes"
  },
  {
    "image": promoImg2,
    "alt": "Become a Job-Ready Full Stack Developer"
  }
];