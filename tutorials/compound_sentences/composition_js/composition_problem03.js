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
analyzedSentence: 'Knossos is a city on the island of Crete. Sparta is a city on the Peloponnesus.',
composedSentence: 'Knossos is a city on the island of Crete, and Sparta is a city on the Peloponnesus.',
},
{
analyzedSentence: 'Alexandria was named after Alexander the Great. Athens was named after the goddess Athena. Rome was named after Romulus.',
composedSentence: 'Alexandria was named after Alexander the Great, Athens was named after the goddess Athena, and Rome was named after Romulus.',
},
{
analyzedSentence: 'Memphis is on the Nile Delta. Athens is a few miles from the Saronic Gulf. Constantinople (now called Istanbul) is on the Sea of Marmara. Rome is on the Tiber River.',
composedSentence: 'Memphis is on the Nile Delta, Athens is a few miles from the Saronic Gulf, Constantinople (now called Istanbul) is on the Sea of Marmara, and Rome is on the Tiber River.',
},
{
analyzedSentence: 'We usually think of north as being up. However, Upper Egypt was south of Lower Egypt.',
composedSentence: 'We usually think of north as being up, but Upper Egypt was south of Lower Egypt.',
},
{
analyzedSentence: 'Egypt\'s most important natural resources were water and rich soil for farming that the Nile River provided. However, Egypt had other resources such as gold, sandstone and limestone for building, reeds for making mats and baskets, clay for making pottery and bricks, and papyrus for making paper.',
composedSentence: 'Egypt\'s most important natural resources were water and rich soil for farming that the Nile River provided, but Egypt had other resources such as gold, sandstone and limestone for building, reeds for making mats and baskets, clay for making pottery and bricks, and papyrus for making paper.',
},
{
analyzedSentence: 'Sneferu\'s second pyramid, the Bent Pyramid, was going to have a true pyramid shape. However, it has a change in slope about halfway up.',
composedSentence: 'Sneferu\'s second pyramid, the Bent Pyramid, was going to have a true pyramid shape, but it has a change in slope about halfway up.',
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
