const hamburger = document.querySelector(
  ".header .nav-bar .nav-list .hamburger"
);
const mobile_menu = document.querySelector(".header .nav-bar .nav-list ul");
const menu_item = document.querySelectorAll(
  ".header .nav-bar .nav-list ul li a"
);
const header = document.querySelector(".header.container");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobile_menu.classList.toggle("active");
});

document.addEventListener("scroll", () => {
  var scroll_position = window.scrollY;
  if (scroll_position > 100) {
    header.style.backgroundColor = "#171717";
  } else {
    header.style.backgroundColor = "transparent";
  }
});

menu_item.forEach((item) => {
  item.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobile_menu.classList.toggle("active");
  });
});

window.addEventListener(`popstate`, handle);

function handle(evt) {
  if (location.hash) {
    history.replaceState(null, ``, location.pathname);
  }
}

const projects = [
  {
    title: "Rate-a-School",
    description: "AI-Driven School Feedback Platform",
    details:
      "Developed a web application that allows users to rate schools and share their experiences, utilizing AI-driven feedback to help schools identify areas for improvement and enhance customer satisfaction. The platform promotes transparency and enables informed decision-making for parents and guardians. It was designed to address issues such as bullying and poor school quality by facilitating community-driven feedback.",
    link: "https://github.com/semilogopaul/rateaschool",
    stack: "REACT, TYPESCRIPT, TAILWIND, DJANGO, DJANGO-REST FRAMEWORK",
    image: "Rate-a-school.png",
  },
  {
    title: "Vendor Search App",
    description: "Vendor Search App",
    details:
      "A voluntarily built web app for Zeta-Web Nigeria Limited built during my internship period, it extracts vendor data from excel files and presents them on the front-end in a beautiful way for easier data accessibility and efficiency. Earned me a recommendation from the head of technology.",
    link: "https://vendor-search.vercel.app/",
    stack: "HTML, CSS, JAVASCRIPT",
    image: "vendor-search.PNG",
  },
  {
    title: "NeuraLearn",
    description: "AI-Powered Learning Assistant",
    details:
      "Developed a web app that transforms uploaded text, PDFs, and images into interactive learning materials, including auto-generated questions and flashcards. The platform offers customizable difficulty levels, study modes, and real-time performance tracking with accuracy, time analytics and other metrics. Leveraged NLP and image processing to enhance content extraction and adaptive learning.",
    link: "https://neura-learn-frontend-fmin.vercel.app/",
    stack: "NODE.JS, REACT.JS, DJANGO",
    image: "neuralearn.jpeg",
  },
  {
    title: "Littlemon API",
    description: "API for LittleLemon Restaurant",
    details:
      "Developed an API for the LittleLemon Restaurant for reservation management and other functions, implementing token-based authentication, throttling, and pagination to ensure secure and efficient API usage. The API supports multiple response formats, including JSON and XML. Additionally, I integrated the Django Debug Toolbar to facilitate easy debugging.",
    link: "https://github.com/semilogopaul/littlelemon",
    stack:
      "PYTHON, DJANGO, DJANGO-REST FRAMEWORK, SQL, HTML, CSS, JAVASCRIPT, DJOSER",
    image: "littlelemon.PNG",
  },
  {
    title: "DIY Analytics",
    description: "No Code Data Analysis",
    details:
      "DIY Analytics is a no-code tool for analyzing and visualizing data using 'natural language' and drag-drop-click features. All you have to do is upload a dataset!! How interesting is that!",
    link: "https://github.com/semilogopaul/ds-ml-ai-trac",
    stack: "PYTHON",
    image: "DIY-ANALYTICS.png",
  },
  {
    title: "Iphone 15",
    description: "Interactive iPhone 15 Landing Page",
    details:
      "Created a luxurious, interactive iPhone 15 landing page utilizing GSAP for smooth animations and Three.js for 3D elements.",
    link: "https://adeogun-iphone.netlify.app/",
    stack: "REACT, JAVASCRIPT, THREE.JS, GSAP (Greensock), TAILWIND",
    image: "iPhone.png",
  },
  {
    title: "Trader Dashboard",
    description: "Live Graph for Traders",
    details:
      "Fixed broken client datafeed script and utilized JPMorgan's Perspective software to generate a live graph for traders.",
    link: "https://github.com/semilogopaul/forage-jpmc-swe-task-3",
    stack: "PYTHON, TYPESCRIPT, REACT, HTML, CSS, JAVASCRIPT",
    image: "jpmc-graph.PNG",
  },
  {
    title: "Nike Landing Page",
    description: "Beautiful Nike Shoes Landing Page",
    details:
      "A beautiful Nike shoes landing page built while learning React and Tailwind.",
    link: "https://github.com/semilogopaul/nike-landing-page",
    stack: "TYPESCRIPT, TAILWIND, REACT, HTML, CSS, JAVASCRIPT",
    image: "nike-page.PNG",
  },
];

