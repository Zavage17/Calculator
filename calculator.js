// JavaScript Document

function 

// Change display
function d(val) {
	document.getElementById("d").value = val;
}

//type numbers and operators
function v(val) {
	document.getElementById("d").value += val;
}
// Evaluate the equation
function e( ) {
	try {
		 d(eval(document.getElementById("d").value));
	}
	catch(err) {
		d("BOI RESTART THIS!");
		}
}
function Root(x) {
	math.sqrt(x)	
	var x = displ
}