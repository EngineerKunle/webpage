//application JS file contains methods used for the website 
$(function () {

   $(".burger_menu").click(function () {
      
      $(".nav-right").slideToggle('normal', function () {
         $(".nav-right").toggleClass('.active');
      });
   });
   
   var display =  $(".nav-right").css("display");
    if(display = "none")
    {
        $(".nav-right").attr("style", "display:block");
    }

});