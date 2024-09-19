$('body').css("background-color", "red");

// when button is clicked
// IIFE = immediately invoked f/n expression
$("#btnGetColor").on("click", function () {
  //get the user name
  let masonName = $("#masonName").val();
  // var variableName =  ... let (const)

  $("#greetingArea").text("Hello, " + masonName + "!");
  //give them a personalized greeting

  let randomColor =
    colorNames[Math.floor(Math.random() * colorNames.length)];

  $("#colorArea").text("Your color that correlates with your name is : " + randomColor);
  //next, also tell color
});

let colorNames = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple", "Teal"];