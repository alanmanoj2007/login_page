function welcome(event) {
    event.preventDefault();
    alert("You are going to submit");
    const username = document.getElementById("user").value;
    const message = "Welcome " + username;
    console.log(message);
    document.getElementById("message").textContent = message;
  }
  