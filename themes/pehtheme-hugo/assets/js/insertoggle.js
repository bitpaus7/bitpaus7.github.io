// TOGGLE BUTTON
(function () {
  // Get all elements with the "toggle-button" class
  const toggleButtons = document.querySelectorAll(".toggle-button");

  // Function to toggle the state of an element (open/close)
  function toggleElement(targetElement) {
    // Toggle the visibility of the target element
    targetElement.classList.toggle("hidden");
  }

  toggleButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const targetIds = this.getAttribute("data-target").split(" ");
      targetIds.forEach((targetId) => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          toggleElement(targetElement);
        }
      });
    });
  });
})();
