//back-end logic
var scoreResults=function(selLanguage,selLoop,selElement,selPlace,selStatement) {
  return selLanguage+selLoop+selElement+selPlace+selStatement;
}
//front end logic

$(document).ready(function() {
  $(".clickable").click(function() {
      $(".show").slideUp();
    

//$("button").click(function() {
// $(".btn1").click(function(){
      //  $("h2").fadeOut();
    // });
    //$(".btn2").click(function(){
      //   $("h2").fadeIn();
     });
     $("form#scoreResults").submit(function(event) {

         event.preventDefault();

         var selLanguage=parseInt($("input[name=" + language + "]:checked").val());
         var selLoop=parseInt($("input[name=" + loop + "]:checked").val());
         var selElement=parseInt($("input[name=" + element + "]:checked").val());
         var selPlace=parseInt($("input[name=" + place + "]:checked").val());
         var selStatement=parseInt($("input[name=" + statement +"]:checked").val());



       var finalResult = scoreResults(selLanguage,selLoop,selElement,selPlace,selStatement);

       $("#output").text(finalResult);
         });

      });
