// script.js
/*
// Profile Section Animation
const profileImage = document.querySelector('.profile-image');
const profileInfo = document.querySelector('.profile-info');

profileImage.addEventListener('mouseover', () => {
    profileInfo.style.transform = 'translateY(20px)';
    profileInfo.style.opacity = '1';
});

profileImage.addEventListener('mouseout', () => {
    profileInfo.style.transform = 'translateY(0)';
    profileInfo.style.opacity = '0.5';
});
*/

 const toggleSwitch = document.getElementById('theme-toggle');
 toggleSwitch.addEventListener('change', () => {
 document.body.classList.toggle('dark-mode');
 });

// Skills Section Animation
const skillsList = document.querySelectorAll('.skills-container li');

skillsList.forEach((skill) => {
    skill.addEventListener('mouseover', () => {
        skill.style.transform = 'scale(1.1)';
        skill.style.color = '#333';
    });

    skill.addEventListener('mouseout', () => {
        skill.style.transform = 'scale(1)';
        skill.style.color = '#666';
    });
});
/*
// Experience Section Animation
const experienceList = document.querySelectorAll('.experience-container li');

experienceList.forEach((experience) => {
    experience.addEventListener('mouseover', () => {
        experience.style.transform = 'scale(1.1)';
        experience.style.color = '#333';
    });

    experience.addEventListener('mouseout', () => {
        experience.style.transform = 'scale(1)';
        experience.style.color = '#666';
    });
});
*/
// hobbies Section Animation
const HobbiesList = document.querySelectorAll('.Hobbies-container li');

HobbiesList.forEach((Hobbies) => {
    Hobbies.addEventListener('mouseover', () => {
        Hobbies.style.transform = 'scale(1.1)';
        Hobbies.style.color = '#333';
    });

    Hobbies.addEventListener('mouseout', () => {
        Hobbies.style.transform = 'scale(1)';
        Hobbies.style.color = '#666';
    });
});

/*
// Projects Section Animation
const projectsList = document.querySelectorAll('.projects-container li');

projectsList.forEach((project) => {
    project.addEventListener('mouseover', () => {
        project.style.transform = 'scale(1.1)';
        project.style.color = '#333';
    });

    project.addEventListener('mouseout', () => {
        project.style.transform = 'scale(1)';
        project.style.color = '#666';
    });
});*/
const homeButton = document.querySelector('.home-button');

homeButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
// Contact Form Validation
const contactForm = document.querySelector('.contact-container form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    if (name && email && message) {
        alert('Form submitted successfully!');
    } else {
        alert('Please fill in all fields!');
    }
});


// dark to light mode

const modeToggle = document.querySelector('.mode-toggle');

modeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
});
// Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');

navToggle.addEventListener('click', () => {
    document.querySelector('.nav-container ul').classList.toggle('active');
});


