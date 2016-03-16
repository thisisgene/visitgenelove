var animeCount = 0
var preload = function(src, callback) {
  var img = new Image();

  $(img).load(callback);
 
  img.src = src;
};
 

 
$("body").addClass("loading-background");
var bImage = 'img/backDark.jpg';
 
preload(bImage, function() {
  $("body").addClass("background-loaded");
  $("body").css('backgroundImage','url('+bImage+')');
  console.log($("body").css('backgroundImage'));

});


unblur = function(){
  $("body").addClass("cleanBody");
}

animateSwitch = function(animeCount){
  // switch (animeCount) {
  //   case 9:
  //     $("body").toggleClass("animInvert");
  //     setTimeout(function() {
        
  //       animateSwitch(10);
        
  //     }, 1200);
  //     break;
  //   case 10:
  //     $("html").toggleClass("animInvert");  
  //     $("body").toggleClass("animInvert");
  //     setTimeout(function() {
        
  //       animateSwitch(9);
        
  //     }, 1200);  
  // }
  setTimeout(function() {
    $("body").toggleClass("animInvertLoop");
    animateSwitch(6);
    
  }, 1200);
  
}

animateme = function(){
  if(animeCount<=5){  
    switch (animeCount) {
      case 0:
        $("#div_title").addClass("animBorder");
        break;
      case 1:
        $(".main_h1").addClass("animFont");
        break;
      case 2:
        $(".song_h2").addClass("animSong");
        break;
      case 3:
        $("#div_title").addClass("borderShadow");
        $(".singleP").addClass("colorize");
        $("body").addClass("animInvert");
        break;
      case 4:

        $(".comingSoonP").addClass("isVisible");
        break;
      case 5:
        animateSwitch(6);
        var player = $("#song_player")[0];
        player.play();
    }
    animeCount ++;
  }

  if (animeCount>5) {
    var player = $("#song_player")[0];
    player.play();
  }
  console.log(animeCount);
}

// showText = function(){
  
//   $("body").addClass("background-loaded");
//   $("h1").addClass("active_h1");
  
// }