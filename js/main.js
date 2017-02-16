
//1

$(".switch").on('click',function() {

  $(".switch button").toggleClass("on off") ;

  if ($(".switch button").attr('class') === "off") {
    $("body").toggleClass('light dark') &&
    $(".status").text("Hey, who turned off the lights?")
  } else {
    $("body").toggleClass('dark light')
    &&   $(".status").text("It's so bright in here!")
  }


});
