$(document).ready(function() {
  // Getting references to our form and input
  var signUpForm = $("form.signup");
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");
  var ruidInput = $("input#ruid-input");
  var firstInput = $("input#first-input");
  var lastInput = $("input#last-input");
  var ageInput = $("input#age-input");
  var genderInput = $("input#gender-input");
  var phoneInput = $("input#phone-input");

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", function(event) {

    event.preventDefault();
    var userData = {
      first: firstInput.val().trim(),
      last: lastInput.val().trim(),
      age: ageInput.val().trim(),
      gender: genderInput.val().trim(),
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
      ruid: ruidInput.val().trim(),
      phone: phoneInput.val().trim()
    };

    if (!userData.email || !userData.password || !userData.ruid || !userData.age || !userData.gender || !userData.first || !userData.last || !userData.phone) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData.first, userData.last, userData.age, userData.gender, userData.email, userData.password, userData.ruid, userData.phone);
    // emailInput.val("");
    // passwordInput.val("");
    // ruidInput.val("");
    // firstInput.val("");
    // lastInput.val("");
    // ageInput.val("");
    // genderInput.val("");
    // phoneInput.val("");
  });

  // Does a post to the signup route. If succesful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(first, last, age, gender, email, password, ruid, phone) {
    $.post("/api/signup", {
      first: first,
      last: last,
      age: age,
      gender: gender,
      email: email,
      password: password,
      ruid: ruid,
      phone: phone
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
