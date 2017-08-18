// PAST PARTICIPLE

// This has been modified by setting var i to 7.


var $ = function(id) {
    return document.getElementById(id);
};

var problem = [
{
analyzedSentence: 'Blank. Blank.',
composedSentence: 'Blank and blank.',
},
{
analyzedSentence: 'The Olympian gods were worshiped by all Greeks. The Olympian gods lived on Mt. Olympus.',
composedSentence: 'Worshiped by all Greeks, the Olympian gods lived on Mt. Olympus.',
},
{
analyzedSentence: 'A building fund was taken from the general fund. The building fund would pay for the workers and materials.',
composedSentence: 'Taken from the general fund, a building fund would pay for the workers and materials.',
},
{
analyzedSentence: 'The construction of the temple was supervised by the architect. The construction of the temple lasted for years.',
composedSentence: 'Supervised by the architect, the construction of the temple lasted for years.',
},
{
analyzedSentence: 'The simple Doric style of temple was preferred in mainland Greece. The simple Doric style of temple was developed a few decades before the more elaborate Ionic style.',
composedSentence: 'Preferred in mainland Greece, the simple Doric style of temple was developed a few decades before the more elaborate Ionic style.',
},
{
analyzedSentence: 'Construction cranes are often used by modern builders. Construction cranes are essential for lifting steel beams to great heights.',
composedSentence: 'Often used by modern builders, construction cranes are essential for lifting steel beams to great heights.',
},
{
analyzedSentence: 'The Greek style of temple was developed during the Classical period. The Greek style of temple has been an inspiration to architects ever since.',
composedSentence: 'Developed during the Classical period, the Greek style of temple has been an inspiration to architects ever since.',
},

];

	var i = 7
   document.write(problem[i].composedSentence);

var approveSolution = function() {
	var sentenceSolution = $("sentence_solution").value;
   var isValid = true;
	
	if (sentenceSolution === "") { 
		alert("Please give it a try.");
		isValid = false;
	} else

	if (sentenceSolution !== problem[i].analyzedSentence) { 
		alert("Oops! Please try again!");
		isValid = false;
		} if (isValid) { 
		alert("Way to go! Now you have sentences that are easier to understand!!"); 
			$("sentence_solution_form").submit(); 
		}
};

 window.onload = function() {
	$("sentence_solution_approval").onclick = approveSolution;
    $("sentence_solution").focus();
//    i++;
};
