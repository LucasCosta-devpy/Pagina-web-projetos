document.addEventListener('DOMContentLoaded', () => {
    fetch('data/projects.json')
      .then(response => response.json())
      .then(data => {
        const container = document.getElementById('projects-container');
        data.forEach(project => {
          const card = document.createElement('div');
          card.classList.add('card');
          card.innerHTML = `
            <img src="${project.thumbnail}" alt="${project.title}">
            <h2>${project.title}</h2>
            <p>${project.author}</p>
            <a href="${project.projectLink}">Ver mais</a>
          `;
          container.appendChild(card);
        });
      })
      .catch(error => console.error('Erro ao carregar os projetos:', error));
  });
  