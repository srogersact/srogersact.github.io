// This has been modified by setting var i to 1.


var $ = function(id) {
    return document.getElementById(id);
};

var problem = [
    {
  composedSentence: 'Knossos is a city on the island of Crete. Sparta is a city on the Peloponnesus.',
  analyzedSentence: 'Herodotus asked many questions. Herodotus gathered many facts and stories.',
  
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
		alert("Way to go! Now close the window and go on to the next one!!!"); 
			$("sentence_solution_form").submit(); 
		}
};

 window.onload = function() {
	$("sentence_solution_approval").onclick = approveSolution;
    $("sentence_solution").focus();
//    i++;
};
