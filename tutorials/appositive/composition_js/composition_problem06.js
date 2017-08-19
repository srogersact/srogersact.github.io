
// APPOSITIVE

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
analyzedSentence: 'Wood was the second material used for human technology. Wood was attached to stone blades to make axes.',
composedSentence: 'Wood, the second material used for human technology, was attached to stone blades to make axes.',
},
{
analyzedSentence: 'Stone is more durable than wood, but it is not as workable. Workable means easily made into useful shapes.',
composedSentence: 'Stone is more durable than wood, but it is not as workable, or easily made into useful shapes.',
},
{
analyzedSentence: 'Mud bricks are a mixture of clay with sand and straw. Mud bricks are quick and easy to make.',
composedSentence: 'Mud bricks, a mixture of clay with sand and straw, are quick and easy to make.',
},
{
analyzedSentence: 'Ceramic is strong but not malleable. Malleable means able to be hammered into shape.',
composedSentence: 'Ceramic is strong but not malleable, or able to be hammered into shape.',
},
{
analyzedSentence: 'Ceramic is from a Greek word that means "pottery." Ceramic is strong and water-proof.',
composedSentence: 'Ceramic (from a Greek word that means "pottery") is strong and water-proof.',
},
{
analyzedSentence: 'Metalworkers learned the process of smelting. Smelting means heating an ore with charcoal to produce a pure metal.',
composedSentence: 'Metalworkers learned the process of smelting, or heating an ore with charcoal to produce a pure metal.',
},
{
analyzedSentence: 'The first alloy was bronze. An alloy is a metal that is made by mixing elements.',
composedSentence: 'The first alloy (a metal that is made by mixing elements) was bronze.',
},
{
analyzedSentence: 'The melting point of copper is much lower than the melting point of iron. The melting point of copper is 2,000 degrees F.',
composedSentence: 'The melting point of copper (2,000 degrees F) is much lower than the melting point of iron.',
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
