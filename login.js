// Your JavaScript code for the login page
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get the entered username and password
      var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
      
    // Display the login info on the same page
    var loginInfoDiv = document.getElementById("loginInfo");
    loginInfoDiv.innerHTML = "<p><strong>Login Information:</strong></p>" +"<p>Username: " + username + "</p>" +"<p>Password: " + password + "</p>";
  
    // Clear the form fields
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
});
  