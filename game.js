var canvas = document.getElementById('gmae');
var ctx = cavas.getContext("2");

//draw some
ctx.beginPath();
ctx.rect(20,40,60,80);
ctx.fillStyle = '#FF0000';
ctx.fill();
ctx.closePath();