var form = document.getElementById("bookForm");
var msg = document.getElementById("msg");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  var name = document.getElementById("name").value.trim();
  var phone = document.getElementById("phone").value.trim();
  var style = document.getElementById("style").value;

  if (name === "") {
    msg.textContent = "Please enter your name.";
    msg.style.color = "#B91C1C";
    return;
  }

  if (phone.length < 10 || isNaN(phone)) {
    msg.textContent = "Please enter a valid phone number.";
    msg.style.color = "#B91C1C";
    return;
  }

  msg.textContent = "Thank you, " + name + ". Your " + style + " booking request has been received.";
  msg.style.color = "#047857";
  form.reset();
});