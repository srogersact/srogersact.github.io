// PASSIVE ACTIVE

// This has been modified by setting var i to 5.


var $ = function(id) {
    return document.getElementById(id);
};

var problem = [
{
analyzedSentence: 'Blank. Blank.',
composedSentence: 'Blank and blank.',
},
{
analyzedSentence: 'The Greeks worshiped many gods.',
composedSentence: 'Many gods were worshiped by the Greeks.',
},
{
analyzedSentence: 'The members of the city council proposed the idea.',
composedSentence: 'The idea was proposed by the members of the city council.',
},
{
analyzedSentence: 'The architect designed the temple.',
composedSentence: 'The temple was designed by the architect.',
},
{
analyzedSentence: 'The workers made the foundation with polygonal stones.',
composedSentence: 'The foundation was made by the workers with polygonal stones.',
},
{
analyzedSentence: 'They constructed a platform.',
composedSentence: 'A platform was constructed.',
},
{
analyzedSentence: 'They developed a more elaborate style of temple in Ionia.',
composedSentence: 'A more elaborate style of temple was developed in Ionia.',
},
{
analyzedSentence: 'Modern builders use construction cranes.',
composedSentence: 'Construction cranes are used by modern builders.',
},
{
analyzedSentence: 'Its complicated leaf pattern distinguishes the Corinthian style from the other two styles.',
composedSentence: 'The Corinthian style is distinguised from the other two styles by its complicated leaf pattern.',
},

];

	var i = 5
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
