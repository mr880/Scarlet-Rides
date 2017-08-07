$(document).ready(function() {
  $.get("/api/user_data").then(function(data) {
    $(".member-first").text(data.first);
    $(".member-last").text(data.last);
    $(".member-age").text(data.age);
    $(".member-gender").text(data.gender);
    $(".member-name").text(data.email);
    $(".member-ruid").text(data.ruid);
    $(".member-carColor").text(data.carColor);
    $(".member-carModel").text(data.carModel);
    $(".member-carYear").text(data.carYear);
    $(".member-posts").text(data.posts);
  });
});
