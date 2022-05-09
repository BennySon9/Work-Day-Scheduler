// saveBtn variable
var saveBtn = $(".saveBtn");

// displays current calendar day
$("#currentDay").text(moment().format("dddd, MMMM Do"));

function timeBlockColor() {
  var hour = moment().hours();

  $(".time-block").each(function () {
    var currHour = parseInt($(this).attr("id"));
    // console.log(this); each time-block

    if (currHour > hour) {
      $(this).addClass("future");
    } else if ((currHour = hour)) {
      $(this).addClass("present");
    } else if (currHour < hour) {
      $(this).addClass("past");
    }
  });
}

// clicking the button will save to local for that time block
saveBtn.on("click", function () {
  // console.log(this); save button
  var time = $(this).siblings(".hour").text();
  var plan = $(this).siblings(".plan").val();

  // saves the txt time and plan to local storage
  localStorage.setItem(time, plan);
});

function scheduler() {
  $(".hour").each(function () {
    var currHour = $(this).text();
    var currPlan = localStorage.getItem(currHour);
    // console.log(this);
    // console.log(currHour);

    if (currPlan !== null) {
      $(this).siblings(".plan").val(currPlan);
    }
  });
}

// call functions
timeBlockColor();
scheduler();
