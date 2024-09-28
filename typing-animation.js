document.addEventListener("DOMContentLoaded", function() {
  const text = "Hey there, welcome to my portfolio"; // Text to type
  let index = 0; // Initial index
  const speed = 100; // Typing speed in milliseconds

  function type() {
    if (index < text.length) { // Check if the end of the text is reached
      document.getElementById("typing-text").innerHTML += text.charAt(index); // Add next character
      index++; // Move to next character
      setTimeout(type, speed); // Call type function again after delay
    } else {
      // Remove cursor after typing is done
      document.getElementById("typing-text").style.borderRight = "none"; // Stop cursor effect
    }
  }

  type(); // Start the typing animation
});
