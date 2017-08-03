$(document).ready(function() {
  // Getting references to our form and input
  var pickRide = $("form.pickRide");
  var cancelRide = $("form.cancel-form");
  var confirmRide = $("form.confirm-form");
  var chosenId = $("input#chosen");
  var cancelId = $("input#cancelbtn");
  var seatChosen = $("select#seatInput");


  pickRide.on("submit", function(event) {
    event.preventDefault();

    var id = $(this).attr("data-id");
    var seats = $(this).attr("data-seats");

    seatChosen = seatChosen.val().trim();
    seats = seats - seatChosen;

    var makeTrue = {
      carSeats: seats,
      chosen: true,
      id: id
    };

    updateSeats(makeTrue);
    // console.log("yes");
    window.location.href = "/getPostInfo/" + makeTrue.id;


  });


  // Does a post to the signup route. If succesful, we are redirected to the members page
  // Otherwise we log any errors
  function updateSeats(toggle) {
    $.ajax({
      method: "PUT",
      url: "/search:id",
      data: toggle
    }).done(function(data){
      // console.log(data)
      //
      //  window.location.href = "/search";
    });
  }


  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
