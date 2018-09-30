var analysis_problems = [
{
analyzedSentence: 'The history of ancient Egyptian civilization began in 3200. It lasted for thirty centuries.',
composedSentence: 'The history of ancient Egyptian civilization began in 3200 and lasted for thirty centuries.',
},
{
analyzedSentence: 'The Nile River flooded every year. It deposited fertile new topsoil.',
composedSentence: 'The Nile River flooded every year and deposited fertile new topsoil.',
},
{
analyzedSentence: 'The Middle Kingdom was invaded by people called the Hyksos. It collapsed.',
composedSentence: 'The Middle Kingdom was invaded by people called the Hyksos and collapsed.',
},
{
analyzedSentence: 'Egyptians were used to sailing on the Nile River. They did not like having to sail on the Mediterranean Sea.',
composedSentence: 'Egyptians were used to sailing on the Nile River and did not like having to sail on the Mediterranean Sea.',
},
{
analyzedSentence: 'A successful pharaoh fought his enemies. He built impressive monuments. He sent out expeditions to trade with other countries.',
composedSentence: 'A successful pharaoh fought his enemies, built impressive monuments, and sent out expeditions to trade with other countries.',
},
{
analyzedSentence: 'The pharaoh gave plunder from his wars to the priests. He thus earned their support.',
composedSentence: 'The pharaoh gave plunder from his wars to the priests and thus earned their support.',
},
{
analyzedSentence: 'Libyans invaded Egypt. They ruled for almost 200 years.',
composedSentence: 'Libyans invaded Egypt and ruled for almost 200 years.',
},
{
analyzedSentence: 'Egypt was reunited during the New Kingdom. It had powerful rulers during the New Kingdom. However, it eventually grew weak again.',
composedSentence: 'Egypt was reunited and had powerful rulers during the New Kingdom but eventually grew weak again.',
},
{
analyzedSentence: 'Manetho was an Egyptian priest during Ptolemaic Egypt. He wrote a history of Egypt.',
composedSentence: 'Manetho was an Egyptian priest during Ptolemaic Egypt and wrote a history of Egypt.',
}
];

var composition_problems = [

{
analyzedSentence: 'The rooster crowed. The sun came up.', 
composedSentence:  'The rooster crowed, and the sun came up.',
},
{
analyzedSentence: 'A gigantic crocodile emerged. Ordinary crocodiles were terrified.', 
composedSentence:  'A gigantic crocodile emerged, and ordinary crocodiles were terrified.',
},
{
analyzedSentence: 'A gigantic crocodile emerged with a splash from the dark water. Ordinary crocodiles that had been quietly munching their dinners were terrified out of their wits.', 
composedSentence:  'A gigantic crocodile emerged with a splash from the dark water, and ordinary crocodiles that had been quietly munching their dinners were terrified out of their wits.',
},
{
analyzedSentence: 'The teacher said to line up for library and the students silently got into line.', 
composedSentence:  'The teacher said to line up for library, and the students silently got into line.',
},
{
analyzedSentence: 'The gnat bragged but the bull said nothing.', 
composedSentence:  'The gnat bragged, but the bull said nothing.',
},
{
analyzedSentence: 'The gnat was being a pest again yet the lion ignored him.', 
composedSentence: 'The gnat was being a pest again, yet the lion ignored him.',
},
{
analyzedSentence: 'The gnat was tiny so the bull was not disturbed by him.', 
composedSentence: 'The gnat was tiny, so the bull was not disturbed by him.',
},
{
analyzedSentence: 'The tiny gnat bragged "Even a lion is no match for me!"', 
composedSentence: 'The tiny gnat bragged, "Even a lion is no match for me!"',
},
{
analyzedSentence: '"I am such an impressive little creature" the gnat bragged to himself.', 
composedSentence: '"I am such an impressive little creature," the gnat bragged to himself.',
},
{
analyzedSentence: '"Have you come to eat us?", the smaller crocodiles asked timidly.', 
composedSentence: '"Have you come to eat us?" the smaller crocodiles asked timidly.',
},
{
analyzedSentence: '"I have come to be your king", replied the giant crocodile.', 
composedSentence: '"I have come to be your king," replied the giant crocodile.',
},
{
analyzedSentence: 'The smaller crocodiles asked themselves "Why do we need a king?"', 
composedSentence: 'The smaller crocodiles asked themselves, "Why do we need a king?"',
},
{
analyzedSentence: 'The giant crocodile replied "I can keep you from eating each other."', 
composedSentence: 'The giant crocodile replied, "I can keep you from eating each other."', 
},
{
analyzedSentence: '"That is such a good idea"! the little crocodiles decided.', 
composedSentence: '"That is such a good idea!" the little crocodiles decided.', 
},
];

// {
// analyzedSentence: 'Egypt was the first nation in the world. Egypt accomplished many great things.',
// composedSentence: 'Egypt was the first nation in the world and accomplished many great things.',
// },
// {
// analyzedSentence: 'Queen Hatshepsut ruled as a pharaoh. She called herself "king."',
// composedSentence: 'Queen Hatshepsut ruled as a pharaoh and called herself "king."',
// },
// {
// analyzedSentence: 'Narmer was the king of Upper Egypt. He conquered Lower Egypt.',
// composedSentence: 'Narmer was the king of Upper Egypt and conquered Lower Egypt.',
// },
// {
// analyzedSentence: 'The architect who worked for King Zoser put six mastabas on top of each other. He made each mastaba smaller than the one below it.',
// composedSentence: 'The architect who worked for King Zoser put six mastabas on top of each other and made each mastaba smaller than the one below it.',
// },
// {
// analyzedSentence: 'Egyptians dug through the sand down to bedrock. They cut out a tomb in the bedrock. They put the body in the tomb.',
// composedSentence: 'Egyptians dug through the sand down to bedrock, cut out a tomb in the bedrock, and put the body in the tomb.',
// },
// {
// analyzedSentence: 'The Valley of the Kings has only one entrance. It is thus easy to guard.',
// composedSentence: 'The Valley of the Kings has only one entrance and is thus easy to guard.',
// },
// {
// analyzedSentence: 'Queen Hatshepsut sent a famous expedition to the country of Punt. She put up obelisks at the Temple at Karnak.',
// composedSentence: 'Queen Hatshepsut sent a famous expedition to the country of Punt and put up obelisks at the Temple at Karnak.',
// },
// {
// analyzedSentence: 'The name of Hatshepsut was powerful when she was alive. However, it was erased from all monuments after she died. It was not included on the Abydos king list after she died.',
// composedSentence: 'The name of Hatshepsut was powerful when she was alive but was erased from all monuments and was not included on the Abydos king list after she died.',
// },
// {
// analyzedSentence: 'The Egyptian army conquered countries. It brought back wealth from those countries.',
// composedSentence: 'The Egyptian army conquered countries and brought back wealth from those countries.',
// }

// ];


