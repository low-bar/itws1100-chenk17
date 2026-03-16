/* Lab 5 JavaScript File 
   Place variables and functions in this file */

function validate(formObj) {
   // put your validation code here
   // it will be a series of if statements

   var valid = true;
   var focus = 0;
   var message = "";

   if (formObj.firstName.value == "") {
      message += "You must enter a first name\n";
      if (focus == 0) {
         formObj.firstName.focus();
         focus = 1;
         valid = false;
      }
   }
   if (formObj.lastName.value == "") {
      message += "You must enter a last name\n";
      if (focus == 0) {
         formObj.lastName.focus();
         focus = 1;
         valid = false;
      }
   }
   if (formObj.title.value == "") {
      message += "You must enter a title\n";
      if (focus == 0) {
         formObj.title.focus();
         focus = 1;
         valid = false;
      }
   }
   if (formObj.org.value == "") {
      message += "You must enter an organization\n";
      if (focus == 0) {
         formObj.org.focus();
         focus = 1;
         valid = false;
      }
   }
   if (formObj.nickname.value == "") {
      message += "You must enter a nickname or retype your name\n";
      if (focus == 0) {
         formObj.pseudonym.focus();
         focus = 1;
         valid = false;
      }
   }
   if (valid == false) {
      alert(message);
      return false;
   }
   else {
      alert("Thank you for submitting your information!");
      return true;
   }
}

function onFocusComment() {
   var comment = document.getElementById("comments");
   if (comment.value == "Please enter your comments") {
      comment.value = "";
   }
}

function onBlurComment() {
   var comment = document.getElementById("comments");
   if (comment.value == "") {
      comment.value = "Please enter your comments";
   }
}

function checkName() {
   var firstName = document.getElementById("firstName");
   var lastName = document.getElementById("lastName");
   var nickname = document.getElementById("nickname");

   if (firstName.value == "" || lastName.value == "" || nickname.value == "") {
      alert("You have not completed the form yet. Please fill out all fields before checking your name.");

   }
   else {
      alert(firstName.value + " " + lastName.value + " is " + nickname.value);
   }
}

function onLoad() {
   document.getElementById("firstName").focus();
}

