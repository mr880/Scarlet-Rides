$(document).ready(function() {

  var postForm = $("form.post");
  // var fromInput = $("select#startCampus");
  // var toInput = $("select#endCampus");
  var notesInput = $("input#notes-input");
  var timeInput = $("input#time-input");
  var time = $("select#timeInput");
  var fromInput = $("select#startCampus");
  var toInput = $("select#endCampus");
  // var emission = 0;


  // from_to_choice.on("submit", function(event){
  //   event.preventDefault();
  //
  //   refineSearch();
  //
  //
  //
  // });

  postForm.on("submit", function(event) {
    event.preventDefault();



    var from = fromInput.val();
    var to = toInput.val();
    var emission = "0";
    var cook2livi = false;
    var cook2busch = false;
    var cook2college = false;
    var busch2livi = false;
    var busch2cook = false;
    var busch2college = false;
    var college2cook = false;
    var college2livi = false;
    var college2busch = false;
    var livi2cook = false;
    var livi2college = false;
    var livi2busch = false;
    var fromLivi = false;
    var fromCook = false;
    var fromCollege = false;
    var fromBusch = false;
    var toLivi = false;
    var toCook = false;
    var toCollege = false;
    var toBusch = false;


    if(from == "Livingston"){
      if(to == "Cook/Douglass"){
        emission = "0.9";
        fromLivi = true;
        toCook = true;
        toCollege = false;
        toBusch = false;
        fromCook = false;
        fromCollege = false;
        fromBusch = false;
        toLivi = false;
        ////////////////
        cook2livi = false;
        cook2busch = false;
        cook2college = false;

        busch2livi = false;
        busch2cook = false;
        busch2college = false;

        college2cook = false;
        college2livi = false;
        college2busch = false;

        livi2cook = true;
        livi2college = false;
        livi2busch = false;
      }
      else if(to == "College Ave"){
        var emission = "0.9";
        fromLivi = true;
        fromCollege = false;
        fromCook = false;
        fromBusch = false;
        toLivi = false;
        toCollege = true;
        toBusch = false;
        toCook = false;
        ////////////////
        cook2livi = false;
        cook2busch = false;
        cook2college = false;

        busch2livi = false;
        busch2cook = false;
        busch2college = false;

        college2cook = false;
        college2livi = false;
        college2busch = false;

        livi2cook = false;
        livi2college = true;
        livi2busch = false;
      }
      else if(to == "Busch"){
        var emission = "0.83";
        fromLivi = true;
        toBusch = true;
        fromCook = false;
        fromBusch = false;
        fromCollege = false;
        toCook = false;
        toCollege = false;
        toLivi = false;
        ////////////////
        cook2livi = false;
        cook2busch = false;
        cook2college = false;

        busch2livi = false;
        busch2cook = false;
        busch2college = false;

        college2cook = false;
        college2livi = false;
        college2busch = false;

        livi2cook = false;
        livi2college = false;
        livi2busch = true;
      }
    }
    else if(from == "Busch"){
      if(to == "Livingston"){
        var emission = "0.83";
        fromBusch = true;
        toLivi = true;
        fromCook = false;
        fromCollege = false;
        fromLivi = false;
        toBusch = false;
        toCook = false;
        toCollege = false;
        ////////////////
        cook2livi = false;
        cook2busch = false;
        cook2college = false;

        busch2livi = true;
        busch2cook = false;
        busch2college = false;

        college2cook = false;
        college2livi = false;
        college2busch = false;

        livi2cook = false;
        livi2college = false;
        livi2busch = false;
      }
      else if(to == "College Ave"){
        var emission = "0.65";
        fromBusch = true;
        toCollege = true;
        fromCook = false;
        fromCollege = false;
        fromLivi =false;
        toCook = false;
        toBusch = false;
        toLivi = false;
        ////////////////
        cook2livi = false;
        cook2busch = false;
        cook2college = false;

        busch2livi = false;
        busch2cook = false;
        busch2college = true;

        college2cook = false;
        college2livi = false;
        college2busch = false;

        livi2cook = false;
        livi2college = false;
        livi2busch = false;
      }
      else if(to == "Cook/Douglass"){
        var emission = "1.19";
        fromBusch = true;
        toCook = true;
        fromCook = false;
        fromCollege = false;
        fromLivi = false;
        toBusch = false;
        toCollege = false;
        toLivi = false;
        ////////////////
        cook2livi = false;
        cook2busch = false;
        cook2college = false;

        busch2livi = false;
        busch2cook = true;
        busch2college = false;

        college2cook = false;
        college2livi = false;
        college2busch = false;

        livi2cook = false;
        livi2college = false;
        livi2busch = false;
      }
    }
    else if(from == "College Ave"){
      if(to == "Busch"){
        var emission = "0.65";
        fromCollege = true;
        toBusch = true;
        fromBusch = false;
        fromCook = false;
        fromLivi = false;
        toCook = false;
        toCollege = false;
        toLivi = false;
        ////////////////
        cook2livi = false;
        cook2busch = false;
        cook2college = false;

        busch2livi = false;
        busch2cook = false;
        busch2college = false;

        college2cook = false;
        college2livi = false;
        college2busch = true;

        livi2cook = false;
        livi2college = false;
        livi2busch = false;
      }
      else if(to == "Livingston"){
        var emission = "0.9";
        fromCollege = true;
        toLivi = true;
        fromBusch = false;
        fromCook = false;
        fromLivi = false;
        toBusch = false;
        toCollege =false;
        toCook = false;
        ////////////////
        cook2livi = false;
        cook2busch = false;
        cook2college = false;

        busch2livi = false;
        busch2cook = false;
        busch2college = false;

        college2cook = false;
        college2livi = true;
        college2busch = false;

        livi2cook = false;
        livi2college = false;
        livi2busch = false;
      }
      else if(to == "Cook/Douglass"){
        var emission = "0.72";
        fromCollege = true;
        toCook = true;
        fromBusch = false;
        fromCook = false;
        fromLivi = false;
        toCollege = false;
        toBusch = false;
        toLivi = false;
        ////////////////
        cook2livi = false;
        cook2busch = false;
        cook2college = false;

        busch2livi = false;
        busch2cook = false;
        busch2college = false;

        college2cook = true;
        college2livi = false;
        college2busch = false;

        livi2cook = false;
        livi2college = false;
        livi2busch = false;
      }
    }
    else if(from == "Cook/Douglass"){
      if(to == "Busch"){
        var emission = "1.19";
        fromCook = true;
        toBusch = true;
        fromBusch = false;
        fromCollege = false;
        fromLivi = false;
        toCook = false;
        toCollege = false;
        toLivi = false;
        ////////////////
        cook2livi = false;
        cook2busch = true;
        cook2college = false;

        busch2livi = false;
        busch2cook = false;
        busch2college = false;

        college2cook = false;
        college2livi = false;
        college2busch = false;

        livi2cook = false;
        livi2college = false;
        livi2busch = false;
      }
      else if(to == "Livingston"){
        var emission = "0.9";
        fromCook = true;
        toLivi = true;
        fromBusch = false;
        fromCollege = false;
        fromLivi = false;
        toBusch = false;
        toCollege = false;
        toCook = false;
        ////////////////
        cook2livi = true;
        cook2busch = false;
        cook2college = false;

        busch2livi = false;
        busch2cook = false;
        busch2college = false;

        college2cook = false;
        college2livi = false;
        college2busch = false;

        livi2cook = false;
        livi2college = false;
        livi2busch = false;
      }
      else if(to =="College Ave"){
        var emission = "0.72";
        fromCook = true;
        toCollege = true;
        fromBusch = false;
        fromCollege = false;
        fromLivi = false;
        toCook = false;
        toBusch = false;
        toLivi = false;
        ////////////////
        cook2livi = false;
        cook2busch = false;
        cook2college = true;

        busch2livi = false;
        busch2cook = false;
        busch2college = false;

        college2cook = false;
        college2livi = false;
        college2busch = false;

        livi2cook = false;
        livi2college = false;
        livi2busch = false;
      }
    }


    var rideData = {
      from: fromInput.val().trim(),
      to: toInput.val().trim(),
      notes: notesInput.val().trim(),
      time: time.val().trim(),
      emissions: emission,
      fromLivi: fromLivi,
      fromBusch: fromBusch,
      fromCook: fromCook,
      fromCollege: fromCollege,
      toLivi: toLivi,
      toBusch: toBusch,
      toCook: toCook,
      toCollege: toCollege,
      chosen: true,
      cook2livi : cook2livi,
      cook2busch : cook2busch,
      cook2college : cook2college,
      busch2livi : busch2livi,
      busch2cook : busch2cook,
      busch2college : busch2college,
      college2cook : college2cook,
      college2livi : college2livi,
      college2busch : college2busch,
      livi2cook : livi2cook,
      livi2college : livi2college,
      livi2busch : livi2busch

    };

    if (!rideData.from || !rideData.to || !rideData.time) {
      return;
    }


    console.log(emission);

    // If we have an email and password, run the signUpUser function
    postInfo(rideData.from, rideData.to, rideData.notes, rideData.time,
      rideData.emissions, rideData.fromLivi, rideData.fromBusch,
      rideData.fromCook, rideData.fromCollege, rideData.toLivi,
      rideData.toBusch, rideData.toCook, rideData.toCollege,
      rideData.chosen, rideData.cook2livi, rideData.cook2busch,
      rideData.cook2college, rideData.busch2livi, rideData.busch2cook,
      rideData.busch2college, rideData.college2cook, rideData.college2livi, rideData.college2busch,
      rideData.livi2cook, rideData.livi2college, rideData.livi2busch);
    fromInput.val("");
    toInput.val("");
    notesInput.val("");
    timeInput.val("");

  });


  function postInfo(from, to, notes, time, emissions, fromLivi, fromBusch,
    fromCook, fromCollege, toLivi, toBusch, toCook, toCollege, chosen,
    cook2college, cook2livi, cook2busch, busch2livi, busch2cook, busch2college,
    college2cook, college2livi, college2busch, livi2cook, livi2college, livi2busch) {
    $.post("/api/post", {
      from: from,
      to: to,
      notes: notes,
      time: time,
      emissions: emissions,
      fromLivi: fromLivi,
      fromBusch: fromBusch,
      fromCook: fromCook,
      fromCollege: fromCollege,
      toLivi: toLivi,
      toBusch: toBusch,
      toCook: toCook,
      toCollege: toCollege,
      chosen: chosen,
      cook2livi : cook2livi,
      cook2busch : cook2busch,
      cook2college : cook2college,

      busch2livi : busch2livi,
      busch2cook : busch2cook,
      busch2college : busch2college,

      college2cook : college2cook,
      college2livi : college2livi,
      college2busch : college2busch,

      livi2cook : livi2cook,
      livi2college : livi2college,
      livi2busch : livi2busch



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
