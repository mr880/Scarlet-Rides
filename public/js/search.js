$(document).ready(function() {
  // Getting references to our form and input
  var pickRide = $("form.pickRide");
  var cancelRide = $("form.cancel-form");
  var confirmRide = $("form.confirm-form");
  var chosenId = $("input#chosen");
  var cancelId = $("input#cancelbtn");

  var confirmId = $("input#confirmbtn");
  var conFirst = $("input#conFirst");
  var conLast = $("input#conLast");
  var conFrom = $("input#conFrom");
  var conTo = $("input#conTo");
  var conNotes= $("input#conNotes");
  var conTime = $("input#conTime");

  confirmRide.on("submit", function(event){
    event.preventDefault();
    var confirm = {
      confirm: true,
      id: confirmId.val().trim(),
      first: conFirst.val().trim(),
      last: conLast.val().trim(),
      from: conFrom.val().trim(),
      to: conTo.val().trim(),
      notes: conNotes.val().trim(),
      time: conTime.val().trim()
    }
    updateConfirm(confirm);
    sendData(sentToPage);
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
    updateChosen(makeTrue);
    console.log("yes");
    window.location.href = "/getPostInfo/" + makeTrue.id;


  });


  // Does a post to the signup route. If succesful, we are redirected to the members page
  // Otherwise we log any errors
  function updateChosen(toggle) {
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

  // function updateConfirm(toggle) {
  //   console.log(toggle)
  //
  //   $.ajax({
  //     method: "PUT",
  //     url: "/search/" + toggle.id,
  //     data: toggle
  //   }).done(function(data){
  //     console.log(data)
  //
  //     window.location.href = "/confirmation/";
  //   });
  // }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
