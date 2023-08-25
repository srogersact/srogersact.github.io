var analysis_problems = [
    {
        analyzedSentence: 'A trout is a kind of fish. An eagle is a kind of bird.',
        composedSentence: 'A trout is a kind of fish, and an eagle is a kind of bird.',
    },
    {
        analyzedSentence: 'Fish swim. Birds fly.',
        composedSentence: 'Fish swim, and birds fly.',
    },{
        analyzedSentence: 'Fish have fins. Birds have wings.',
        composedSentence: 'Fish have fins, and birds have wings.',
    },{
        analyzedSentence: 'A trout swims with its fins. An eagle flies with its wings.',
        composedSentence: 'A trout swims with its fins, and an eagle flies with its wings.',
    },
    {
        analyzedSentence: 'Snakes slither on the ground. Penguins glide through the water. Monkeys swing through the trees.',
        composedSentence: 'Snakes slither on the ground, penguins glide through the water, and monkeys swing through the trees.',
    },
    {
        analyzedSentence: 'Fish eat krill. Penguins eat krill and fish. Leopard seals eat fish and penguins. Killer whales eat penguins and leopard seals.',
        composedSentence: 'Fish eat krill, penguins eat krill and fish, leopard seals eat fish and penguins, and killer whales eat penguins and leopard seals.',
    },
    {
        analyzedSentence: 'The largest land animals are mammals. However, many mammals are very small.',
        composedSentence: 'The largest land animals are mammals, but many mammals are very small.',
    },
    {
        analyzedSentence: 'Rattlesnakes in North America and South America are dangerous snakes with powerful venom. However, king cobras in India and Southeast Asia are able to kill elephants with their venom.',
        composedSentence: 'Rattlesnakes in North America and South America are dangerous snakes with powerful venom, but king cobras in India and Southeast Asia are able to kill elephants with their venom.',
    },
    {
        analyzedSentence: 'If an animal is covered with hair you can tell that it is a mammal. However, whales and armadillos are animals that have almost no hair and are still mammals.',
        composedSentence: 'If an animal is covered with hair you can tell that it is a mammal, but whales and armadillos are animals that have almost no hair and are still mammals.',
    }
];

var composition_problems = [
    {
        analyzedSentence: 'An emu is a kind of bird that does not fly. A garter snake is a kind of reptile that does not walk.',
        composedSentence: 'An emu is a kind of bird that does not fly, and a garter snake is a kind of reptile that does not walk.',
    },
    {
        analyzedSentence: 'Polar bears hunt seals on ice floes. Hawks hunt birds in woodlands and meadows. Cougars hunt deer in canyons.',
        composedSentence: 'Polar bears hunt seals on ice floes, hawks hunt birds in woodlands and meadows, and cougars hunt deer in canyons.',
    },
    {
        analyzedSentence: 'A badger\'s paws are good for digging. An otter\'s paws are good for swimming. A leopard\'s paws are good for hunting. A wolf\'s paws are good for running.',
        composedSentence: 'A badger\'s paws are good for digging, an otter\'s paws are good for swimming, a leopard\'s paws are good for hunting, and a wolf\'s paws are good for running.',
    },
    {
        analyzedSentence: 'A red squirrel stays active throughout the winter. However, a chipmunk stays in its burrow during the winter.',
        composedSentence: 'A red squirrel stays active throughout the winter, but a chipmunk stays in its burrow during the winter.',
    },
    {
       analyzedSentence: 'A birch bark canoe that Native Americans used for hunting was eight to ten feet long and carried two people. However, a canoe used for transportation might be twenty-four feet long and carry ten people.',
        composedSentence: 'A birch bark canoe that Native Americans used for hunting was eight to ten feet long and carried two people, but a canoe used for transportation might be twenty-four feet long and carry ten people.',
    },
    {
        analyzedSentence: 'Spring will be late if Punxsutawney Phil comes out of his burrow and sees his shadow on February 2. However, spring will be early if he does not see his shadow because it is cloudy.',
        composedSentence: 'Spring will be late if Punxsutawney Phil comes out of his burrow and sees his shadow on February 2, but spring will be early if he does not see his shadow because it is cloudy.',
    }
];
