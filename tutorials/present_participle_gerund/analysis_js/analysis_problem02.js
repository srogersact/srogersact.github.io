// PRESENT PARTICIPLE AND GERUND

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
analyzedSentence: 'Smelters added small amounts of tin to copper. Smelters discovered how to make bronze.',
composedSentence: 'Adding small amounts of tin to copper, smelters discovered how to make bronze.',
},
{
analyzedSentence: 'The smelting process produces an impure iron mixture at lower temperatures. The smelting process had to be followed by vigorous hammering.',
composedSentence: 'Producing an impure iron mixture at lower temperatures, the smelting process had to be followed by vigorous hammering.',
},
{
analyzedSentence: 'The Bronze Age civilization at Mycenae collapsed around 1200 B.C.E. The Bronze Age civilization  at Mycenae was forgotten, but its giant buildings remained.',
composedSentence: 'Collapsing around 1200 B.C.E., the Bronze Age civilization at Mycenae was forgotten, but its giant buildings remained.',
},
{
analyzedSentence: 'The Greeks usually preferred to use limestone for for less important buildings. The Greeks built their most important buildings with marble.',
composedSentence: 'Usually preferring to use limestone for for less important buildings, the Greeks built their most important buildings with marble.',
},
{
analyzedSentence: 'Chersiphron turned each column drum on its side. Chersiphron attached a pair of axles and a wooden frame so he could hitch a team of oxen to the drum and roll it to the building site.',
composedSentence: 'Turning each column drum on its side, Chersiphron attached a pair of axles and a wooden frame so he could hitch a team of oxen to the drum and roll it to the building site.',
},
{
analyzedSentence: 'Greek builders used the same method the Egyptians had used for centuries. Greek builders built temporary earthen ramps and used wooden rollers to move heavy stone blocks into higher positions.',
composedSentence: 'Using the same method the Egyptians had used for centuries, Greek builders built temporary earthen ramps and used wooden rollers to move heavy stone blocks into higher positions.',
},
{
analyzedSentence: 'They used ropes to lift the blocks. They did not leave rope underneath the blocks.',
composedSentence: 'They used ropes to lift the blocks without leaving rope underneath the blocks.',
},
{
analyzedSentence: 'They carved U-shaped grooves into the end of a block. This allowed the block to be lifted without passing a rope underneath.',
composedSentence: 'Carving U-shaped grooves into the end of a block allowed the block to be lifted without passing a rope underneath.',
},
{
analyzedSentence: 'They designed the columns so that they bulge at the center. This is called entasis.',
composedSentence: 'Designing the columns so that they bulge at the center is called entasis.',
},
{
analyzedSentence: 'They put iron dowels in the exact centers of the tops and bottoms of the drums. This allowed the masons to align the drums accurately.',
composedSentence: 'Putting iron dowels in the exact centers of the tops and bottoms of the drums allowed the masons to align the drums accurately.',
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
