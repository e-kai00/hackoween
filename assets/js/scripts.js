document.addEventListener("DOMContentLoaded", function() {
    
    // add sound on game button
    document.getElementById("game-btn").addEventListener("click", function(event) {
      event.preventDefault();
      const audio = document.getElementById("clickSound");
      audio.play();
  
      setTimeout(function() {
        window.location.href = "/challenge.html";
      }, 4000);
    });
  });

