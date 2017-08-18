// PAST PARTICIPLE

// This has been modified by setting var i to 8.


var $ = function(id) {
    return document.getElementById(id);
};

var problem = [
{
analyzedSentence: 'Blank. Blank.',
composedSentence: 'Blank and blank.',
},
{
analyzedSentence: 'The Acropolis was rebuilt by Pericles in the fifth century. The Acropolis displayed the splendor of the Athenian Empire.',
composedSentence: 'Rebuilt by Pericles in the fifth century, the Acropolis displayed the splendor of the Athenian Empire.',
},
{
analyzedSentence: 'An architect was hired by a building committee. The architect designed the temple and supervised its construction.',
composedSentence: 'Hired by a building committee, an architect designed the temple and supervised its construction.',
},
{
analyzedSentence: 'The foundation was laid on solid bedrock. The foundation was backfilled with soil.',
composedSentence: 'Laid on solid bedrock, the foundation was backfilled with soil.',
},
{
analyzedSentence: 'The Corinthian style of column was developed later than the other two styles. The Corinthian style of column is much more elaborate.',
composedSentence: 'Developed later than the other two styles, the Corinthian style of column is much more elaborate.',
},
{
analyzedSentence: 'The Doric style is distinguished from the Ionian style by its simplicity. The Doric style can be seen in the capitol buildings of many states.',
composedSentence: 'Distinguished from the Ionian style by its simplicity, the Doric style can be seen in the capitol buildings of many states.',
},


];

	var i = 8
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
