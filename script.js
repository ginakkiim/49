var colors = ['#4fc3f7','#4527a0','#00c853', '#ff7043', '#3d5afe','#b388ff','#ec407a','#f44336','#0097a7', '#1de9b6','#00e676','#c6ff00', '#ffeb3b', '#ffa726', '#ad1457','#607d8b'];

function randoColor(){
	var color = colors[Math.floor(Math.random()*colors.length)];;
	return color;
}

function changeColor(elem) {
	$(elem).css('background-color', randoColor());
    return false;
}  

$(window).keypress(function(e) {
  if (e.keyCode === 0 || e.keyCode === 32) {
    location.reload();
  }
}); 

$(document).ready(function(){
  for(i = 0; i < 49; i++) {
    $('.setting').append('<div onClick="changeColor(this)" class="square" id="div'+ i +'" />');
    $('#div'+i).css("background-color", randoColor());
  }
});