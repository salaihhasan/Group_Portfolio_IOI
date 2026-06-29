// Team Members Data
const members = [
    {
        name: "Md Salaih Hasan",
        role: "Team Leader & Frontend Developer",
        bio: "Frontend developer passionate about responsive web development and collaborative projects.",
        skills: ["HTML", "CSS", "JavaScript", "Java", "SQL", "Git"],
        github: "https://github.com/salaihhasan",
        linkedin: "https://linkedin.com/in/mdsalaihhasan",
        image: "images/profile-placeholder.png"
    },
    {
        name: "Priyanshu Patel",
        role: "Software Developer",
        bio: "Interested in Java, Web Development and Software Engineering.",
        skills: ["Java", "C", "SQL", "MySQL", "Git", "JavaScript"],
        github: "https://github.com/priyanshupatel915",
        linkedin: "https://linkedin.com/in/priyanshu-patel",
        image: "images/profile-placeholder.png"
    },
    {
        name: "Ankit Raj",
        role: "Flutter Developer",
        bio: "Passionate about Android and iOS application development.",
        skills: ["Flutter", "Dart", "Java", "C", "Git", "VS Code"],
        github: "https://github.com/RadheAnkit01",
        linkedin: "https://linkedin.com/in/ankit-raj",
        image: "images/profile-placeholder.png"
    },
    {
        name: "Ayush Ranjan",
        role: "Database Developer",
        bio: "Interested in Java, SQL and Database Management.",
        skills: ["SQL", "MySQL", "Java", "C", "Relational Databases", "VS Code"],
        github: "https://github.com/ayushranjan",
        linkedin: "https://www.linkedin.com/in/ayush-ranjan-ab9502381",
        image: "images/profile-placeholder.png"
    },
    {
        name: "Chitra Jha",
        role: "Database Developer",
        bio: "Focused on database design and software engineering.",
        skills: ["SQL", "MySQL", "Java", "C", "ER Modeling", "VS Code"],
        github: "https://github.com/chitra-jha",
        linkedin: "https://www.linkedin.com/in/chitra-jha-907805371/",
        image: "images/profile-placeholder.png"
    },
    {
        name: "Hemant Nanda",
        role: "Software Developer",
        bio: "Passionate about learning programming and building software.",
        skills: ["HTML", "CSS", "JavaScript", "C", "Java", "Git"],
        github: "https://github.com/hemantnanda",
        linkedin: "https://linkedin.com/in/hemant-nanda",
        image: "images/profile-placeholder.png"
    }
];

// Skills Data
const skills = ["HTML", "CSS", "JavaScript", "Java", "C", "SQL", "MySQL", "Git", "GitHub", "Flutter", "VS Code"];

// Projects Data
const projects = [
    {
        title: "Amazon Clone",
        description: "A responsive e-commerce shopping website interface made with HTML, CSS, JavaScript, and Bootstrap.",
        technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
        github: "https://github.com/salaihhasan"
    },
    {
        title: "Gym Dashboard",
        description: "A responsive dashboard page to track and manage gym schedules and workouts.",
        technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
        github: "https://github.com/salaihhasan"
    },
    {
        title: "Library Management System",
        description: "A database management system designed to track library books, members, and borrows.",
        technologies: ["Java", "SQL", "MySQL"],
        github: "https://github.com/RadheAnkit01/library-management-system"
    },
    {
        title: "Corona Stats App",
        description: "A mobile app tracking real-time global statistics and maps for COVID-19.",
        technologies: ["Flutter", "Dart", "API"],
        github: "https://github.com/RadheAnkit01"
    },
    {
        title: "Wallpaper App",
        description: "A mobile application for searching and setting device wallpapers using the Pexels API.",
        technologies: ["Flutter", "Dart", "API"],
        github: "https://github.com/RadheAnkit01"
    },
    {
        title: "Developer Team Showcase",
        description: "A clean and responsive group portfolio website built with HTML, CSS, and Vanilla JavaScript.",
        technologies: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/salaihhasan"
    }
];

