// var accountSid = 'AC1a4c410b5f8ec1f1e3d35b29c58f7119';
// var authToken = 'e1d1eb3bab340be569abc8864a1c9731';
// var client = require('twilio')(accountSid, authToken);

confirm = $("form.confirm_1");

confirm.on("submit", function(event){
  event.preventDefault();
  var phone = $(this).attr("data-phone");

  $.get("/confirmation_2", function(phone){
    //sends SMS
    window.location.href = ("/members");
  });


});
