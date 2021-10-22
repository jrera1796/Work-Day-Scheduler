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

for(var i = 0; i < momTimeArray.length; i++){

if(moment().isSame(momTimeArray[i], 'hour')){
document.getElementById(timeBlockEl[i]).setAttribute("class", "present col-8")
// console.log("this time is CORRECT")
// console.log(timeBlockEl[i])
}

if(moment().isAfter(momTimeArray[i], 'hour')){
document.getElementById(timeBlockEl[i]).setAttribute("class", "past col-8")
// console.log("this time is CORRECT")
// console.log(timeBlockEl[i])
}

if(moment().isBefore(momTimeArray[i], 'hour')){
document.getElementById(timeBlockEl[i]).setAttribute("class", "future col-8")
// console.log("this time is CORRECT")
// console.log(timeBlockEl[i])
}
};





var loadSavedUserData = function() {
  tasks = JSON.parse(localStorage.getItem("savedUserData"));

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

$('savedUserData').data([1], [1]);
  localStorage.setItem(this);


  var saveUserData = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  
    // loop over object properties
    $.each(tasks, function(list, arr) {
      console.log(list, arr);
      // then loop over sub-array
      arr.forEach(function(task) {
        createTask(task.text, task.date, list);
      });
    });
  };
  
  loadSavedUserData();

  