function validation() {
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var inquiry = document.getElementById("reason").value;
  var info = document.getElementById("comment").value;
  var answer = document.getElementById("question").value;
  var days = document.getElementById("days").value;
  var errormessage = document.getElementById("error_message").value;
  var text;

  error_message.style.padding = "10px";

  if(name.length <= 8) {
      text = "Please Enter Valid Name"
      error_message.innerHTML = text;
      return false;
 }
  if(email.indexOf("@") == -1 || email.length < 6) {
     text = "Please Enter Valid Email"
     error_message.innerHTML = text;
     return false;
 }
   if(isNaN(phone) || phone.length != 10){
      text = "Please Enter Valid Phone Number"
      error_message.innerHTML = text;
      return false;
  }
   if(info.length <=5) {
      text = "Please Enter Up To 5 Characters"
      error_message.innerHTML = text;
      return false;
}
  alert("Form Submitted Successfully!")
  return true;
}
