function drawDiagonal(){
	
var canvas=document.getElementById('diagonal');
var context=canvas.getContext('2d');

//begin Pathname
context.beginpath();
context.moveTo(100,100);
context.lineTo(500,300);
context.stroke();
}

function drawDiagonal(){
	
var canvas=document.getElementById('diagonal');
var context=canvas.getContext('2d');

//begin pathname
context.beginPath();
context.moveTo(0,0);
context.lineTo(200,200);
context.lineTo(200,460);
context.lineTo(400,400);
context.stroke();
context.save();
context.restore();



context.beginPath();
context.moveTo(300,290);
context.lineTo(600,590);
context.stroke();
}

window.addEventListener('load',drawDiagonal,false);	
