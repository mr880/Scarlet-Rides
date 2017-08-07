$(document).ready(function() {



  $.get("/api/user_data").then(function(data) {
    $(".member-name").text(data.first);
    //reset rId
    $.ajax({
      method: "PUT",
      url: "/confirmation_3",
      data: data
    }).done(function(data){

    });
  });


});
