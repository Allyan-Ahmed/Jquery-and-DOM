$(document).ready(function() {
    var isVisible = false; // Flag to track heading visibility
    $(".slide-btn").click(function() {
      if (isVisible) {
        $(".slide-heading").slideUp(); // Slide the heading up
        $(this).text("Slide Down Heading"); // Change button text
      } else {
        $(".slide-heading").slideDown(); // Slide the heading down
        $(this).text("Slide Up Heading"); // Change button text
      }
      isVisible = !isVisible;
    });
  });


//   var isVisible = false; 
//   var headingElement = document.querySelector(".slide-heading"); // Get reference to the heading
//   var buttonElement = document.querySelector(".slide-btn"); // Get reference to the button

//   buttonElement.addEventListener("click", function() {
//     if (isVisible) {
//       headingElement.style.display = "none"; // Slide the heading up
//       buttonElement.textContent = "Slide Down Heading"; // Change button text
//     } else {
//       headingElement.style.display = "block"; // Slide the heading down
//       buttonElement.textContent = "Slide Up Heading"; // Change button text
//     }
//     isVisible = !isVisible; // Toggle the flag
//   });



// $(document).ready(function() {
//     $(".btn").click(function() {
//       var userInput = $(".list-text").val(); //get the value
//       var newBox = $("<div class='box'>" + userInput + "</div>"); //// Create a new box
//       $(".boxes").append(newBox); //append the new box
//       $(".list-text").val(""); //clear the input
//     });
//   });

document.addEventListener("DOMContentLoaded", function() {
    var button = document.querySelector(".btn"); // Get the button element
    button.addEventListener("click", function() {
      var userInput = document.querySelector(".list-text").value; // Get the value entered by the user
      var newBox = document.createElement("div"); // Create a new box
      newBox.classList.add("box"); // Add the class
      newBox.textContent = userInput;
      var boxesContainer = document.querySelector(".boxes"); // Append the new box
      boxesContainer.appendChild(newBox);
      document.querySelector(".list-text").value = ""; // Clear the input box
    });
  });
  