// COMPOUND OBJECT

// This has been modified by setting var i to 9.


var $ = function(id) {
    return document.getElementById(id);
};

var problem = [
{
analyzedSentence: 'Blank. Blank.',
composedSentence: 'Blank and blank.',
},
{
analyzedSentence: 'Egyptians valued order. Egyptians valued stability.',
composedSentence: 'Egyptians valued order and stability.',
},
{
analyzedSentence: 'The pharaoh wore the short, red crown of Lower Egypt. The pharaoh also wore the tall, white crown of Upper Egypt.',
composedSentence: 'The pharaoh wore the short, red crown of Lower Egypt and the tall, white crown of Upper Egypt.',
},
{
analyzedSentence: 'Tutankhamun had a cobra on the left side of his crown. Tutankhamun also had a vulture on the right side of his crown.',
composedSentence: 'Tutankhamun had a cobra on the left side of his crown and a vulture on the right side of his crown.',
},
{
analyzedSentence: 'The pharaohs commanded the Egyptians to build irrigation canals. The pharaohs also commanded the Egyptians to build monuments.',
composedSentence: 'The pharaohs commanded the Egyptians to build irrigation canals and monuments.',
},
{
analyzedSentence: 'The tomb Ramses II built for his sons has three levels. The tomb Ramses II built for his sons also has hundreds of small rooms.',
composedSentence: 'The tomb Ramses II built for his sons has three levels and hundreds of small rooms.',
},
{
analyzedSentence: 'Later in his life Ramses II made peace. Later in his life Ramses II did not make war.',
composedSentence: 'Later in his life Ramses II made peace instead of war.',
},
{
analyzedSentence: 'Changes in religion were unwelcome in Egypt. Changes in art were also unwelcome in Egypt.',
composedSentence: 'Changes in religion and art were unwelcome in Egypt.',
},

];

	var i = 9
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