// Load team members dynamically
const teamContainer = document.getElementById("team-container");
members.forEach(function(member) {
    // Create card div
    const card = document.createElement("div");
    card.className = "team-card";

    // Image
    const img = document.createElement("img");
    img.src = member.image;
    img.alt = member.name;
    img.className = "member-image";
    card.appendChild(img);

    // Name
    const nameEl = document.createElement("h3");
    nameEl.className = "member-name";
    nameEl.textContent = member.name;
    card.appendChild(nameEl);

    // Role
    const roleEl = document.createElement("p");
    roleEl.className = "member-role";
    roleEl.textContent = member.role;
    card.appendChild(roleEl);

    // Bio
    const bioEl = document.createElement("p");
    bioEl.className = "member-bio";
    bioEl.textContent = member.bio;
    card.appendChild(bioEl);

    // Skills badges container
    const skillsDiv = document.createElement("div");
    skillsDiv.className = "member-skills";
    member.skills.forEach(function(skill) {
        const badge = document.createElement("span");
        badge.className = "skill-badge";
        badge.textContent = skill;
        skillsDiv.appendChild(badge);
    });
    card.appendChild(skillsDiv);

    // Links container
    const linksDiv = document.createElement("div");
    linksDiv.className = "member-links";

    const githubLink = document.createElement("a");
    githubLink.href = member.github;
    githubLink.target = "_blank";
    githubLink.textContent = "GitHub";
    linksDiv.appendChild(githubLink);

    const linkedinLink = document.createElement("a");
    linkedinLink.href = member.linkedin;
    linkedinLink.target = "_blank";
    linkedinLink.textContent = "LinkedIn";
    linksDiv.appendChild(linkedinLink);

    card.appendChild(linksDiv);

    // Append to team grid
    teamContainer.appendChild(card);
});

// Load skills dynamically
const skillsContainer = document.getElementById("skills-container");
skills.forEach(function(skill) {
    const skillCard = document.createElement("div");
    skillCard.className = "skill-card";
    skillCard.textContent = skill;
    skillsContainer.appendChild(skillCard);
});

// Load projects dynamically
const projectsContainer = document.getElementById("projects-container");
projects.forEach(function(project) {
    // Create card div
    const card = document.createElement("div");
    card.className = "project-card";

    // Title
    const titleEl = document.createElement("h3");
    titleEl.className = "project-title";
    titleEl.textContent = project.title;
    card.appendChild(titleEl);

    // Description
    const descEl = document.createElement("p");
    descEl.className = "project-desc";
    descEl.textContent = project.description;
    card.appendChild(descEl);

    // Tech stack
    const techDiv = document.createElement("div");
    techDiv.className = "project-tech";
    project.technologies.forEach(function(tech) {
        const techTag = document.createElement("span");
        techTag.className = "tech-tag";
        techTag.textContent = tech;
        techDiv.appendChild(techTag);
    });
    card.appendChild(techDiv);

    // Link
    const linkEl = document.createElement("a");
    linkEl.href = project.github;
    linkEl.target = "_blank";
    linkEl.className = "project-link";
    linkEl.textContent = "View Project";
    card.appendChild(linkEl);

    // Append to project grid
    projectsContainer.appendChild(card);
});

// Hamburger menu toggle
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Close menu when clicking a navbar link
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    });
});

// Active nav link highlight on scroll
const sections = document.querySelectorAll("section");
window.addEventListener("scroll", function() {
    let currentSection = "";
    
    sections.forEach(function(section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        // Check if user has scrolled past top of section minus headers
        if (window.scrollY >= (sectionTop - 150)) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(function(link) {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }
    });
});

// Dark/Light Theme toggle
const themeToggle = document.getElementById("theme-toggle");

// Apply stored theme on load
const currentTheme = localStorage.getItem("theme");
if (currentTheme === "dark") {
    document.body.classList.add("dark-theme");
    themeToggle.textContent = "Light Mode";
} else {
    themeToggle.textContent = "Dark Mode";
}

themeToggle.addEventListener("click", function() {
    document.body.classList.toggle("dark-theme");
    
    // Save selection and update button text
    if (document.body.classList.contains("dark-theme")) {
        localStorage.setItem("theme", "dark");
        themeToggle.textContent = "Light Mode";
    } else {
        localStorage.setItem("theme", "light");
        themeToggle.textContent = "Dark Mode";
    }
});

// Contact Form Validation
const contactForm = document.getElementById("contact-form");
const nameInput = document.getElementById("form-name");
const emailInput = document.getElementById("form-email");
const messageInput = document.getElementById("form-message");

const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("message-error");
const formSuccess = document.getElementById("form-success");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Stop page refresh
    
    // Clear previous success / errors
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    formSuccess.textContent = "";
    
    let isValid = true;
    
    // Name validation
    if (nameInput.value.trim() === "") {
        nameError.textContent = "Please enter your name.";
        isValid = false;
    }
    
    // Email validation
    const emailValue = emailInput.value.trim();
    if (emailValue === "") {
        emailError.textContent = "Please enter your email.";
        isValid = false;
    } else {
        // Simple regex check for valid email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailValue)) {
            emailError.textContent = "Please enter a valid email address.";
            isValid = false;
        }
    }
    
    // Message validation
    if (messageInput.value.trim() === "") {
        messageError.textContent = "Please enter your message.";
        isValid = false;
    }
    
    // If all inputs are valid, show success message
    if (isValid) {
        formSuccess.textContent = "Thank you! Your message has been sent successfully.";
        contactForm.reset();
    }
});
