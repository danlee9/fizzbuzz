$(document).ready(function() {
	
	var result,
		$first = $('#first'),
		$v1 = $('#v1'),
		$second = $('#second'),
		$v2 = $('#v2');
	
	$('#b1').on('click', function() {
		var num = +$v1.val();
		if (num) {
			if (num % 1 === 0) {
				$('#first>p').remove();
				for (var i=1; i<=num; i++) {
					if (i % 3 === 0 && i % 5 === 0) {
						result = "fizzbuzz";
					} else if (i % 3 === 0) {
						result = "fizz";
					} else if (i % 5 === 0) {
						result = "buzz";
					} else {
						result = i;
					}
					$first.append("<p>" + result + "</p>");
					$v1.val('');
				}
			} else {
				alert("Whole numbers only");
			}
		} else {
			alert("Enter a number");
		}
	});

	$('#b2').on('click', function() {
		var num = +$v2.val();
		if (num) {
			if (num % 1 === 0) {
				$('#second>p').remove();
				for (var i=1; i<=num; i++) {
					var msg = '';
					if (i % 3 === 0) {
						msg += 'fizz';
					}
					if (i % 5 === 0) {
						msg += 'buzz';
					}
					result = msg || i;
					$second.append("<p>" + result + "</p>");
					$v2.val('');
				}
			} else {
				alert("Whole numbers only");
			}
		} else {
			alert("Enter a number");
		}
	});

})