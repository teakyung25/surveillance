$(function(){
    var stick = $("nav").offset().top
    var windowTOP = $("window").scrollTop();
    var offsetV_T = stick - windowTOP;
    function sticky(){
      if(offsetV_T <= windowTOP){
        $("nav").addClass("sticky");
      } else{
        $("nav").removeClass("sticky");
      }
    }
});
