const projects = [
    { title: " Shoes Shop Management System ", description: "A Shoes Shop Management System as an academic project, utilizing database management techniques to customer management, shoes management, bill generation. " },
    { title: "E-Housing Society Management System", description: "The Housing Helping Society is web application that manages society by houses with members details. " },
    { title: "Laxmi Beverages Management System", description: "Laxmi Beverages, a robust e-commerce platform tailored for a local soft drink brand, developed using the MERN stack. " }
];

const projectList = document.querySelector('.project-list');

projects.forEach(project => {
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project');
    projectDiv.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
    `;
    projectList.appendChild(projectDiv);
});
