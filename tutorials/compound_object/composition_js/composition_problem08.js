// COMPOUND OBJECT

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
analyzedSentence: 'Akhenaten\’s statue has wide hips. Akhenaten\'s statue has a long face.',
composedSentence: 'Akhenaten\’s statue has wide hips and a long face.',
},
{
analyzedSentence: 'Pharaoh Horemheb erased Akhenaten\’s name. Pharaoh Horemheb also erased all memory of Akhenaten\’s belief in only one god.',
composedSentence: 'Pharaoh Horemheb erased Akhenaten\’s name and all memory of Akhenaten\’s belief in only one god.',
},
{
analyzedSentence: 'Sneferu sent ships to Lebanon for cedar. He sent expeditions to the Sinai desert for turquoise.',
composedSentence: 'Sneferu sent ships to Lebanon for cedar and expeditions to the Sinai desert for turquoise.',
},
{
analyzedSentence: 'Ramses II worked to complete the Hypostyle Hall. Ramses II also worked to complete his father\’s tomb.',
composedSentence: 'Ramses II worked to complete the Hypostyle Hall and his father\’s tomb.',
},
{
analyzedSentence: 'Trade with Babylon was important to Egypt. Trade with Cyprus was also important to Egypt.',
composedSentence: 'Trade with Babylon and Cyprus was important to Egypt.',
},
{
analyzedSentence: 'Akhenaten worshiped Aten. Akhenaten did not worship Amun.',
composedSentence: 'Akhenaten worshiped Aten instead of Amun.',
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
