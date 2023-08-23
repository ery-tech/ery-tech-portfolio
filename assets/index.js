
const topButton = document.getElementById("topBtn");

// 3) function for to the top button to help with page srolling
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    topButton.onclick = function () {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    };
  }

  //show details of projects
  document.querySelectorAll(".truncated").forEach(function(current) {

    current.addEventListener("click", function(e) {
      current.classList.toggle("open");
    }, false);
  
  });