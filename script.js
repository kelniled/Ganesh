// Typed.js Animated Headline
document.addEventListener('DOMContentLoaded', () => {
  var typed = new Typed('#animated-text', {
    strings: ["Student", "Voleyball Player", "Developer", "Language Enthusiast","Drone Pilot", "Continuous Learner",],
    typeSpeed: 30,
    backSpeed: 40,
    backDelay: 2000,
    loop: true,
    cursorChar: '',
  });
});


// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close Menu When Link is Clicked
const navLinkItems = document.querySelectorAll('.nav-links li');
navLinkItems.forEach(item => {
  item.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});


navLinkItems.forEach(item => {
  item.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});


  // Get the title element and the projects section
  const droneXTitle = document.getElementById('droneX-title');
  const droneXProjects = document.getElementById('droneX-projects');

  // Add a click event listener to the title
  droneXTitle.addEventListener('click', function() {
    // Toggle the 'hidden' class on the projects section
    droneXProjects.classList.toggle('hidden');
  });


  // Get the modal
  var modal = document.getElementById("image-modal");

  // Get the modal image and caption text
  var modalImg = document.getElementById("modal-image");
  var captionText = document.getElementById("caption");

  // Get all images in the DroneX Projects section
  var images = document.querySelectorAll(".project-image");

  // Loop through all images and add click event listener
  images.forEach(function(image) {
    image.addEventListener("click", function() {
      // Display the modal
      modal.style.display = "block";
      modalImg.src = this.src; // Set modal image to the clicked image
      captionText.innerHTML = this.alt; // Set caption to the image alt text
    });
  });

  // Get the close button
  var closeBtn = document.getElementsByClassName("close")[0];

  // When the user clicks on the close button, close the modal
  closeBtn.onclick = function() {
    modal.style.display = "none";
  };


// Select all accordion headers
const accordionHeaders = document.querySelectorAll('.accordion-header');

// Add click event listener to each header
accordionHeaders.forEach(header => {
  header.addEventListener('click', function() {
    // Toggle the 'accordion-open' class on the parent (skill-item)
    this.parentElement.classList.toggle('accordion-open');

    // Close other accordions if desired (optional)
    accordionHeaders.forEach(otherHeader => {
      if (otherHeader !== this) {
        otherHeader.parentElement.classList.remove('accordion-open');
      }
    });
  });
});
