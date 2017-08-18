// PRESENT PARTICIPLE AND GERUND

// This has been modified by setting var i to 6.


var $ = function(id) {
    return document.getElementById(id);
};

var problem = [
{
analyzedSentence: 'Blank. Blank.',
composedSentence: 'Blank and blank.',
},
{
analyzedSentence: 'The Bronze Age gave way to the Iron Age. The Bronze Age ended because copper was much harder to find than iron.',
composedSentence: 'Giving way to the Iron Age, the Bronze Age ended because copper was much harder to find than iron.',
},
{
analyzedSentence: 'The ancient Romans added only concrete and lead to the list of materials. The ancient Romans surpassed the engineers who came before them.',
composedSentence: 'Adding only concrete and lead to the list of materials, the ancient Romans surpassed the engineers who came before them.',
},
{
analyzedSentence: 'The Greeks of the Archaic period began with the building techniques from the Bronze Age. The Greeks of the Archaic period gradually developed a more sophisticated style of building.',
composedSentence: 'Beginning with the building techniques from the Bronze Age, the Greeks of the Archaic period gradually developed a more sophisticated style of building.',
},
{
analyzedSentence: 'The quarrymen put the blocks on wooden sleds. The quarrymen guided the blocks down the slope from the quarry on a smooth track.',
composedSentence: 'Putting the blocks on wooden sleds, the quarrymen guided the blocks down the slope from the quarry on a smooth track.',
},
{
analyzedSentence: 'Metagenes was the son of Chersiphon. Metagenes naturally came up with his own brilliant technique for transporting huge beams for the Temple of Artemis.',
composedSentence: 'Being the son of Chersiphon, Metagenes naturally came up with his own brilliant technique for transporting huge beams for the Temple of Artemis.',
},
{
analyzedSentence: 'Greek builders did not employ huge groups of men to build ramps. They relied on simple construction cranes instead.',
composedSentence: 'Greek builders did not employ huge groups of men to build ramps, relying on simple construction cranes instead.',
},
{
analyzedSentence: 'They did not leave rope underneath the blocks. They used cranes to lift the blocks.',
composedSentence: 'Without leaving rope underneath the blocks, they used cranes to lift the blocks.',
},
{
analyzedSentence: 'They built without mortar. This required a perfect fit for each block.',
composedSentence: 'Building without mortar required a perfect fit for each block.',
},

];

	var i = 6
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
