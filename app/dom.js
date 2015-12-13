//Message for the User
console.log("Message for the User: You can uncomment the 'OutPut.innerHTML' lines in math.js to see in the dom. But they have to be commented to pass the jest test. Sorry for the inconvenience");
//test button in the dom
var testButton = document.getElementById("test-button");

//click function for the button	
testButton.addEventListener("click", function(){
	//output variable for the dom
	var OutPut = document.getElementById("output");	
	//clearing the dom.
	OutPut.innerHTML = "";
	//value of text input in the dom.
	var input = document.getElementById("input").value;
	//calling the functions to check logic in the input
	verifyAlphaNumeric(input);
	checkWordCount(input);
	duplicateCheck(input);
	
});



