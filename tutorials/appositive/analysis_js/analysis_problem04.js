// APPOSITIVE

// This has been modified by setting var i to 4.



var $ = function(id) {
    return document.getElementById(id);
};

var problem = [
{
analyzedSentence: 'Blank. Blank.',
composedSentence: 'Blank and blank.',
},
{
analyzedSentence: 'Materials are acted on by forces. Forces are the pushes and pulls on materials.',
composedSentence: 'Materials are acted on by forces, the pushes and pulls on materials.',
},
{
analyzedSentence: 'Under tension stone is weak. Tension is a pulling force that tends to make something longer.',
composedSentence: 'Under tension, a pulling force that tends to make something longer, stone is weak.',
},
{
analyzedSentence: 'Columns are the upright cylinders that support beams. Columns are sturdy when they are made of stone.',
composedSentence: 'Columns, the upright cylinders that support beams, are sturdy when they are made of stone.',
},
{
analyzedSentence: 'Mud bricks have almost no tensile strength. Tensile strength is strength in tension.',
composedSentence: 'Mud bricks have almost no tensile strength, or strength in tension.',
},
{
analyzedSentence: 'Sun-dried bricks are not as strong as terra-cotta bricks. Terra-cotta bricks are bricks that have been heated in a kiln.',
composedSentence: 'Sun-dried bricks are not as strong as terra-cotta bricks (bricks that have been heated in a kiln).',
},
{
analyzedSentence: 'Clay is called "terra-cotta" if it has been fired. Fired means heated in a kiln.',
composedSentence: 'Clay is called "terra-cotta" if it has been fired (heated in a kiln).',
},
{
analyzedSentence: 'Malleable is from a Latin word that means "hammer." Malleable is certainly not a word that could be used for ceramics.',
composedSentence: 'Malleable (from a Latin word that means "hammer") is certainly not a word that could be used for ceramics.',
},
{
analyzedSentence: 'At first people used chunks of elemental copper they found in streambeds. Elemental means pure.',
composedSentence: 'At first people used chunks of elemental (pure) copper they found in streambeds.',
},
{
analyzedSentence: 'People did not start getting copper from copper ore until about 5,000 years later. Copper ore is rock that is not pure copper.',
composedSentence: 'People did not start getting copper from copper ore (rock that is not pure copper) until about 5,000 years later.',
},
{
analyzedSentence: 'When fired, clay becomes a ceramic. A ceramic is a solid that is not a metal and stays hard when it is heated.',
composedSentence: 'When fired, clay becomes a ceramic, a solid that is not a metal and stays hard when it is heated.',
},

];

	var i = 4
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
