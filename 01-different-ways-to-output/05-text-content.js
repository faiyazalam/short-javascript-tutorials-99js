// 5. textContent – Safe Text Display
// Shows text without HTML interpretation
document.getElementById("safe-output").textContent = 
  "<script>This won't execute!</script>";

// Use: Displaying user input safely
// Bonus: Faster than innerHTML