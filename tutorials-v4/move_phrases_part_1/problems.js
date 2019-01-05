var analysis_problems = [
	{
		 analyzedSentence: 'I did not see the dog at first.',
		 composedSentence: 'At first I did not see the dog.',
	},
	{
		 analyzedSentence: 'The dog ran around the corner.',
		 composedSentence: 'Around the corner the dog ran.',
	},
	{
		 analyzedSentence: 'The dog smiled while wagging his tail.',
		 composedSentence: 'While wagging his tail, the dog smiled.',
	},
	{
		 analyzedSentence: 'The dog wagged his tail with enthusiasm.',
		 composedSentence: 'With enthusiasm the dog wagged his tail.',
	},
	{
		 analyzedSentence: 'The dog ran, wagging his tail and smiling.',
		 composedSentence: 'Wagging his tail and smiling, the dog ran.',
	},
	{
		 analyzedSentence: 'The dog thanked the manager by wagging his tail.',
		 composedSentence: 'By wagging his tail, the dog thanked the manager.',
	},
	{
		 analyzedSentence: 'The dog was concerned because the manager of the store started to cry.',
		 composedSentence: 'Because the manager of the store started to cry, the dog was concerned.',
	},
	{
		 analyzedSentence: 'I said that he was my dog because I did not want him to be taken to the pound.',
		 composedSentence: 'Because I did not want him to be taken to the pound, I said that he was my dog.',
	},
	{
		 analyzedSentence: 'There are wild horses on Chincoteague.',
		 composedSentence: 'On Chincoteague there are wild horses.',
	},
	{
		 analyzedSentence: 'Maureen was distracted because she kept thinking about the wild horses.',
		 composedSentence: 'Because she kept thinking about the wild horses, Maureen was distracted.',
	},
	{
		 analyzedSentence: 'Maureen kept standing when her teacher told her to sit down.',
		 composedSentence: 'When her teacher told her to sit down, Maureen kept standing.',
	},
	{
		 analyzedSentence: 'The class laughed as Maureen sat down.',
		 composedSentence: 'As Maureen sat down, the class laughed.',
	},
	{
		 analyzedSentence: 'An oral examination was taking place in Maureen\'s brother\'s classroom.',
		 composedSentence: 'In Maureen\'s brother\'s classroom an oral examination was taking place.',
	},
	{
		 analyzedSentence: 'Teddy was excused when he stood up holding a bloody handkerchief to his nose.',
		 composedSentence: 'When he stood up holding a bloody handkerchief to his nose, Teddy was excused.',
	},
	{
		 analyzedSentence: 'Paul did not hear his teacher as she spoke to him.',
		 composedSentence: 'As she spoke to him, Paul did not hear his teacher.',
	},
	{
		 analyzedSentence: 'Paul did not hear his teacher because his thoughts were far away.',
		 composedSentence: 'Because his thoughts were far away, Paul did not hear his teacher.',
	},
	{
		 analyzedSentence: 'Paul could not hear his teacher with his mind back at Pony Ranch.',
		 composedSentence: 'With his mind back at Pony Ranch, Paul could not hear his teacher.',
	},
	{
		 analyzedSentence: 'He saw a colt being born in his imagination.',
		 composedSentence: 'In his imagination he saw a colt being born.',
	},
	{
		 analyzedSentence: 'The teacher tapped the pencil with irritation.',
		 composedSentence: 'With irritation the teacher tapped the pencil.',
	},
	{
		 analyzedSentence: 'The class laughed noisily.',
		 composedSentence: 'Noisily the class laughed.',
	},
	{
		 analyzedSentence: 'It was warm and comfortable in Misty\'s shed.',
		 composedSentence: 'In Misty\'s shed it was warm and comfortable.',
	},
	{
		 analyzedSentence: 'There was good hay in the manger.',
		 composedSentence: 'In the manger there was good hay.',
	},
	{
		 analyzedSentence: 'There was clover among the hay.',
		 composedSentence: 'Among the hay there was clover.',
	},
	{
		 analyzedSentence: 'Misty had hollowed out a block of salt by licking it.',
		 composedSentence: 'By licking it, Misty had hollowed out a block of salt.',
	},
	{
		 analyzedSentence: 'She turned her head to watch a little brown hen.',
		 composedSentence: 'To watch a little brown hen, she turned her head.',
	},
	{
		 analyzedSentence: 'The hen was making a nest in the corner of the stall.',
		 composedSentence: 'In the corner of the stall, the hen was making a nest.',
	},
	{
		 analyzedSentence: 'Misty munched her hay slowly.',
		 composedSentence: 'Slowly Misty munched her hay.',
	},
	{
		 analyzedSentence: 'Two other ponies pretended to be stallions out on the marsh.',
		 composedSentence: 'Out on the marsh two other ponies pretended to be stallions.',
	},
	{
		 analyzedSentence: 'The hen was satisfied when she had finished her nest.',
		 composedSentence: 'When she had finished her nest, the hen was satisfied.',
	},
	{
		 analyzedSentence: 'She fluffed her feathers contentedly.',
		 composedSentence: 'Contentedly she fluffed her feathers.',

},

];

