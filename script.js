function validateform() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const password2 = document.getElementById("password").value;
  
    document.getElementById("name-error").innerHTML = "";
    document.getElementById("email-error").innerHTML = "";
    document.getElementById("password-error").innerHTML = "";
    document.getElementById("password2-error").innerHTML = "";
  
    let isValid = true;
  
    if (username == "") {
      document.getElementById("name-error").innerHTML =
        "*Please Enter your Valid Username";
      isValid = false;
    }
  
    if (email == "") {
      document.getElementById("email-error").innerHTML =
        "*Please Enter your Valid Email";
      isValid = false;
    }
  
    if (password == "") {
      document.getElementById("password-error").innerHTML =
        "*Please Enter your Valid Password";
      isValid = false;
    }
  
    if (password !== password2) {
      document.getElementById("password2-error").innerHTML =
        "Password do not match";
      isValid = false;
    }
  
    return isValid;
  }