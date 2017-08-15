// This has been modified by setting var i to 1.


var $ = function(id) {
    return document.getElementById(id);
};

var problem = [
    {
  analyzedSentence: 'Knossos is a city on the island of Crete. Sparta is a city on the Peloponnesus.',
  composedSentence: 'Knossos is a city on the island of Crete, and Sparta is a city on the Peloponnesus.',
    },
 
];

	var i = 0
   document.write(problem[i].analyzedSentence);

var approveSolution = function() {
	var sentenceSolution = $("sentence_solution").value;
   var isValid = true;
	
	if (sentenceSolution === "") { 
		alert("Please give it a try.");
		isValid = false;
	} else

	if (sentenceSolution !== problem[i].composedSentence) { 
		alert("Oops! Please try again!");
		isValid = false;
		} if (isValid) { 
		alert("Way to go! Now close this window and keep learning!!!"); 
			$("sentence_solution_form").submit(); 
		}
};

 window.onload = function() {
	$("sentence_solution_approval").onclick = approveSolution;
    $("sentence_solution").focus();
//    i++;
};
