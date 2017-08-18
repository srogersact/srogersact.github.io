// RELATIVE CLAUSE

// This has been modified by setting var i to 10.


var $ = function(id) {
    return document.getElementById(id);
};

var problem = [
{
analyzedSentence: 'Blank. Blank.',
composedSentence: 'Blank and blank.',
},
{
analyzedSentence: '30 B.C.E. is considered the end of the era of ancient Greece. In 30 B.C.E. Cleopatra died.',
composedSentence: '30 B.C.E., when Cleopatra died, is considered the end of the era of ancient Greece.',
},
{
analyzedSentence: 'Towards the end of the Dark Ages a new kind of Greek alphabet was invented. Towards the end of the Dark Ages the Greeks began to meet every four years to compete in the Olympics.',
composedSentence: 'Towards the end of the Dark Ages, when the Greeks began to meet every four years to compete in the Olympics, a new kind of Greek alphabet was invented.',
},
{
analyzedSentence: 'The Dorians brought the idea of using iron instead of bronze for weapons. The Dorians were respected for their military power.',
composedSentence: 'The Dorians, who were respected for their military power, brought the idea of using iron instead of bronze for weapons.',
},
{
analyzedSentence: 'A tyrant sometimes brought large changes to a city-state\’s form of government. A tyrant could be good or bad.',
composedSentence: 'A tyrant, who could be good or bad, sometimes brought large changes to a city-state\’s form of government.',
},
{
analyzedSentence: 'The younger sons of aristocrats often served as leaders of the colonists. The younger sons of aristocrats did not inherit anything from their fathers.',
composedSentence: 'The younger sons of aristocrats, who did not inherit anything from their fathers, often served as leaders of the colonists.',
},
{
analyzedSentence: 'It was important to think carefully about the Oracle\’s answer. The Oracle\'s answer was often hard to understand.',
composedSentence: 'It was important to think carefully about the Oracle\’s answer, which was often hard to understand.',
},

];

	var i = 10
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
