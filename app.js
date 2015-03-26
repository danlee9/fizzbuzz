$(document).ready(function() {
	
	//Initial logic
	// var num = prompt("enter a number");
	// var result;
	// if (num % 3 === 0 && num % 5 === 0) {
	// 	result = "fizzbuzz";
	// } else if (num % 3 === 0) {
	// 	result = "fizz";
	// } else if (num % 5 === 0) {
	// 	result = "buzz";
	// } else {
	// 	result = num;
	// }
	// $('body').append(result);

	var result;
	for (var i=1; i<101; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			result = "fizzbuzz";
		} else if (i % 3 === 0) {
			result = "fizz";
		} else if (i % 5 === 0) {
			result = "buzz";
		} else {
			result = i;
		}
		$('body').append("<p>" + result + "</p>");
	}

})