// Function to handle smooth scrolling to anchor links
function smoothScroll() {
  const navLinks = document.querySelectorAll('.nav-links a');

  navLinks.forEach(link => {
      link.addEventListener('click', function (e) {
          e.preventDefault();

          const targetId = this.getAttribute('href').substring(1);
          const targetElement = document.getElementById(targetId);

          if (targetElement) {
              window.scrollTo({
                  top: targetElement.offsetTop - 50, // Adjust for header height if needed
                  behavior: 'smooth'
              });
          }
      });
  });
}

// Function to handle form submission (basic example)
function handleFormSubmission() {
  const contactForm = document.querySelector('.contact-section');
  const sendMessageButton = document.querySelector('.send-message');

  if (contactForm && sendMessageButton) {
      sendMessageButton.addEventListener('click', function (e) {
          e.preventDefault();

          const name = document.getElementById('name').value;
          const email = document.getElementById('email').value;
          const subject = document.getElementById('subject').value;
          const message = document.getElementById('message').value;

          // Basic validation (you can expand this)
          if (!name || !email || !subject || !message) {
              alert('Please fill in all fields.');
              return;
          }

          // Here, you would typically send the form data to a server
          // using fetch or XMLHttpRequest.
          // For this example, we'll just log it to the console.
          console.log('Form Data:');
          console.log('Name:', name);
          console.log('Email:', email);
          console.log('Subject:', subject);
          console.log('Message:', message);

          alert('Message sent! (This is a simulation)');

          // Reset the form (optional)
          contactForm.reset();
      });
  }
}

// Function to handle the "View All Projects on GitHub" button
function handleGitHubButtonClick() {
  const githubButton = document.querySelector('.github-button');

  if (githubButton) {
      githubButton.addEventListener('click', function () {
          // Replace with your actual GitHub profile or projects URL
          window.open('https://github.com/kanishkdeshaboina', '_blank');
      });
  }
}

// Function to handle schedule meeting and send direct email buttons
function handleContactButtons() {
  const scheduleMeetingButton = document.querySelector('.schedule-meeting');
  const sendDirectEmailButton = document.querySelector('.send-direct-email');

  if (scheduleMeetingButton) {
      scheduleMeetingButton.addEventListener('click', function () {
          // Replace with your scheduling link (e.g., Calendly, etc.)
          window.open('https://calendly.com/kanishkdeshaboina', '_blank');
      });
  }

  if (sendDirectEmailButton) {
      sendDirectEmailButton.addEventListener('click', function () {
          // Replace with your email address
          window.location.href = 'mailto:kanishkdeshaboina@gmail.com';
      });
  }
}

// Function to handle "Read More/Read Less" functionality
function handleReadMore() {
  const readMoreBtn = document.getElementById('readMoreBtn');
  const moreText = document.getElementById('moreText');
  const aboutDescription = document.querySelector('.about-description');

  if (readMoreBtn && moreText && aboutDescription) {
      readMoreBtn.addEventListener('click', () => {
          if (aboutDescription.classList.contains('expanded')) {
              aboutDescription.classList.remove('expanded');
              readMoreBtn.textContent = 'Read More';
          } else {
              aboutDescription.classList.add('expanded');
              readMoreBtn.textContent = 'Read Less';
          }
      });
  }
}

// Initialize the scripts
document.addEventListener('DOMContentLoaded', function () {
  smoothScroll();
  handleFormSubmission();
  handleGitHubButtonClick();
  handleContactButtons();
  handleReadMore(); // Initialize Read More functionality
});