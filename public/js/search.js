$(document).ready(function() {
  // Getting references to our form and input
  var pickRide = $("form.pickRide");
  var cancelRide = $("form.cancel-form");
  var confirmRide = $("form.confirm-form");
  var chosenId = $("input#chosen");
  var cancelId = $("input#cancelbtn");
  var seatChosen = $("select#seatInput");


  var from_to_choice = $("form#from-to-choice");
  var fromChoice = $("select#fromCampus");
  var toChoice = $("select#toCampus");

  var all2all;
  var all2livi;
  var all2busch;
  var all2cook;
  var all2college;
  var cook2all;
  var cook2livi;
  var cook2busch;
  var cook2college;
  var busch2all;
  var busch2livi;
  var busch2cook;
  var busch2college;
  var college2all;
  var college2cook;
  var college2livi;
  var college2busch;
  var livi2all;
  var livi2cook;
  var livi2college;
  var livi2busch;

  // var emission = 0;
  $.get("/api/user_data").then(function(data) {

    //reset rId
    $.ajax({
      method: "PUT",
      url: "/confirmation_3",
      data: data
    }).done(function(data){

    });
  });

  // from_to_choice.on("submit", function(event){
  //   event.preventDefault();
  //
  //   refineSearch();
  //
  //
  //
  // });

  pickRide.on("submit", function(event) {
    event.preventDefault();

    var UserId = $(this).attr("data-UserId");
    var id = $(this).attr("data-id");
    var seats = $(this).attr("data-seats");
    var confirm = false;

    //depreciate value of seats upon user choice
    seatChosen = seatChosen.val().trim();
    seats = seats - seatChosen;
    //switch boolean value for confirm to remove it from search
    if (seats <= 0){
      confirm = true;
    }

    var rider = {
      rId: UserId
    };

    updateRider(rider);

    var makeTrue = {
      carSeats: seats,
      confirm: confirm,
      id: id
    };

    updateSeats(makeTrue);


    window.location.href = "/getPostInfo/" + makeTrue.id;

  });

  function updateRider(data){
    $.ajax({
      method: "PUT",
      url: "/updateRider/",
      data: data
    }).done(function(data){



    });
  }

  // function refineSearch(){
  //   fromCampus = fromCampus.val().trim();
  //   toCampus = toCampus.val().trim();
  //
  //   if(fromCampus = "All" && toCampus = "All"){
  //
  //   }
  //   else if(fromCampus = "All" && toCampus = "Livingston"){
  //
  //   }
  //   else if(fromCampus = "All" && toCampus = "Busch"){
  //
  //   }
  //   else if(fromCampus = "All" && toCampus = "College"){
  //
  //   }
  //   else if(fromCampus = "All" && toCampus = "Cook"){
  //
  //   }
  //   else if(fromCampus = "Livingston" && toCampus = "All"){
  //
  //   }
  //   else if(fromCampus = "Livingston" && toCampus = "Cook"){
  //
  //   }
  //   else if(fromCampus = "Livingston" && toCampus = "College"){
  //
  //   }
  //   else if(fromCampus = "Livingston" && toCampus = "Busch"){
  //
  //   }
  //   else if(fromCampus = "Busch" && toCampus = "All"){
  //
  //   }
  //   else if(fromCampus = "Busch" && toCampus = "Cook"){
  //
  //   }
  //   else if(fromCampus = "Busch" && toCampus = "Livingston"){
  //
  //   }
  //   else if(fromCampus = "Busch" && toCampus = "College"){
  //
  //   }
  //   else if(fromCampus = "Cook" && toCampus = "All"){
  //
  //   }
  //   else if(fromCampus = "Cook" && toCampus = "livi"){
  //
  //   }
  //   else if(fromCampus = "Cook" && toCampus = "College"){
  //
  //   }
  //   else if(fromCampus = "Cook" && toCampus = "Busch"){
  //
  //   }
  //   else if(fromCampus = "College" && toCampus = "All"){
  //
  //   }
  //   else if(fromCampus = "College" && toCampus = "Cook"){
  //
  //   }
  //   else if(fromCampus = "College" && toCampus = "Livingston"){
  //
  //   }
  // }



  function updateSeats(toggle) {
    $.ajax({
      method: "PUT",
      url: "/search:id",
      data: toggle
    }).done(function(data){
      // console.log(data)
      setTimeout (25);
      //  window.location.href = "/search";
    });
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }

});
