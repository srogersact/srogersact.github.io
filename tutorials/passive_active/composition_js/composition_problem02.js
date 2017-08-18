// PASSIVE ACTIVE

// This has been modified by setting var i to 2.


var $ = function(id) {
    return document.getElementById(id);
};

var problem = [
{
analyzedSentence: 'Blank. Blank.',
composedSentence: 'Blank and blank.',
},
{
analyzedSentence: 'Pericles rebuilt the Acropolis.',
composedSentence: 'The Acropolis was rebuilt by Pericles.',
},
{
analyzedSentence: 'The assembly set up a building fund.',
composedSentence: 'A building fund was set up by the assembly.',
},
{
analyzedSentence: 'The architect laid out the site for the temple.',
composedSentence: 'The site for the temple was laid out by the architect.',
},
{
analyzedSentence: 'They made the foundation with polygonal stones.',
composedSentence: 'The foundation was made with polygonal stones.',
},
{
analyzedSentence: 'They used the highest level of the platform as the temple floor.',
composedSentence: 'The highest level of the platform was used as the temple floor.',
},
{
analyzedSentence: 'They developed the Corinthian style much later than the other two styles.',
composedSentence: 'The Corinthian style was developed much later than the other two styles.',
},
{
analyzedSentence: 'Glass replaces stone in many modern buildings.',
composedSentence: 'Stone is replaced by glass in many modern buildings.',
},

];

	var i = 2
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
