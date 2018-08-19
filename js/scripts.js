var scoreResults=function(selLanguage,selLoop,selElement,selPlace,selStatement) {
  return selLanguage+selLoop+selElement+selPlace+selStatement;
}


$(document).ready(function()
$("button").click(function() {
  $(".btn1").click(function(){
         $("p").fadeOut()
     });
     $(".btn2").click(function(){
         $("p").fadeIn();
     });
    $(".clickable").click(function() {
        $("#showing").toggle();
        $("#hidden").toggle();
      });
  $("form#scoreResults").submit(function(event) {
      event.preventDefault();

      var selLanguage=parseInt($("input[name="language"]:checked").val()
      var selLoop=parseInt($("input[name="loop"]:checked").val()
      var selElement=parseInt($("input[name="element"]:checked").val()
      var selPlace=parseInt($("input[name="place"]:checked").val()
      var selStatement=parseInt($("input[name="statement"]:checked").val()

    var result = scoreResults(, loop);

    $("#output").text(score);
      });

       });
     });
