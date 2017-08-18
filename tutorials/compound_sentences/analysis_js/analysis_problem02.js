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
analyzedSentence: 'The king of Upper Egypt wore a tall white crown. The king of Lower Egypt wore a short red crown.',
composedSentence: 'The king of Upper Egypt wore a tall white crown, and the king of Lower Egypt wore a short red crown.',
},
{
analyzedSentence: 'Egyptians sailed on the Nile River. Greeks sailed on the Aegean Sea. Romans sailed from one end of the Mediterranean Sea to the other.',
composedSentence: 'Egyptians sailed on the Nile River, Greeks sailed on the Aegean Sea, and Romans sailed from one end of the Mediterranean Sea to the other.',
},
{
analyzedSentence: 'Dacia was the Roman name for modern Romania. Gaul was the Roman name for modern France. Lusitania was the Roman name for modern Portugal. Hibernia was the Roman name for modern Ireland.',
composedSentence: 'Dacia was the Roman name for modern Romania, Gaul was the Roman name for modern France, Lusitania was the Roman name for modern Portugal, and Hibernia was the Roman name for modern Ireland.',
},
{
analyzedSentence: 'Many rivers flow from north to south. However, the Nile River flows from south to north.',
composedSentence: 'Many rivers flow from north to south, but the Nile River flows from south to north.',
},
{
analyzedSentence: 'To travel upstream on the Nile River in ships the Egyptians put up sails to catch the breeze that usually blew from north to south. To go north they put down the sails and rode the current that flowed downstream to the Mediterranean Sea.',
composedSentence: 'To travel upstream on the Nile River in ships the Egyptians put up sails to catch the breeze that usually blew from north to south, and to go north they put down the sails and rode the current that flowed downstream to the Mediterranean Sea.',
},
{
analyzedSentence: 'The many hills in Greece could sometimes be used for growing barley and were often used for growing olives and grapes. However, sometimes the hills were steep enough that they could only be used for grazing sheep and goats.',
composedSentence: 'The many hills in Greece could sometimes be used for growing barley and were often used for growing olives and grapes, but sometimes the hills were steep enough that they could only be used for grazing sheep and goats.',
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
