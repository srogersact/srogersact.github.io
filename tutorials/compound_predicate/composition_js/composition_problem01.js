// COMPOUND PREDICATE

// This has been modified by setting var i to 1.


var $ = function(id) {
    return document.getElementById(id);
};

var problem = [
{
analyzedSentence: 'Blank. Blank.',
composedSentence: 'Blank and blank.',
},

{
analyzedSentence: 'The history of ancient Egyptian civilization began in 3200. The history of ancient Egyptian civilization lasted for thirty centuries.',
composedSentence: 'The history of ancient Egyptian civilization began in 3200 and lasted for thirty centuries.',
},
{
analyzedSentence: 'The Nile River flooded every year. It deposited fertile new topsoil.',
composedSentence: 'The Nile River flooded every year and deposited fertile new topsoil.',
},
{
analyzedSentence: 'The Middle Kingdom was invaded by people called the Hyksos. The Middle Kingdom collapsed.',
composedSentence: 'The Middle Kingdom was invaded by people called the Hyksos and collapsed.',
},
{
analyzedSentence: 'Egyptians were used to sailing on the Nile River. They did not like having to sail on the Mediterranean Sea.',
composedSentence: 'Egyptians were used to sailing on the Nile River and did not like having to sail on the Mediterranean Sea.',
},
{
analyzedSentence: 'A successful pharaoh fought his enemies. A successful pharaoh built impressive monuments. A successful pharaoh sent out expeditions to trade with other countries.',
composedSentence: 'A successful pharaoh fought his enemies, built impressive monuments, and sent out expeditions to trade with other countries.',
},
{
analyzedSentence: 'The pharaoh gave plunder from his wars to the priests. The pharaoh thus earned their support.',
composedSentence: 'The pharaoh gave plunder from his wars to the priests and thus earned their support.',
},
{
analyzedSentence: 'Libyans invaded Egypt. Libyans ruled for almost 200 years.',
composedSentence: 'Libyans invaded Egypt and ruled for almost 200 years.',
},
{
analyzedSentence: 'Egypt was reunited during the New Kingdom. Egypt had powerful rulers during the New Kingdom. However, Egypt eventually grew weak again.',
composedSentence: 'Egypt was reunited and had powerful rulers during the New Kingdom but eventually grew weak again.',
},
{
analyzedSentence: 'Manetho was an Egyptian priest during Ptolemaic Egypt. Manetho wrote a history of Egypt.',
composedSentence: 'Manetho was an Egyptian priest during Ptolemaic Egypt and wrote a history of Egypt.',
},

];

	var i = 1
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
