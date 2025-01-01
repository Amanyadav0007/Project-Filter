// Array of projects
const projects = {
    all: [
        { title: "Project 1", category: "web", description: "Web-based project description", img: "https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg" },
        { title: "Project 2", category: "android", description: "Android-based project description", img: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" },
        { title: "Project 3", category: "web", description: "Web-based project description", img: "https://img.freepik.com/photos-premium/gros-plan-oeil-lezard_634423-4199.jpg" },
        { title: "Project 4", category: "android", description: "Android-based project description", img: "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp" },
        { title: "Project 5", category: "android", description: "Android-based project description", img: "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg" },
        { title: "Project 6", category: "android", description: "Android-based project description", img: "https://imgv3.fotor.com/images/slider-image/A-clear-close-up-photo-of-a-woman.jpg" },
        { title: "Project 7", category: "android", description: "Android-based project description", img: "https://img.freepik.com/free-photo/close-up-chameleon-nature_23-2151724828.jpg" },
        { title: "Project 8", category: "android", description: "Android-based project description", img: "https://i0.wp.com/picjumbo.com/wp-content/uploads/silhouette-of-young-blonde-with-short-hair-on-orange-background-free-image.jpeg?h=800&quality=80" }
    ],
    web: [
        { title: "Project 1", category: "web", description: "Web-based project description", img: "https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg" },
        { title: "Project 2", category: "web", description: "Web-based project description", img: "https://img.freepik.com/photos-premium/gros-plan-oeil-lezard_634423-4199.jpg" }
    ],
    android: [
        { title: "Project 1", category: "android", description: "Android-based project description", img: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" },
        { title: "Project 2", category: "android", description: "Android-based project description", img: "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp" },
        { title: "Project 3", category: "android", description: "Android-based project description", img: "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg" },
        { title: "Project 4", category: "android", description: "Android-based project description", img: "https://imgv3.fotor.com/images/slider-image/A-clear-close-up-photo-of-a-woman.jpg" },
        { title: "Project 5", category: "android", description: "Android-based project description", img: "https://img.freepik.com/free-photo/close-up-chameleon-nature_23-2151724828.jpg" },
        { title: "Project 6", category: "android", description: "Android-based project description", img: "https://i0.wp.com/picjumbo.com/wp-content/uploads/silhouette-of-young-blonde-with-short-hair-on-orange-background-free-image.jpeg?h=800&quality=80" }
    ]
};

// Function to display projects based on the category
function showProjects(category) {
    const projectsContainer = document.getElementById('projects');
    projectsContainer.innerHTML = ''; // Clear previous projects

    // Determine the list of projects to show based on the category
    const selectedProjects = category === 'all' ? projects.all : projects[category];

    // Loop through the selected projects and create project cards
    selectedProjects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project'); // project class add here

        // Create the content for each project
        projectDiv.innerHTML = `
            <img src="${project.img}" alt="${project.title}">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        `;

        // Append the project to the projects container
        projectsContainer.appendChild(projectDiv);
    });

    const allProjects = document.querySelectorAll('.project');
    allProjects.forEach(project => {
        project.style.display = 'block'; // Make each project visible
    });
}

// By default show all projects
showProjects('all');
