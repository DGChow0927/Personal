// ------------------------------------------   Shadow-Mouse-Effect
window.requestAnimFrame = (function(){
  return  function( callback ){
    window.setTimeout(callback, 1000);
    };
})();

$(document).ready(function(){
var $shadow = $('#shadow');
var shadowLimit = 50;
var moveEvent = ('ontouchstart' in document.documentElement) ? "touchmove" : "mousemove";

(function animloop(){
requestAnimFrame(animloop);
  
$(window).bind(moveEvent, function(ev){
  var $this = $(this);
  var w      = $this.width();
  var h      = $this.height();
  var center = { x: w/2, y: h/2 };

  var evX = (moveEvent == 'touchmove') ? ev.originalEvent.touches[0].clientX : ev.clientX;
  var evY = (moveEvent == 'touchmove') ? ev.originalEvent.touches[0].clientY : ev.clientY;
  
  var shadowX = (center.x - evX) / 10;
  var shadowY = (center.y - evY) / 10;
  
  shadowX = (shadowX > shadowLimit) ? shadowLimit : shadowX;
  shadowX = (shadowX < shadowLimit*-1) ? shadowLimit*-1 : shadowX;
  shadowY = (shadowY > shadowLimit) ? shadowLimit : shadowY;
  shadowY = (shadowY < shadowLimit*-1) ? shadowLimit*-1 : shadowY;
  
  $shadow.css({ textShadow: Math.ceil(shadowX) + 'px '+ Math.ceil(shadowY) +'px '+ (Math.abs(shadowX*shadowY)+90)/10 +'px rgba(20, 43, 78, 0.25)' });
  });
})();
}); 

// ------------------------------------------   Hover-Effect

$(document).ready(function() {
  $('.black').addGlow({ textColor: '#000', haloColor: '#000', radius: 100 });
  $('.grey').addGlow({ textColor: '#444', haloColor: '#000', radius: 100 });
  $('.blue').addGlow({ textColor: '#142b91', haloColor: '#7893bd', radius: 100 });
  $('*').bind('glow:started', console.info);
  $('*').bind('glow:canceled', console.info);
});