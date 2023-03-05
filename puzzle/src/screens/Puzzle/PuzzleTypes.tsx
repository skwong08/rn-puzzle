export interface PuzzleObject {
  answer: string;
  description: string;
}

export const CityTypes: PuzzleObject[] = [
  {
    answer: 'CHANGI',
    description: 'One of the largest transpotation hubs in Asia.',
  },
  {
    answer: 'MARINABAY',
    description: 'Mythical national icon, famous landmark of the Singapore.',
  },
  {
    answer: 'SENTOSA',
    description:
      'A place that approximately at least 9 million visitors pass through its gate every year in Singapore.',
  },
  {
    answer: 'CLARKEQUAY',
    description: 'Most happening nightlife place in the Singapore.',
  },
  {
    answer: 'ORCHARD',
    description: 'Place where the Palace of Singapore and biggest luxury mall.',
  },
];

export const FoodTypes: PuzzleObject[] = [
  {
    answer: 'LAKSA',
    description: 'Food that originate from Malaysia, Singapore and Indonesia.',
  },
  {
    answer: 'BAKKUTTEH',
    description: 'Food that originate from Malaysia, Singapore and Fujian.',
  },
  {
    answer: 'NASILEMAK',
    description:
      'Rice that cook with coconut milk and serve with egg, beans, fried fish and fried chicken.',
  },
  {
    answer: 'KEBAB',
    description:
      'Dish of Middle Eastern or Central Asian origin that typically combines small pieces of meat such as lamb or beef with vegetables on a skewer and is then grilled.',
  },
  {
    answer: 'DOSA',
    description:
      'Originated in South India and you could see it from Mamak stalks',
  },
];

export const AnimalTypes: PuzzleObject[] = [
  {
    answer: 'LION',
    description: 'I am the king of the forest.',
  },
  {
    answer: 'KANGAROO',
    description: 'What jumps when it walks and sits when it stands?',
  },
  {
    answer: 'ELEPHANT',
    description:
      'I am too big to be your pet and I have an extremely long trunk.',
  },
  {
    answer: 'DOG',
    description: 'I am lovely and loyal to be your friend.',
  },
  {
    answer: 'CAT',
    description: 'Be my slave or I will push your TV down.',
  },
];
