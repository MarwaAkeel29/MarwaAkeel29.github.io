const brands = ["Ford", "Ferrari", "Land Rover", "Maserati", "Jaguar", "Lincoln"];
let index = 0;
const brandName = document.getElementById("brand-name");
  
setInterval(() => {
index = (index + 1) % brands.length;
brandName.textContent = brands[index];
}, 2000); // every 2 seconds

const elements = document.querySelectorAll('.from-left, .from-right');
  
    function revealOnScroll() {
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add('visible');
        }
      });
    }
  
    window.addEventListener('scroll', revealOnScroll);
    window.addEventListener('load', revealOnScroll);


  const fadeSections = document.querySelectorAll('.fade-section');

  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.2
  });

  fadeSections.forEach(section => {
    fadeObserver.observe(section);
  });


  const counters = document.querySelectorAll('.stat-number');

const options = { threshold: 0.5 };

const startCounting = (entry) => {
  const el = entry.target.querySelector('.count');
  const target = +entry.target.getAttribute('data-target');
  
  const updateCount = () => {
    const count = +el.innerText;
    const increment = Math.ceil(target / 100);

    if (count < target) {
      el.innerText = count + increment;
      setTimeout(updateCount, 30);
    } else {
      el.innerText = target;
    }
  };
  
  updateCount();
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      startCounting(entry);
      observer.unobserve(entry.target);
    }
  });
}, options);

counters.forEach(counter => {
  observer.observe(counter);
});

