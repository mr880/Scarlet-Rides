// var accountSid = 'AC1a4c410b5f8ec1f1e3d35b29c58f7119';
// var authToken = 'e1d1eb3bab340be569abc8864a1c9731';
// var client = require('twilio')(accountSid, authToken);

confirm = $("form.confirm_1");
var phone = $(this).attr("data-phone");

confirm.on("submit", function(event){
  event.preventDefault();


  $.get("/confirmation_2", function(data){
    //sends SMS

    setTimeout (25);
    $.ajax({
      method: "PUT",
      url: "/confirmation_3",
      data: data
    }).done(function(data){
        
        window.location.href = ("/members");
    });
  });

});
