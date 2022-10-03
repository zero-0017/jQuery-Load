var start = 1;
var goal = 100;
var speed = 25;

setInterval(function(){
if(start <= goal){
   $('.load_per').html(start + '%');
   start++;
   var start_str = String(start);
   var start_width = start_str + '%';
   $('.progress-bar').css({'width': start_width});
  }
},speed);

setTimeout(function(){
  $('.load_area').fadeOut(800);
},2600);