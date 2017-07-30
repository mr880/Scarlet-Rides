$(document).ready(function() {
  // Getting references to our form and input
  var pickRide = $("form.pickRide");
  var cancelRide = $("form.cancel-form");
  var confirmRide = $("form.confirm-form");
  var chosenId = $("input#chosen");
  var cancelId = $("input#cancelbtn");
  var confirmId = $("input#confirmbtn");

  confirmRide.on("submit", function(event){
    event.preventDefault();
    var confirm = {
      confirm: true,
      id: confirmId.val().trim()
    };
    updateConfirm(confirm);
  });

  cancelRide.on("submit", function(event){
    event.preventDefault();
    var makeFalse = {
      chosen: false,
      id: cancelId.val().trim()
    };
    updateChosen(makeFalse);
  });

  pickRide.on("submit", function(event) {
    event.preventDefault();
    var makeTrue = {
      chosen: true,
      id: chosenId.val().trim()
    };
    // console.log(makeTrue.Postid);
    updateChosen(makeTrue);
  });

  // Does a post to the signup route. If succesful, we are redirected to the members page
  // Otherwise we log any errors
  function updateChosen(toggle) {
    $.ajax({
      method: "PUT",
      url: "/search:id",
      data: toggle
    }).done(function(data){

      window.location.href = "/search";
    });
  }

  function updateConfirm(toggle) {
    $.ajax({
      method: "PUT",
      url: "/search:id",
      data: toggle
    }).done(function(data){

      window.location.href = "/confirmation";
    });
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
