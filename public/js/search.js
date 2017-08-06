$(document).ready(function() {
  // Getting references to our form and input
  var pickRide = $("form.pickRide");
  var cancelRide = $("form.cancel-form");
  var confirmRide = $("form.confirm-form");
  var chosenId = $("input#chosen");
  var cancelId = $("input#cancelbtn");
  var seatChosen = $("select#seatInput");
  // var emission = 0;


  pickRide.on("submit", function(event) {
    event.preventDefault();

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
      rId: id
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
        setTimeout (25);
    });
  }




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
