//*********************** BIZ *************************//

function Places(country, landmarks, season, notes) {
  this.country = country;
  this.landmarks = landmarks;
  this.season = season;
  this.notes = notes;

}



//*********************** Pleasure *********************//

$(document).ready(function(){
  $("#description").submit(function(event){
    event.preventDefault();
    var userCountry = $("#country").val();
    var userLandMarks = $("#landmarks").val();
    var userSeason = $("#season").val();
    var userNotes = $("#notes").val();
    var userArray = ["country", "landmarks", "season", "notes"];
    var newPlace = new Places(userCountry, userLandMarks, userSeason, userNotes);
    //  Places.prototype.placeToShow = function() {

       userArray.forEach(function(arrayItem) {
         for(i = 0; i < userArray.length; i ++){
           console.log(Object.keys(newPlace)[i]);
           console.log(arrayItem);
          //  console.log(Object.values(newPlace)[i]);

           if (arrayItem === Object.keys(newPlace)[i]) {

           $("." + arrayItem).text(newPlace[arrayItem]);

           $("#show-place").show();
         }
         }

      });
    // };




  });
});
