$(document).ready(function() {
  // Getting references to our form and input
  var signUpForm = $("form.carSignup");
  var yearInput = $("input#year-input");
  var typeInput = $("input#type-input");
  var colorInput = $("select#color");
  var seatsInput = $("input#seats-input");
  var emissions;
  var userEmissions;
  var debugEmissions;

  // $.get("/getUserEmissions", function(data){
  //   console.log(data);
  //   userEmissions = data.emissions;
  // });
  //
  // $.get("/getEmissions", function(data){
  //   //sends SMS
  //   debugger
  //   console.log(data);
  //   debugEmissions = data[0].emissions;
  //
  //   //userEmissions += parseInt(data.emissions);
  //   //emissions = userEmissions.toString();
  //
  //   // emissionsReport = {
  //   //   emissions: emissions
  //   // };
  //
  //
  //
  //   // pushEmiss(emissionsReport);
  //
  //
  // });
  //
  // function pushEmiss(data){
  //   $.ajax({
  //     method: "PUT",
  //     url: "/pushEmissions",
  //     data: data
  //   }).done(function(data){
  //
  //   });
  // }
  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", function(event) {
    event.preventDefault();


    // //incriment posts
    // $.ajax({
    //   method: "PUT",
    //   url: "/incrimentPost"
    // }).done(function(data){
    //
    // });

    var userData = {
      carYear: yearInput.val().trim(),
      carModel: typeInput.val().trim(),
      carColor: colorInput.val().trim(),
      carSeats: seatsInput.val().trim()
    };

    if (!userData.carYear || !userData.carModel || !userData.carColor || !userData.carSeats) {
      return;
    }

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
