// 4. innerHTML – Element Content Update
// Modifies HTML inside an element
document.getElementById("header").innerHTML = 
  "<span style='color:red'>New Title</span>";

// Requires: <div id="header">Old Title</div>
// Caution: Potential XSS vulnerability