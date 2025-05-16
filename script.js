// Array of car brand names to display
const brands = ["Ford", "Ferrari", "Land Rover", "Maserati", "Jaguar", "Lincoln"];

let index = 0; // Keeps track of which brand to show next

// Selects the element where the brand name will appear
const brandName = document.getElementById("brand-name");

// Changes the brand name every 2 seconds
setInterval(() => {
  index = (index + 1) % brands.length; // Loops back to start when reaching the end
  brandName.textContent = brands[index]; // Updates the text with the current brand
}, 2000); // 2000ms = 2 seconds


// js for about page
// Selects all elements that will slide in from left or right
const elements = document.querySelectorAll('.from-left, .from-right');

// Adds 'visible' class when elements scroll into view
function revealOnScroll() {
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible'); // Triggers CSS animation
    }
  });
}

// Runs the reveal check on page load and when scrolling
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Fade-in effect for elements with the class 'fade-section'
const fadeSections = document.querySelectorAll('.fade-section');

// IntersectionObserver triggers when 20% of the element is visible
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible'); // Adds the fade-in class
    }
  });
}, {
  threshold: 0.2
});

// Start observing each fade section
fadeSections.forEach(section => {
  fadeObserver.observe(section);
});

// Selects all number counters
const counters = document.querySelectorAll('.stat-number');

// Sets the observer threshold to trigger when 50% visible
const options = { threshold: 0.5 };

// Function that starts counting up once the counter is visible
const startCounting = (entry) => {
  const el = entry.target.querySelector('.count'); // Finds the element with the number
  const target = +entry.target.getAttribute('data-target'); // Converts target number to number type

  // Updates the number in small steps
  const updateCount = () => {
    const count = +el.innerText;
    const increment = Math.ceil(target / 100); // Speed of counting

    if (count < target) {
      el.innerText = count + increment;
      setTimeout(updateCount, 30); // Keeps calling itself until complete
    } else {
      el.innerText = target; // Ensures it ends exactly at the target
    }
  };

  updateCount(); // Starts the counting process
};

// Observer checks when the counter scrolls into view
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      startCounting(entry); // Begin counting once visible
      observer.unobserve(entry.target); // Stop observing after it's done
    }
  });
}, options);

// Attach the observer to each counter element
counters.forEach(counter => {
  observer.observe(counter);
});
