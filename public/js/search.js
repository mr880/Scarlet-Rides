$(document).ready(function() {
  // Getting references to our form and input
  var pickRide = $("form.pickRide");
  var chosenId = $("input#chosen");

  chosenId = chosenId.value;

  pickRide.on("submit", function(event) {

    event.preventDefault();
    var makeTrue = {
      chosen: true,
      Postid: chosenId
    };
    console.log(makeTrue.Postid);
    updateChosen(makeTrue);
  });

  // Does a post to the signup route. If succesful, we are redirected to the members page
  // Otherwise we log any errors
  function updateChosen(makeTrue) {
    $.ajax({
      method: "PUT",
      url: "/search:id",
      data: makeTrue
    }).done(function(data){
      window.location.href = "/search";
    });
  }


  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
