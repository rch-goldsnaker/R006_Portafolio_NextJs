export const projects = [
  {
    title: "Portfolio 3D",
    description:
      "This is a page where you can see the 3D model of an animated robotic arm, rendered within a web application. Inside the page there is a section of my projects, my experience and contacts.",
    image: "/images/portafolio3d.png",
    tags: ["Three.js", "React", "Tailwind CSS", "JavaScript"],
    source: "https://port-folio-3-d-gamma.vercel.app/",
    visit: "https://github.com/rch-goldsnaker/PortFolio_3D",
    id: 0,
  },
  {
    title: "IoT Dashboard EMQX",
    description:
      "This is a very interesting project, where it starts from the programming of the Esp8266 and Esp32Cam devices together with the DHT11 temperature and humidity sensor, going through the frontend with Nuxt, then to the Backend with NodeJs, using a database with MongoDB, and finally an MQTT broker using EMQX. In the link you can see the static version on github pages.",
    image: "/images/dashboard-demo-iot.png",
    tags: ["Nuxt", "Node", "Mongo", "Emqx", "Esp8266", "Esp32Cam"],
    source: "https://rch-goldsnaker.github.io/iot-demo.github.io/login",
    visit: "https://github.com/rch-goldsnaker/iot-demo.github.io",
    id: 1,
  },
  {
    title: "Air Quality Monitor Iot",
    description: "This application is a dashboard that shows the values obtained from various air sensors.It also helps the user to quickly identify the status of air quality.Within the app, the two air quality scales, such as PM2.5 and AQI, are displayed in the main part.then the temperature and pressure values are displayed.It also shows a table with the values obtained from the sensor.",
    image: "/images/airIot.JPG",
    tags: ["Angular", "TypeScript", "Angular Material"],
    source: "https://rch-goldsnaker.github.io/Air_Quality_Monitor_Iot_App/ ",
    visit: "https://github.com/rch-goldsnaker/Air_Quality_Monitor_Iot_App",
    id: 2,
  },
  {
    title: "Dashboard 3D",
    description: "This project was carried out using a tool for web page rendering. Using splines, a 3D and responsive webpage was constructed",
    image: "/images/dasboard3d.png",
    tags: ["Three.js", "React", "Spline"],
    source: "https://my.spline.design/dashboard-742c0757b3aedbc5094c0ea6baefcfb3/",
    visit: "https://my.spline.design/dashboard-742c0757b3aedbc5094c0ea6baefcfb3/",
    id: 3,
  },
  {
    title: "Online Banking App",
    description:
      "This is a Full Stack application and was developed using React on the frontend, Node.js on the backend, and MongoDB as the database.This banking application provides a robust platform for users to perform transactions, view their accounts, and make transfers conveniently.With its home screen, dashboard, transaction visualization, and online banking capabilities, along with its responsive design, this application is a comprehensive solution for users' banking needs.",
    image: "/images/onlineBankinApp.JPG",
    tags: ["React", "Node", "Mongo DB", "Tailwind CSS"],
    source:
      "https://online-banking-app-frontend.vercel.app/",
    visit:
      "https://github.com/rch-goldsnaker/OnlineBankingApp_frontend",
    id: 4,
  },
  {
    title: "Blog - IoT Projects",
    description:
      "Using React, NextJs, GraphQL and Tailwind CSS - The Blog is called IoT Projects and it is a blog where I publish articles related to device configuration and programming, as well as IoT projects related to industrial automation and sensor monitoring.",
    image: "/images/blogIotProjects2.PNG",
    tags: ["React", "GraphQL", "NextJS", "Tailwind CSS"],
    source:
      "https://r005-blog-next-js-graph-ql-tailwind-e64z3dvhj-rch-goldsnaker.vercel.app",
    visit:
      "https://github.com/rch-goldsnaker/R005_Blog_NextJs-GraphQL-Tailwind",
    id: 5,
  },
  {
    title: "Machine Learning",
    description:
      "Using TensorFlow.js - On this web you can see a machine learning application that can recognize images from a camera in real time, and also that the app has the possibility of being trained with any image.First for the image recognition we are going to use 'mobilenet' and the webcam, then we are going to transfer the knowledge to 'knn-classifier' to be able to train the model with any image.",
    image: "/images/transferTensor.JPG",
    tags: ["Html", "JavaScript", "CSS", "TensorFlow.js"],
    source:
      "https://rch-goldsnaker.github.io/TensorFlowJS_knowledgeTransfer_003/",
    visit:
      "https://github.com/rch-goldsnaker/TensorFlowJS_knowledgeTransfer_003",
    id: 6,
  },
  {
    title: "Machine Learning",
    description:
      "Using TensorFlow.js - On this web you can see a machine learning application that can recognize random images.For the generation of random images we will use an external source such as 'picsum', and for image recognition we are going to use 'mobilenet'.",
    image: "/images/mlPrediction.JPG",
    tags: ["Html", "JavaScript", "CSS", "TensorFlow.js"],
    source: "https://rch-goldsnaker.github.io/TensorFlowJS_Mobilenet_002/",
    visit: "https://github.com/rch-goldsnaker/TensorFlowJS_Mobilenet_002",
    id: 7,
  },
  {
    title: "Cards Links",
    description:
      "This application is a CRUD integrating Angular, and supabase. It is used to save and display links quickly and easily.",
    image: "/images/cardLinks.jpeg",
    tags: ["Angular", "TypeScript", "Supabase"],
    source: "https://card-links-app.vercel.app/",
    visit: "https://github.com/rch-goldsnaker/card-links-app",
    id: 8,
  },
  {
    title: "Music Player",
    description: "This is a music player built with Angular.",
    image: "/images/musicPlayer.jpeg",
    tags: ["Angular", "TypeScript", "SCSS"],
    source: "https://music-reproductor-angular.vercel.app/",
    visit: "https://github.com/rch-goldsnaker/music-reproductor-angular",
    id: 9,
  },
  {
    title: 'IoT Monitoring',
    description: "Using Html, Javascript and CSS - It is a web site where a dashboard of temperature motor sensors are shown. This Front-end template can be integrated with a IoT Project for the temperature motor control and monitoring.This could help with the maintenance of the equipment and prevent future failures.",
    image: '/images/iotmotor.PNG',
    tags: ['Html', 'JavaScript', 'CSS'],
    source: 'https://rch-goldsnaker.github.io/rch.goldsnaker/',
    visit: 'https://github.com/rch-goldsnaker/rch.goldsnaker',
    id: 10,
  },
  {
    title: 'Machine Learning',
    description: "Using TensorFlow.js - On this web page you can see how a simple problem can be solved using machine learning. You can also see how a model is trained and tested. Being a machine learning application, I tried to use the simplest technologies in order to improve performance.",
    image: '/images/mlXor.JPG',
    tags: ['Html', 'JavaScript', 'CSS', 'TensorFlow.js'],
    source: 'https://rch-goldsnaker.github.io/TensorFlowJS_XOR_001/',
    visit: 'https://github.com/rch-goldsnaker/TensorFlowJS_XOR_001',
    id: 11,
  },
  {
    title: 'Blog Learn Korean',
    description: "Using Next.js - This project is about a blog to learn Korean. I created it while studying for the TOPIK (Test of Proficiency in Korean) international exam.",
    image: '/images/blogKorean.JPG',
    tags: ["React", "GraphQL", "NextJS", "Tailwind CSS"],
    source: 'https://r007-aprende-coreano-blog-hnco8e1kn-rch-goldsnaker.vercel.app/',
    visit: 'https://github.com/rch-goldsnaker/R007_AprendeCoreano_Blog',
    id: 12,
  }
];

export const TimeLineData = [
  { year: 2016, text: 'Graduated as an Electromechanic engineer', },
  { year: 2016, text: 'Worked as a 3D Mechanical Designer in a manufacturing company', },
  { year: 2017, text: 'Worked as a Maintenance Analyst in a manufacturing company', },
  { year: 2020, text: 'Worked as a Project Engineer in a manufacturing company', },
  { year: 2021, text: 'Started as IoT developer in freelance', },
  { year: 2021, text: 'Started as Flow Specialist in a software company', },
  { year: 2022, text: 'Started as FullStack Developer in a software company', }
];