var composition_problems = [
	{
		 analyzedSentence: 'I did not see the dog <u>at first</u>.',
		 composedSentence: 'At first I did not see the dog.',
	},
	{
		 analyzedSentence: 'The dog ran <u>around the corner</u>.',
		 composedSentence: 'Around the corner the dog ran.',
	},
	{
		 analyzedSentence: 'The dog smiled <u>while wagging his tail</u>.',
		 composedSentence: 'While wagging his tail, the dog smiled.',
	},
	{
		 analyzedSentence: 'The dog wagged his tail <u>with enthusiasm</u>.',
		 composedSentence: 'With enthusiasm the dog wagged his tail.',
	},
	{
		 analyzedSentence: 'The dog ran, <u>wagging his tail and smiling</u>.',
		 composedSentence: 'Wagging his tail and smiling, the dog ran.',
	},
	{
		 analyzedSentence: 'The dog thanked the manager by wagging his tail.',
		 composedSentence: 'By wagging his tail, the dog thanked the manager.',
	},
	{
		 analyzedSentence: 'The dog was concerned because the manager of the store started to cry.',
		 composedSentence: 'Because the manager of the store started to cry, the dog was concerned.',
	},
	{
		 analyzedSentence: 'I said that he was my dog because I did not want him to be taken to the pound.',
		 composedSentence: 'Because I did not want him to be taken to the pound, I said that he was my dog.',
	},
	{
		 analyzedSentence: 'There are wild horses on Chincoteague.',
		 composedSentence: 'On Chincoteague there are wild horses.',
	},
	{
		 analyzedSentence: 'Maureen was distracted because she kept thinking about the wild horses.',
		 composedSentence: 'Because she kept thinking about the wild horses, Maureen was distracted.',
	},
	{
		 analyzedSentence: 'Maureen kept standing when her teacher told her to sit down.',
		 composedSentence: 'When her teacher told her to sit down, Maureen kept standing.',
	},
	{
		 analyzedSentence: 'The class laughed as Maureen sat down.',
		 composedSentence: 'As Maureen sat down, the class laughed.',
	},
	{
		 analyzedSentence: 'An oral examination was taking place in Maureen\'s brother\'s classroom.',
		 composedSentence: 'In Maureen\'s brother\'s classroom an oral examination was taking place.',
	},
	{
		 analyzedSentence: 'Teddy was excused when he stood up holding a bloody handkerchief to his nose.',
		 composedSentence: 'When he stood up holding a bloody handkerchief to his nose, Teddy was excused.',
	},
	{
		 analyzedSentence: 'Paul did not hear his teacher as she spoke to him.',
		 composedSentence: 'As she spoke to him, Paul did not hear his teacher.',
	},
	{
		 analyzedSentence: 'Paul did not hear his teacher because his thoughts were far away.',
		 composedSentence: 'Because his thoughts were far away, Paul did not hear his teacher.',
	},
	{
		 analyzedSentence: 'Paul could not hear his teacher with his mind back at Pony Ranch.',
		 composedSentence: 'With his mind back at Pony Ranch, Paul could not hear his teacher.',
	},
	{
		 analyzedSentence: 'He saw a colt being born in his imagination.',
		 composedSentence: 'In his imagination he saw a colt being born.',
	},
	{
		 analyzedSentence: 'The teacher tapped the pencil with irritation.',
		 composedSentence: 'With irritation the teacher tapped the pencil.',
	},
	{
		 analyzedSentence: 'The class laughed noisily.',
		 composedSentence: 'Noisily the class laughed.',
	},
	{
		 analyzedSentence: 'It was warm and comfortable in Misty\'s shed.',
		 composedSentence: 'In Misty\'s shed it was warm and comfortable.',
	},
	{
		 analyzedSentence: 'There was good hay in the manger.',
		 composedSentence: 'In the manger there was good hay.',
	},
	{
		 analyzedSentence: 'There was clover among the hay.',
		 composedSentence: 'Among the hay there was clover.',
	},
	{
		 analyzedSentence: 'Misty had hollowed out a block of salt by licking it.',
		 composedSentence: 'By licking it, Misty had hollowed out a block of salt.',
	},
	{
		 analyzedSentence: 'She turned her head to watch a little brown hen.',
		 composedSentence: 'To watch a little brown hen, she turned her head.',
	},
	{
		 analyzedSentence: 'The hen was making a nest in the corner of the stall.',
		 composedSentence: 'In the corner of the stall, the hen was making a nest.',
	},
	{
		 analyzedSentence: 'Misty munched her hay slowly.',
		 composedSentence: 'Slowly Misty munched her hay.',
	},
	{
		 analyzedSentence: 'Two other ponies pretended to be stallions out on the marsh.',
		 composedSentence: 'Out on the marsh two other ponies pretended to be stallions.',
	},
	{
		 analyzedSentence: 'The hen was satisfied when she had finished her nest.',
		 composedSentence: 'When she had finished her nest, the hen was satisfied.',
	},
	{
		 analyzedSentence: 'She fluffed her feathers contentedly.',
		 composedSentence: 'Contentedly she fluffed her feathers.',

},

];
