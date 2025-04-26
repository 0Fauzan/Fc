// Simple form validation done by a beginner

// Wait for the page to load
window.onload = function() {
  // Get the form element
  var form = document.querySelector("form");

  // Add a submit event listener
  form.addEventListener("submit", function(event) {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;

    // Check if name or phone is empty
    if (name === "" || phone === "") {
      alert("Please enter both your name and phone number.");
      event.preventDefault(); // Stop the form from submitting
    }
  });
};
