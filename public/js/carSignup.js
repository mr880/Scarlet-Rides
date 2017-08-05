$(document).ready(function() {
  // Getting references to our form and input
  var signUpForm = $("form.carSignup");
  var yearInput = $("input#year-input");
  var typeInput = $("input#type-input");
  var colorInput = $("select#color");
  var seatsInput = $("input#seats-input");


  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      carYear: yearInput.val().trim(),
      carModel: typeInput.val().trim(),
      carColor: colorInput.val().trim(),
      carSeats: seatsInput.val().trim()
    };

    if (!userData.carYear || !userData.carModel || !userData.carColor || !userData.carSeats) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    updateInfo(userData);
    yearInput.val("");
    typeInput.val("");
    colorInput.val("");
    seatsInput.val("");
    console.log("YES");
    updateCarSeats(userData);
  });


  function updateInfo(carInfo) {
    $.ajax({
      method: "PUT",
      url: "/signup/:id",
      data: carInfo
    }).done(function(data){

    });
  }

  function updateCarSeats(carInfo){
    $.ajax({
      method: "PUT",
      url: "/signup/",
      data: carInfo
    }).done(function(data){
      window.location.href = "/search";
    });
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