const contactItems = [
  {
    type: "Phone",
    value: "+234-915-762-0814",
    icon: "https://img.icons8.com/bubbles/100/000000/phone.png",
  },
  {
    type: "Email",
    value: "oluwasemilogoadeogun@gmail.com",
    icon: "https://img.icons8.com/bubbles/100/000000/new-post.png",
  },
  {
    type: "Address",
    value: "Lagos State, Nigeria",
    icon: "https://img.icons8.com/bubbles/100/000000/map-marker.png",
  },
];

const footerContent = {
  brand: "Adeogun Semilogo",
  role: "Software Engineer",
  socialLinks: [
    {
      platform: "Instagram",
      link: "https://instagram.com/the_oluwasemilogo",
      icon: "https://img.icons8.com/bubbles/100/000000/instagram-new.png",
    },
    {
      platform: "LinkedIn",
      link: "https://www.linkedin.com/in/oluwasemilogo-adeogun-5a0b10242/",
      icon: "https://img.icons8.com/bubbles/100/000000/linkedin.png",
    },
    {
      platform: "GitHub",
      link: "https://github.com/semilogopaul",
      icon: "https://img.icons8.com/bubbles/100/000000/github.png",
    },
    {
      platform: "TikTok",
      link: "https://tiktok.com/@the_oluwasemilogo",
      icon: "https://img.icons8.com/bubbles/100/000000/tiktok.png",
    },
  ],
  copyright: "Copyright © 2025 Adeogun. All rights reserved",
};

// Dynamically generate projects
const projectsContainer = document.getElementById("projects-container");
projects.forEach((project) => {
  projectsContainer.innerHTML += `
    <div class="project-item">
      <div class="project-info">
        <h1>${project.title}</h1>
        <h2>${project.description}</h2>
        <p>${project.details} ${
    project.link
      ? `<a href="${project.link}" style="color: orangered" target="_blank">Click here</a>`
      : ""
  } to check it out.</p>
        <p class="stack-used"><em>${project.stack}</em></p>
      </div>
      <div class="project-img">
        <img src="${project.image}" alt="${project.title}-image" />
      </div>
    </div>
  `;
});

// Dynamically generate contact items
const contactContainer = document.getElementById("contact-container");
contactItems.forEach((item) => {
  contactContainer.innerHTML += `
    <div class="contact-item">
      <div class="icon">
        <img src="${item.icon}" alt="${item.type}" />
      </div>
      <div class="contact-info">
        <h1>${item.type}</h1>
        <h2>${item.value}</h2>
      </div>
    </div>
  `;
});

// Dynamically generate footer
const footerContainer = document.getElementById("footer-container");
footerContainer.innerHTML = `
  <div class="brand">
    <h1><span>A</span>deogun <span>S</span>emilogo</h1>
  </div>
  <h2>${footerContent.role}</h2>
  <div class="social-icon">
    ${footerContent.socialLinks
      .map(
        (link) => `
      <div class="social-item">
        <a href="${link.link}" target="_blank">
          <img src="${link.icon}" alt="${link.platform}" />
        </a>
      </div>
    `
      )
      .join("")}
  </div>
  <p>${footerContent.copyright}</p>
`;
