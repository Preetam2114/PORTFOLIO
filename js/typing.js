var y = 0;
var txti = 'Don\'t forget to give feedback by clicking feedback tab';

var speed = 50;

function typeWriter() {
  if (y < txti.length) {
    document.getElementById("tytxt").innerHTML += txti.charAt(y);
    y++;
    setTimeout(typeWriter, speed);
  }
  else
  {
  	return icon();
  }
}