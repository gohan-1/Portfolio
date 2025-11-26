export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Experienced software developer with 5+ years in backend and full-stack development.",
    description: "Specialized in Node.js, React.js, and cloud-based scalable systems and blockchain.",
    className: "lg:col-span-2  md:col-span-6 md:row-span-2 lg:min-h-[40vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I collaborate effectively across global teams and agile environments.",
    description: "",
    className: "lg:col-span-1 md:col-span-1 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-1 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Blockchain developer passionate about self-sovereign identity and cloud systems.",
    description: "",
    className: "lg:col-span-1 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a Animated portfolio",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2 lg:col-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-1 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 2,
    title: "Self-Sovereign Identity (SSI) Verification Platform",
    des: "Developed an SSI-based authentication and verification system using Veramo and Node.js, reducing verification costs by 30% and authentication latency by 50%.",
    img: "/p1.svg",
    iconLists: ["/node.png", "/dock.svg", "/host.svg", "/re.svg", "/ge.png"],
    link: "https://www.myearth.id/", // replace with your repo if available
  },
  {
    id: 3,
    title: "OTT Platform Backend Optimization – SONYLIV",
    des: "Scaled Node.js backend services to support 20M+ concurrent users, improving API response time by 35% and reducing page load time by 25%.",
    img: "/p2.svg",
    iconLists: ["/node.png", "re.svg", "/aws.png", "/ts.svg"],
    link: "https://www.sonyliv.com/", // replace with your repo if needed
  },
  {
    id: 4,
    title: "Hyperledger Indy Middleware Engine",
    des: "Engineered blockchain middleware that reduced Hyperledger Indy transaction processing time by 40%, improving identity validation workflows.",
    img: "/p3.svg",
    iconLists: [ "/node.png", "ge.png", "/dock.svg",],
    link: "https://hyperledger-indy.readthedocs.io/en/latest/",
  },
  {
    id: 5,
    title: "Portfolioi",
    des: "Animated portfolio",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/re.svg", "/node.png", "/ts.svg"],
    link: "https://github.com/gohan-1/Portfolio",
  },
];

export const testimonials = [
  {
    quote:
      "Working with Vishnu has been exceptional. His deep understanding of backend systems, blockchain architecture, and cloud platforms consistently elevated our project. His ability to break down complex problems and deliver efficient solutions is unmatched.",
    name: "Rajesh Menon",
    title: "CTO, EarthID",
  },
  {
    quote:
      "Vishnu is a rare talent—highly skilled, reliable, and genuinely dedicated. His contributions to our identity management platform significantly improved performance and stability. Any team would be fortunate to have him.",
    name: "Sarah Thompson",
    title: "Project Manager, EarthID London",
  },
  {
    quote:
      "I’ve collaborated with Vishnu on multiple backend and Node.js migrations. His attention to detail, strong debugging skills, and commitment to high-quality engineering have made a noticeable impact on our product delivery timelines.",
    name: "Amit Kumar",
    title: "Senior Systems Engineer, TCS",
  },
  {
    quote:
      "Vishnu consistently demonstrates leadership, technical expertise, and a collaborative mindset. His ability to optimize APIs, streamline deployments, and guide junior developers greatly improved our overall team efficiency.",
    name: "Deepa R.",
    title: "Engineering Lead, ULTS",
  },
  {
    quote:
      "Vishnu is a problem-solver at heart. Whether it’s blockchain integrations, creating secure identity workflows, or developing scalable backend services, he approaches everything with remarkable clarity and professionalism.",
    name: "James Wright",
    title: "Founder, AI Agency Marketplace",
  }
]   
export const companies = [
  {
    id: 1,
    name: "EarthID",
    img: "/earthid.png",
    nameImg: "EarthID",
  },
  {
    id: 2,
    name: "TCSL",
    img: "tcs.png",
    nameImg: "TCS",
  },
  {
    id: 3,
    name: "ULTS",
    img: "/ults.png",
    nameImg: "ULTS",
  },
  {
    id: 4,
    name: "ActiveBytes",
    img: "/s.svg",
    nameImg: "ActiveBytes",
  },
  
];

export const workExperience = [
  {
    id: 1,
    title: "Blockchain Developer - EarthId, London",
    desc: "Spearheaded the development of self-sovereign identity solutions on Veramo, reducing authentication latency by 50% and verification costs by 30% for 10,000+ users. Managed SSI servers with 99.9% uptime and implemented robust error handling for Node.js APIs.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Systems Engineer - TCSL, Bangalore, India",
    desc: "Scaled backend services for SONYLIV OTT platform, improving API response times by 35% for 20M+ users. Delivered 30+ Agile user stories, reduced bugs by 95%, migrated legacy code to Node.js v18, and optimized API workflows to cut latency by 15%.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Developer Analyst - ULTS, Kozhikode, India",
    desc: "Engineered middleware using Hyperledger Indy to reduce blockchain transaction processing by 40%. Automated deployment workflows, cutting manual tasks by 60% and deployment time by 50%. Delivered key functionality across 15+ Agile sprints and closed 100+ Jira tickets.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },

  {
    id: 5,
    title: "Intern - AI Agency Marketplace, London, UK",
    desc: "Developing financial model automation and market forecasting solutions using n8n, gaining hands-on experience in data automation and financial analytics.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];


// export const workExperience = [
//   {
//     id: 1,
//     title: "Frontend Engineer Intern",
//     desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
//     className: "md:col-span-2",
//     thumbnail: "/exp1.svg",
//   },
//   {
//     id: 2,
//     title: "Mobile App Dev - JSM Tech",
//     desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
//     className: "md:col-span-2", // change to md:col-span-2
//     thumbnail: "/exp2.svg",
//   },
//   {
//     id: 3,
//     title: "Freelance App Dev Project",
//     desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
//     className: "md:col-span-2", // change to md:col-span-2
//     thumbnail: "/exp3.svg",
//   },
//   {
//     id: 4,
//     title: "Lead Frontend Developer",
//     desc: "Developed and maintained user-facing features using modern frontend technologies.",
//     className: "md:col-span-2",
//     thumbnail: "/exp4.svg",
//   },
// ];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    Link:"https://github.com/gohan-1/"

  },
  {
    id: 2,
    img: "/twit.svg",
    Link:"https://www.linkedin.com/in/vishnu-s-krishnan"
  },
  {
    id: 3,
    img: "/link.svg",
    Link:"https://www.linkedin.com/in/vishnu-s-krishnan"
  },
];