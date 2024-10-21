


// console.log("your-script.js loaded!");

// Function to handle button click
const handleButtonClick = () => {
  alert("Button clicked!");
};

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Get the button element by ID
  const button = document.getElementById("myButton");

  // Check if the button exists before adding the event listener
  if (button) {
    button.addEventListener("click", handleButtonClick);
  }
});
