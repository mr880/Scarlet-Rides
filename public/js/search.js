$(document).ready(function() {
  // Getting references to our form and input
  var pickRide = $("form.pickRide");
  var chosenId = $("input#chosen");

console.log(chosenId);
  pickRide.on("submit", function(event) {
    console.log(chosenId);
    event.preventDefault();
    var makeTrue = {
      chosen: true,
      Postid: chosenId
    };
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
