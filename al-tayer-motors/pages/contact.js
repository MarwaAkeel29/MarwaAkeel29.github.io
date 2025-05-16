// This file contains the JavaScript code for the contact page of Al Tayer Motors website.
document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", (e) => { 
      // Only flip if the click is NOT inside a form/input/textarea/select/button
      const tag = e.target.tagName.toLowerCase();
      // Check if the clicked element is not one of the specified tags
      if (!["input", "select", "textarea", "button", "label"].includes(tag)) {
        card.classList.toggle("flipped");
      }
    });
  });