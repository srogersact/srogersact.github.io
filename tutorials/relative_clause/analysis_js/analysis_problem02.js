// RELATIVE CLAUSE

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
analyzedSentence: 'After the Archaic Period was the Classical Period. In the Classical Period Sparta and Athens were the two most powerful city-states.',
composedSentence: 'After the Archaic Period was the Classical Period, when Sparta and Athens were the two most powerful city-states.',
},
{
analyzedSentence: 'During the Dark Ages they still remembered the basic skills of survival. In the Dark Ages most of the arts of civilization were lost to the Greeks.',
composedSentence: 'During the Dark Ages, when most of the arts of civilization were lost to the Greeks, they still remembered the basic skills of survival.',
},
{
analyzedSentence: 'Thucydides said that the Dorians invaded Greece about eighty years after the fall of Troy. Thucydides wrote a history of the Peloponnesian War.',
composedSentence: 'Thucydides, who wrote a history of the Peloponnesian War, said that the Dorians invaded Greece about eighty years after the fall of Troy.',
},
{
analyzedSentence: 'The Dorians\’ way of life was somewhat different from the way of life of the Ionians. The Ionians settled in Athens and on the coast of Asia Minor.',
composedSentence: 'The Dorians\’ way of life was somewhat different from the way of life of the Ionians, who settled in Athens and on the coast of Asia Minor.',
},
{
analyzedSentence: 'To get rid of excess population, a city-state would send out colonists. The colonists were told to start a colony in a place where they could easily conquer the local men.',
composedSentence: 'To get rid of excess population, a city-state would send out colonists, who were told to start a colony in a place where they could easily conquer the local men.',
},
{
analyzedSentence: 'Wealthy people brought the Oracle expensive gifts. Expensive gifts made it more likely that their question would be answered.',
composedSentence: 'Wealthy people brought the Oracle expensive gifts, which made it more likely that their question would be answered.',
},
{
analyzedSentence: 'The cities of Troy and Mycenae were once thought to be merely fiction. The cities of Troy and Mycenae were excavated by Heinrich Schliemann.',
composedSentence: 'The cities of Troy and Mycenae, which were excavated by Heinrich Schliemann, were once thought to be merely fiction.',
},

];

	var i = 2
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
