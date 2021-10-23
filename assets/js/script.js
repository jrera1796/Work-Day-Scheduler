var currentDateTime = moment().format("MMMM, DD, YYYY, HH:mm");
var currentHour = moment().hour();
var currentTime = moment().format("H");

// var displayedTime = document.getElementById("currentDay");
// displayedTime.textContent = currentDateTime;
$("#currentDay").text(currentDateTime);

var timeBlockEl = ["T9", "T10", "T11", "T12", "T13", "T14", "T15", "T16", "T17"];

var momTimeArray = [
  moment(09, 'HH'),
  moment(10, 'HH'),
  moment(11, 'HH'),
  moment(12, 'HH'),
  moment(13, 'HH'),
  moment(14, 'HH'),
  moment(15, 'HH'),
  moment(16, 'HH'),
  moment(17, 'HH')
];

var savedUserData = {};

var loadBlockColors = function(){

for(var i = 0; i < momTimeArray.length; i++){

//If data id matches textarea id get 

var textAreaText = document.getElementById(timeBlockEl[i]);
textAreaText.value = localStorage.getItem(timeBlockEl[i]);

if(moment().isSame(momTimeArray[i], 'hour')){
document.getElementById(timeBlockEl[i]).setAttribute("class", "present col-8 t-box")
document.getElementById(timeBlockEl[i]).textContent;

}

if(moment().isAfter(momTimeArray[i], 'hour')){
document.getElementById(timeBlockEl[i]).setAttribute("class", "past col-8 t-box")

}

if(moment().isBefore(momTimeArray[i], 'hour')){
document.getElementById(timeBlockEl[i]).setAttribute("class", "future col-8 t-box")

}
}

$(".saveBtn").on("click", grabText);
};


function grabText(event){
  
  var savedId = $(this).parent().attr("data-id");
  var savedText = $(this).siblings(".t-box").val();
  localStorage.setItem(savedId, savedText);
  console.log(savedText);
};

var loadSavedUserData = function() {
  savedData = JSON.parse(localStorage.getItem("savedUserData"));
// if nothing in localStorage, create a new object to track all task status arrays
  if (!savedUserData) {
    savedUserData = {
      T9: [],
      T10: [],
      T11: [],
      T12: [],
      T13: [],
      T14: [],
      T15: [],
      T16: [],
      T17: []
    };
  }
  //loop over object properties
      $.each(savedUserData, function(list, arr) {
        console.log(list, arr);
        // then loop over sub-array
        arr.forEach(function(userdataobj) {
          grabText(savedId, savedText);
        });
});
};

  loadSavedUserData();
 
  $(document).ready(() => {
    loadBlockColors();
    });
