var module = module || {};

	function sum(one, two) {
	  return one + two;
	}

	function difference(five, two) {
		return five - two;
	}
	function product(two, five) {
		return two * five;
	}
	function quotient(ten, two) {
		return ten / two;
	}
	function square(five) {
		return five * five;
	}

//****functions hooked to the dom ******////
	//Output div in the dom
	var OutPut = document.getElementById("output");

	//Checking for Alphanumeric Characters
	function verifyAlphaNumeric (hello){
		var input = hello;
    	var iChars = "~`!#$%^&*+=-[]\\\';,/{}|\":<>?";

    	for (var i = 0; i < input.length; i++) {
       		if (iChars.indexOf(input.charAt(i)) != -1) {
           		console.log(input, ":has non-alphanumeric values");
        
           		//OutPut.innerHTML += "<p>" + "'" + input + "'" + " :has non-alphanumeric values" + "</p>";
           		return false;
      			}
   			}
   			console.log(input, ":has alphanumeric values");

   			// OutPut.innerHTML += "<p>" + "'" + input + "'" + " :has alphanumeric values" + "</p>";

    		return true;
		}
	//Checking for less than 100 characters
	function checkWordCount (hello) {
		var input = hello;
		var newInput = input.split(" ");
		if (newInput.length <= 100) {
			console.log(newInput, ":is less than 100 words");

			//OutPut.innerHTML += "<p>" + "'" + newInput + "'" + " :is less than 100 charatcers." + " it has: " + newInput.length + "words." + "</p>";
			return true;
		} else {
			console.log(newInput, ":is not less than 100 words");

			//OutPut.innerHTML += "<p>" + "'" + newInput + "'" + " :is not less than 100 words" + " it has: " + newInput.length + "words." + "</p>";
			return false;
		}
	}
	//Checking for duplicate words
	function duplicateCheck (hello) {
		var input = hello;
		var newInput = input.split(" ");

		for (var i = 0; i < newInput.length; i++) {
    		if (newInput[i + 1] === newInput[i]) {
    			console.log(newInput, ": has duplicate words");

    			// OutPut.innerHTML += "<p>" + "'" + input + "'" + " : has duplicate words" + "</p>";
        	return false;
   			} else {
   				console.log(newInput, ": does not have duplicate words");

   				// OutPut.innerHTML += "<p>" + "'" + input + "'" + " : does not have duplicate words" + "</p>";
   				return true;
   				}
			}
		}



module.exports = { 
	sum: sum,
	difference: difference,
	product: product,
	quotient: quotient,
	square: square,
	verifyAlphaNumeric: verifyAlphaNumeric,
	checkWordCount: checkWordCount,
	duplicateCheck: duplicateCheck
	};