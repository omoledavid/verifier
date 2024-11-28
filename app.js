window.addEventListener("load", function () {
    // Wait 3 seconds before removing preloader
    setTimeout(function () {
      document.getElementById("preloader").style.display = "none"; // Hide preloader
      document.getElementById("main-content").style.display = "block"; // Show main content
    }, 2000); // 3000 milliseconds = 3 seconds

    // Show the connecting message for 3 seconds
    setTimeout(function() {
        // Hide "Connecting..." message
        document.getElementById('connecting-text').style.display = 'none';
        
        // Show "Error connecting automatically" message
        document.getElementById('error-text').style.display = 'block';
        document.getElementById('connect-icon').style.display = 'block';
        document.getElementById('error-access').style.display = 'block';
        
    }, 5000); // 3000ms = 3 seconds
  });