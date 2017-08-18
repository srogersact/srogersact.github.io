// COMPOUND SUBJECT

// This has been modified by setting var i to 3.


var $ = function(id) {
    return document.getElementById(id);
};

var problem = [
{
analyzedSentence: 'Blank. Blank.',
composedSentence: 'Blank and blank.',
},
{
analyzedSentence: 'Greece conquered Egypt after the Persian dynasties. Rome conquered Egypt after the Persian dynasties.',
composedSentence: 'Greece and Rome conquered Egypt after the Persian dynasties.',
},
{
analyzedSentence: 'Seti I ruled Egypt during Dynasty XIX. Ramses I ruled Egypt during Dynasty XIX. Ramses II ruled Egypt during Dynasty XIX.',
composedSentence: 'Seti I, Ramses I, and Ramses II ruled Egypt during Dynasty XIX.',
},
{
analyzedSentence: 'Seti I was a pharaoh of Dynasty XIX. Ramses I was a pharaoh of Dynasty XIX. Ramses II was a pharaoh of Dynasty XIX.',
composedSentence: 'Seti I, Ramses I, and Ramses II were pharaohs of Dynasty XIX.',
},
{
analyzedSentence: 'Ptolemy I was an important leader in Ptolemaic Egypt. Cleopatra VII was also an important leader in Ptolemaic Egypt.',
composedSentence: 'Ptolemy I and Cleopatra VII were important leaders in Ptolemaic Egypt.',
},
{
analyzedSentence: 'The Bent Pyramid was one of Sneferu\’s tombs. The Red Pyramid was another of Sneferu\’s tombs.',
composedSentence: 'The Bent Pyramid and the Red Pyramid were two of Sneferu\'s tombs.',
},
{
analyzedSentence: 'Thutmosis III built many impressive structures. Ramses II also built many impressive structures.',
composedSentence: 'Thutmosis III and Ramses II each built many impressive structures.',
},
{
analyzedSentence: 'A tomb for his wife is one of the most important monuments built by Ramses the Great. A tomb for his sons is another of the most important monuments built by Ramses the Great.',
composedSentence: 'A tomb for his wife and a tomb for his sons are two of the most important monuments built by Ramses the Great.',
},
{
analyzedSentence: 'A violent temper was one of Alexander\’s personality traits. Stubbornness was another of Alexander\’s personality traits.',
composedSentence: 'A violent temper and stubbornness were two of Alexander\'s personality traits.',
},
{
analyzedSentence: 'The beginning of the Middle Kingdom was a time when Egypt was reunited. The beginning of the New Kingdom was also a time when Egypt was reunited.',
composedSentence: 'The beginning of the Middle Kingdom and the beginning of the New Kingdom were times when Egypt was reunited.',
},

];

	var i = 3
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
