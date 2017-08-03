$(document).ready(function() {
  // Getting references to our form and input
  var postForm = $("form.post");
  var fromInput = $("select#startCampus");
  var toInput = $("select#endCampus");
  var notesInput = $("input#notes-input");
  var timeInput = $("input#time-input");
  var time = $("select#timeInput");



  // When the signup button is clicked, we validate the email and password are not blank
  postForm.on("submit", function(event) {
    event.preventDefault();

    var rideData = {
      from: fromInput.val(),
      to: toInput.val(),
      notes: notesInput.val().trim(),
      time: time.val().trim()
    };

    if (!rideData.from || !rideData.to || !rideData.time) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    postInfo(rideData.from, rideData.to, rideData.notes, rideData.time);
    fromInput.val("");
    toInput.val("");
    notesInput.val("");
    timeInput.val("");
  });

  // Does a post to the signup route. If succesful, we are redirected to the members page
  // Otherwise we log any errors
  function postInfo(from, to, notes, time) {
    $.post("/api/post", {
      from: from,
      to: to,
      notes: notes,
      time: time

    }).then(function(data) {
      console.log(data);
      window.location.href = "/carSignup";
      // If there's an error, handle it by throwing up a boostrap alert
    }).catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
