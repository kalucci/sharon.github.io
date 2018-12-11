var black = false;
var color = fasle;

function dropblack(){
var cont1 = document.getElementsByClassName('container')[0];
if(black){
	cont1.style.display = "block";
	black = false;
}
else{
	cont1.style.display = "none";
	black = true;
}
};

function dropcolored(){
var cont1 = document.getElementsByClassName('container')[1];
if(color){
	cont1.style.display = "block";
	color = false;
}
else{
	cont1.style.display = "none";
	color = true;
}
};