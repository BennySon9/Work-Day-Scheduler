// saveBtn variable
var saveBtn = $(".saveBtn");

// displays current calendar day
$("#currentDay").text(moment().format("dddd, MMMM Do"));

function timeBlockColor() {
  var hour = moment().hours();

  $(".time-block").each(function () {
    var currHour = parseInt($(this).attr("id"));

    if (currHour > hour) {
      $(this).addClass("future");
    } else if ((currHour = hour)) {
      $(this).addClass("present");
    } else if (currHour < hour) {
      $(this).addClass("past");
    }
  });
}

saveBtn.on("click", function () {
  var time = $(this).siblings(".hour").text();
  var plan = $(this).siblings(".plan").val();

  localStorage.setItem(time, plan);
});

timeBlockColor();
