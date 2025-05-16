// This script handles the filter functionality for the gallery items
document.addEventListener("DOMContentLoaded", function () { 
  // Add event listeners to filter buttons
  const buttons = document.querySelectorAll(".filter-btn");
  // Select all filter buttons
  const items = document.querySelectorAll(".gallery-item");

  // Select all gallery items
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Remove active class from all buttons and add to the clicked button
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      // Get the filter type from the clicked button
      const filter = btn.getAttribute("data-filter");

      // Show or hide items based on the filter type
      items.forEach((item) => {

        // If the filter is "all", show all items
        if (filter === "all" || item.classList.contains(filter)) {
          item.style.display = "block";
          item.classList.add("fade-in");
        } 
        
        // If the filter doesn't match, hide the item
        else { 
          item.style.display = "none";
        }
      });
    });
  });
});
