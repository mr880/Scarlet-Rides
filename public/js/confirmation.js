$(document).ready(function() {

  var email = $("input#getEmail");


  $.get("/api/confirmation:id").then(function(data) {
    console.log(data.name);
  });

  


});
