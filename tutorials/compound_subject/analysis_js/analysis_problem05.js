// COMPOUND SUBJECT

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
analyzedSentence: 'Queen Hatshepsut ruled Egypt during the 18th Dynasty. Akhenaton ruled Egypt during the 18th Dynasty.',
composedSentence: 'Queen Hatshepsut and Akhenaton ruled Egypt during the 18th Dynasty.',
},
{
analyzedSentence: 'Cambyses defeated the Egyptians. Alexander defeated the Egyptians. Augustus defeated the Egyptians.',
composedSentence: 'Cambyses, Alexander, and Augustus defeated the Egyptians.',
},
{
analyzedSentence: 'Ptolemy I was an important leader in Ptolemaic Egypt. Cleopatra VII was an important leader in Ptolemaic Egypt.',
composedSentence: 'Ptolemy I and Cleopatra VII were important leaders in Ptolemaic Egypt.',
},
{
analyzedSentence: 'Djoser was an important pyramid builder during the Old Kingdom. Snefru was also an important pyramid builder during the Old Kingdom.',
composedSentence: 'Djoser and Snefru were important pyramid builders during the Old Kingdom.',
},
{
analyzedSentence: 'Abydos was one of the places where early Egyptian kings built temples. Heliopolis was another of the places where early Egyptian kings built temples.',
composedSentence: 'Abydos and Heliopolis were two of the places where early Egyptian kings built temples.',
},
{
analyzedSentence: 'The Old Kingdom had several important rulers. The New Kingdom also had several important rulers.',
composedSentence: 'The Old Kingdom and the New Kingdom each had several important rulers.',
},
{
analyzedSentence: 'Narmer was an important and well-known king in ancient Egypt. Khufu was an important and well-known king in ancient Egypt. Ramses the Great was an important and well-known king in ancient Egypt.',
composedSentence: 'Narmer, Khufu, and Ramses the Great were important and well-known kings in ancient Egypt.',
},
{
analyzedSentence: 'The Tigris River is one of the great rivers of the world. The Euphrates River is another of the great rivers of the world.',
composedSentence: 'The Tigris River and the Euphrates River are two of the great rivers of the world.',
},
{
analyzedSentence: 'The Amorite Dynasty was the first major Babylonian Dynasty. The Kassite Dynasty was the second major Babylonian Dynasty. The Chaldean Dynasty was the last major Babylonian Dynasty.',
composedSentence: 'The Amorite Dynasty, the Kassite Dynasty, and the Chaldean Dynasty, in that order, were the three major Babylonian Dynasties.',
},
{
analyzedSentence: 'Assyria is a territory that was captured by Alexander. Persia is a territory that was captured by Alexander. Egypt is a territory that was captured by Alexander.',
composedSentence: 'Assyria, Persia, and Egypt are territories that were captured by Alexander.',
},
{
analyzedSentence: 'Limestone is found in Egyptian pyramids. Granite is found in Egyptian pyramids. Basalt is found in Egyptian pyramids.',
composedSentence: 'Limestone, granite, and basalt are found in Egyptian pyramids.',
},
{
analyzedSentence: 'The Libyans invaded Egypt. The Nubians invaded Egypt. The Assyrians invaded Egypt. The Persians invaded Egypt. The Greeks invaded Egypt.',
composedSentence: 'The Libyans, the Nubians, the Assyrians, the Persians, and the Greeks invaded Egypt.',
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
