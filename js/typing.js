var y = 0;
var txti = 'WELCOME TO MY PROFILE';

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