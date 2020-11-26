
function displayMessage(){
  let recipie = document.getElementById("rname").value;
  let message = "Thank you for submitting your recipie for " + rname.value +"! I will look over it and hopefully add it to this website!";
  document.getElementById("message").innerHTML = message;
  event.preventDefault()
}
