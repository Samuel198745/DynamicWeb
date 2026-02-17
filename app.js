// Fetch and render profile data
function loadProfile() {
    fetch('profile.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            renderProfile(data);
        })
        .catch(error => {
            console.error('Error loading profile:', error);
            displayError('Chyba při načítání profilu. Zkuste obnovit stránku.');
        });
}

// Render the profile data in the HTML
function renderProfile(data) {
    // Render name
    const nameElement = document.querySelector('#name');
    if (nameElement) {
        nameElement.textContent = data.name || 'Jméno není dostupné';
    }

    // Render skills
    const skillsElement = document.querySelector('#skills');
    if (skillsElement && data.skills) {
        skillsElement.innerHTML = '';
        data.skills.forEach(skill => {
            const li = document.createElement('li');
            li.textContent = skill;
            skillsElement.appendChild(li);
        });
    }

    // Render interests
    const interestsElement = document.querySelector('#interests');
    if (interestsElement && data.interests) {
        interestsElement.innerHTML = '';
        data.interests.forEach(interest => {
            const li = document.createElement('li');
            li.textContent = interest;
            interestsElement.appendChild(li);
        });
    }

    // Render projects
    const projectsElement = document.querySelector('#projects');
    if (projectsElement && data.projects) {
        projectsElement.innerHTML = '';
        data.projects.forEach(project => {
            const li = document.createElement('li');
            li.textContent = project;
            projectsElement.appendChild(li);
        });
    }
}

// Display error message
function displayError(message) {
    const container = document.querySelector('.container');
    if (container) {
        const errorDiv = document.createElement('div');
        errorDiv.style.cssText = 'background-color: #f8d7da; color: #721c24; padding: 15px; border-radius: 5px; margin-bottom: 20px; border: 1px solid #f5c6cb;';
        errorDiv.textContent = message;
        container.insertBefore(errorDiv, container.firstChild);
    }
}

// Load profile when DOM is ready
document.addEventListener('DOMContentLoaded', loadProfile);
