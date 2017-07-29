$(document).ready(function() {
  // Getting references to our form and input
  var signUpForm = $("form.signup");
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");
  var ruidInput = $("input#ruid-input");
  var nameInput = $("input#name-input");
  var ageInput = $("input#age-input");
  var genderInput = $("input#gender-input");

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", function(event) {

    event.preventDefault();
    var userData = {
      name: nameInput.val().trim(),
      age: ageInput.val().trim(),
      gender: genderInput.val().trim(),
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
      ruid: ruidInput.val().trim()
    };

    if (!userData.email || !userData.password || !userData.ruid || !userData.name || !userData.age || !userData.gender) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData.name, userData.age, userData.gender, userData.email, userData.password, userData.ruid);
    emailInput.val("");
    passwordInput.val("");
    ruidInput.val("");
    nameInput.val("");
    ageInput.val("");
  });

  // Does a post to the signup route. If succesful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(name, age, gender, email, password, ruid) {
    $.post("/api/signup", {
      name: name,
      age: age,
      gender: gender,
      email: email,
      password: password,
      ruid: ruid
    }).then(function(data) {
      window.location.replace(data);
      // If there's an error, handle it by throwing up a boostrap alert
    }).catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
