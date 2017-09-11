var gallons = parseInt(prompt("How many gallons?"));
var converttoLiters = function(gallons){
	return gallons * 3.78;
}

alert(converttoLiters(gallons));
