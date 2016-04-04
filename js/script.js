//BUSINESS LOGIC
function Place(location, season, note) {
  this.locationName = location;
  this.seasonName = season;
  this.noteInfo = note;
}

Place.prototype.fullDescription = function() {
  return this.locationName + " " + this.seasonName + " " + this.noteInfo;
}

//UI LOGIC
$(document).ready(function() {

  $("form#description").submit(function(event) {
    event.preventDefault();

    var inputtedLocation = $("input#location").val();
    var inputtedSeason = $("input#season").val();
    var inputtedNote = $("input#note").val();

    var newPlace = new Place(inputtedLocation, inputtedSeason, inputtedNote);

    $("ul#list").append("<li><span class='places'>" + newPlace.fullDescription() + "</span></li>");

    $(".places").last().click(function() {
      $("#show-place").show();
      $("#show-place h2").text(newPlace.locationName);
      $(".season-name").text(newPlace.seasonName);
      $(".notes").text(newPlace.noteInfo);
    });

    $("input#location").val("");
    $("input#season").val("");
    $("input#note").val("");

  });
});
