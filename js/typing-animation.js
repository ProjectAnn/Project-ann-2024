document.addEventListener("DOMContentLoaded", function() {
  const text = "Greetings, traveler. Your quest for inspiration begins here!"; // Text to type
  let index = 0; // Initial index
  const speed = 100; // Typing speed in milliseconds
  const typingTextElement = document.getElementById("text");

  function type() {
    if (index < text.length) { // Check if the end of the text is reached
      typingTextElement.innerHTML += text.charAt(index); // Add next character
      index++; // Move to next character
      setTimeout(type, speed); // Call type function again after delay
    } else {
      // Keep the cursor visible after typing is done
      document.querySelector('.cursor').style.animation = 'blink 0.7s step-end infinite'; // Continue blinking
    }
  }

  type(); // Start the typing animation
});
