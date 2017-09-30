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
analyzedSentence: 'Egypt was the first nation in the world. Egypt accomplished many great things.',
composedSentence: 'Egypt was the first nation in the world and accomplished many great things.',
},
{
analyzedSentence: 'Queen Hatshepsut ruled as a pharaoh. She called herself "king."',
composedSentence: 'Queen Hatshepsut ruled as a pharaoh and called herself "king."',
},
{
analyzedSentence: 'Narmer was the king of Upper Egypt. He conquered Lower Egypt.',
composedSentence: 'Narmer was the king of Upper Egypt and conquered Lower Egypt.',
},
{
analyzedSentence: 'The architect who worked for King Zoser put six mastabas on top of each other. He made each mastaba smaller than the one below it.',
composedSentence: 'The architect who worked for King Zoser put six mastabas on top of each other and made each mastaba smaller than the one below it.',
},
{
analyzedSentence: 'Egyptians dug through the sand down to bedrock. They cut out a tomb in the bedrock. They put the body in the tomb.',
composedSentence: 'Egyptians dug through the sand down to bedrock, cut out a tomb in the bedrock, and put the body in the tomb.',
},
{
analyzedSentence: 'The Valley of the Kings has only one entrance. It is thus easy to guard.',
composedSentence: 'The Valley of the Kings has only one entrance and is thus easy to guard.',
},
{
analyzedSentence: 'Queen Hatshepsut sent a famous expedition to the country of Punt. She put up obelisks at the Temple at Karnak.',
composedSentence: 'Queen Hatshepsut sent a famous expedition to the country of Punt and put up obelisks at the Temple at Karnak.',
},
{
analyzedSentence: 'The name of Hatshepsut was powerful when she was alive. However, it was erased from all monuments after she died. It was not included on the Abydos king list after she died.',
composedSentence: 'The name of Hatshepsut was powerful when she was alive but was erased from all monuments and was not included on the Abydos king list after she died.',
},
{
analyzedSentence: 'The Egyptian army conquered countries. It brought back wealth from those countries.',
composedSentence: 'The Egyptian army conquered countries and brought back wealth from those countries.',
},

];

	var i = 1
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
