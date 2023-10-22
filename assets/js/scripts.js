
document.getElementById("game-btn").addEventListener("click", function() {
      
    event.preventDefault();
    const audio = document.getElementById("clickSound");
    audio.play();
    
    setTimeout(function() {
      window.location.href = "GamePlay.html";
  }, 4000);
});

