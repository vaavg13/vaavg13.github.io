import covers from "./data/book-covers.json";

export const READING_GOAL = 100;

export type Book = {
  id: string;
  title: string;
  author: string;
  status: "reading" | "finished" | "up-next";
  finishedOn?: string;
  note?: string;
  coverUrl?: string;
  url?: string;
  spineTitle?: string;
  photoRefs?: number[];
  catalogueNote?: string;
  needsReview?: boolean;
};

type CoverMatch = { coverUrl: string; sourceUrl: string; matchedTitle: string; matchedAuthor: string[] };

// Books confirmed finished by Bill. Unknown finish dates stay blank.
const catalogue: Book[] = [
  {
    "id": "the-count-of-monte-cristo",
    "title": "The Count of Monte Cristo",
    "author": "Alexandre Dumas",
    "status": "finished",
    "photoRefs": [
      1,
      7
    ],
    "spineTitle": "Ο κόμης Μοντεχρίστος",
    "catalogueNote": "Two-volume edition; volumes I and II."
  },
  {
    "id": "the-prince",
    "title": "The Prince",
    "author": "Niccolò Machiavelli",
    "status": "finished",
    "photoRefs": [
      1,
      7
    ],
    "spineTitle": "Ο ηγεμόνας"
  },
  {
    "id": "listen-little-man",
    "title": "Listen, Little Man!",
    "author": "Wilhelm Reich",
    "status": "finished",
    "photoRefs": [
      1,
      7
    ],
    "spineTitle": "Άκου, ανθρωπάκο!"
  },
  {
    "id": "the-great-gatsby",
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "status": "finished",
    "photoRefs": [
      1
    ],
    "spineTitle": "Ο μεγάλος Γκάτσμπυ"
  },
  {
    "id": "the-fall",
    "title": "The Fall",
    "author": "Albert Camus",
    "status": "finished",
    "photoRefs": [
      1
    ],
    "spineTitle": "Η πτώση",
    "catalogueNote": "Narrow green spine; title and author partially cropped.",
    "needsReview": true
  },
  {
    "id": "the-heirs",
    "title": "The Heirs",
    "author": "Honoré de Balzac",
    "status": "finished",
    "photoRefs": [
      1
    ],
    "spineTitle": "Οι κληρονόμοι",
    "catalogueNote": "Literal English rendering; original work/English edition needs confirmation.",
    "needsReview": true
  },
  {
    "id": "utopia-for-realists",
    "title": "Utopia for Realists",
    "author": "Rutger Bregman",
    "status": "finished",
    "photoRefs": [
      2,
      4
    ],
    "spineTitle": "Ουτοπία για ρεαλιστές"
  },
  {
    "id": "brief-answers-to-the-big-questions",
    "title": "Brief Answers to the Big Questions",
    "author": "Stephen Hawking",
    "status": "finished",
    "photoRefs": [
      2,
      4
    ],
    "spineTitle": "Σύντομες απαντήσεις στα μεγάλα ερωτήματα"
  },
  {
    "id": "the-passions-and-the-interests",
    "title": "The Passions and the Interests",
    "author": "Albert O. Hirschman",
    "status": "finished",
    "photoRefs": [
      2,
      4
    ],
    "spineTitle": "Τα πάθη και τα συμφέροντα"
  },
  {
    "id": "thinking-fast-and-slow",
    "title": "Thinking, Fast and Slow",
    "author": "Daniel Kahneman",
    "status": "finished",
    "photoRefs": [
      2,
      4
    ]
  },
  {
    "id": "connected",
    "title": "Connected",
    "author": "Nicholas A. Christakis & James H. Fowler",
    "status": "finished",
    "photoRefs": [
      2,
      4
    ]
  },
  {
    "id": "the-selfish-gene",
    "title": "The Selfish Gene",
    "author": "Richard Dawkins",
    "status": "finished",
    "photoRefs": [
      2,
      4
    ]
  },
  {
    "id": "zero-to-one",
    "title": "Zero to One",
    "author": "Peter Thiel & Blake Masters",
    "status": "finished",
    "photoRefs": [
      2
    ]
  },
  {
    "id": "supercommunicators",
    "title": "Supercommunicators",
    "author": "Charles Duhigg",
    "status": "finished",
    "photoRefs": [
      2
    ],
    "spineTitle": "Υπερεπικοινωνιακοί"
  },
  {
    "id": "how-to-win-friends-and-influence-people",
    "title": "How to Win Friends and Influence People",
    "author": "Dale Carnegie",
    "status": "finished",
    "photoRefs": [
      2
    ],
    "spineTitle": "Πώς να κερδίζεις φίλους και να επηρεάζεις τους ανθρώπους"
  },
  {
    "id": "the-brothers-karamazov",
    "title": "The Brothers Karamazov",
    "author": "Fyodor Dostoevsky",
    "status": "finished",
    "photoRefs": [
      3
    ],
    "spineTitle": "Αδελφοί Καραμάζωφ"
  },
  {
    "id": "crime-and-punishment",
    "title": "Crime and Punishment",
    "author": "Fyodor Dostoevsky",
    "status": "finished",
    "photoRefs": [
      3
    ],
    "spineTitle": "Έγκλημα και τιμωρία"
  },
  {
    "id": "the-house-of-the-dead",
    "title": "The House of the Dead",
    "author": "Fyodor Dostoevsky",
    "status": "finished",
    "photoRefs": [
      3
    ],
    "spineTitle": "Αναμνήσεις από το σπίτι των πεθαμένων"
  },
  {
    "id": "notes-from-underground",
    "title": "Notes from Underground",
    "author": "Fyodor Dostoevsky",
    "status": "finished",
    "photoRefs": [
      3
    ],
    "spineTitle": "Το υπόγειο"
  },
  {
    "id": "the-idiot",
    "title": "The Idiot",
    "author": "Fyodor Dostoevsky",
    "status": "finished",
    "photoRefs": [
      3
    ],
    "spineTitle": "Ο ηλίθιος"
  },
  {
    "id": "the-gambler",
    "title": "The Gambler",
    "author": "Fyodor Dostoevsky",
    "status": "finished",
    "photoRefs": [
      3
    ],
    "spineTitle": "Ο παίκτης"
  },
  {
    "id": "symposium",
    "title": "Symposium",
    "author": "Plato",
    "status": "finished",
    "photoRefs": [
      3
    ],
    "spineTitle": "Συμπόσιον ή περί έρωτος"
  },
  {
    "id": "eugenie-grandet",
    "title": "Eugénie Grandet",
    "author": "Honoré de Balzac",
    "status": "finished",
    "photoRefs": [
      3
    ],
    "spineTitle": "Ευγενία Γκραντέ"
  },
  {
    "id": "look-homeward-angel",
    "title": "Look Homeward, Angel",
    "author": "Thomas Wolfe",
    "status": "finished",
    "photoRefs": [
      3
    ],
    "spineTitle": "Γύρνα σπίτι, άγγελέ μου"
  },
  {
    "id": "history-of-the-peloponnesian-war",
    "title": "History of the Peloponnesian War",
    "author": "Thucydides",
    "status": "finished",
    "photoRefs": [
      3
    ],
    "spineTitle": "Θουκυδίδου Ιστορία",
    "catalogueNote": "Spine says History; exact contents/edition not visible.",
    "needsReview": true
  },
  {
    "id": "a-thousand-brains",
    "title": "A Thousand Brains",
    "author": "Jeff Hawkins",
    "status": "finished",
    "photoRefs": [
      4,
      6
    ]
  },
  {
    "id": "a-short-history-of-europe",
    "title": "A Short History of Europe",
    "author": "Simon Jenkins",
    "status": "finished",
    "photoRefs": [
      4
    ],
    "spineTitle": "Μια σύντομη ιστορία της Ευρώπης"
  },
  {
    "id": "principles-life-and-work",
    "title": "Principles: Life and Work",
    "author": "Ray Dalio",
    "status": "finished",
    "photoRefs": [
      4
    ]
  },
  {
    "id": "the-vital-question",
    "title": "The Vital Question",
    "author": "Nick Lane",
    "status": "finished",
    "photoRefs": [
      4
    ],
    "spineTitle": "Το ζωτικό ερώτημα"
  },
  {
    "id": "cant-hurt-me",
    "title": "Can’t Hurt Me",
    "author": "David Goggins",
    "status": "finished",
    "photoRefs": [
      4
    ]
  },
  {
    "id": "the-power-of-habit",
    "title": "The Power of Habit",
    "author": "Charles Duhigg",
    "status": "finished",
    "photoRefs": [
      4
    ],
    "spineTitle": "Η δύναμη της συνήθειας"
  },
  {
    "id": "a-tale-of-two-cities",
    "title": "A Tale of Two Cities",
    "author": "Charles Dickens",
    "status": "finished",
    "photoRefs": [
      5
    ],
    "spineTitle": "Ιστορία δύο πόλεων"
  },
  {
    "id": "les-miserables",
    "title": "Les Misérables",
    "author": "Victor Hugo",
    "status": "finished",
    "photoRefs": [
      5
    ],
    "spineTitle": "Οι άθλιοι"
  },
  {
    "id": "the-metamorphosis",
    "title": "The Metamorphosis",
    "author": "Franz Kafka",
    "status": "finished",
    "photoRefs": [
      5
    ],
    "spineTitle": "Η μεταμόρφωση"
  },
  {
    "id": "the-trial",
    "title": "The Trial",
    "author": "Franz Kafka",
    "status": "finished",
    "photoRefs": [
      5
    ],
    "spineTitle": "Η δίκη"
  },
  {
    "id": "animal-farm",
    "title": "Animal Farm",
    "author": "George Orwell",
    "status": "finished",
    "photoRefs": [
      5
    ],
    "spineTitle": "Η φάρμα των ζώων"
  },
  {
    "id": "for-whom-the-bell-tolls",
    "title": "For Whom the Bell Tolls",
    "author": "Ernest Hemingway",
    "status": "finished",
    "photoRefs": [
      5
    ],
    "spineTitle": "Για ποιον χτυπά η καμπάνα"
  },
  {
    "id": "the-old-man-and-the-sea",
    "title": "The Old Man and the Sea",
    "author": "Ernest Hemingway",
    "status": "finished",
    "photoRefs": [
      5
    ],
    "spineTitle": "Ο γέρος και η θάλασσα"
  },
  {
    "id": "the-sun-also-rises",
    "title": "The Sun Also Rises",
    "author": "Ernest Hemingway",
    "status": "finished",
    "photoRefs": [
      5
    ],
    "spineTitle": "Κι ο ήλιος ανατέλλει"
  },
  {
    "id": "siddhartha",
    "title": "Siddhartha",
    "author": "Hermann Hesse",
    "status": "finished",
    "photoRefs": [
      5
    ],
    "spineTitle": "Σιντάρτα"
  },
  {
    "id": "demian",
    "title": "Demian",
    "author": "Hermann Hesse",
    "status": "finished",
    "photoRefs": [
      5
    ],
    "spineTitle": "Ντέμιαν"
  },
  {
    "id": "foundation",
    "title": "Foundation",
    "author": "Isaac Asimov",
    "status": "finished",
    "photoRefs": [
      5
    ],
    "spineTitle": "Θεμέλιο"
  },
  {
    "id": "foundation-and-empire",
    "title": "Foundation and Empire",
    "author": "Isaac Asimov",
    "status": "finished",
    "photoRefs": [
      5
    ],
    "spineTitle": "Θεμέλιο και αυτοκρατορία"
  },
  {
    "id": "second-foundation",
    "title": "Second Foundation",
    "author": "Isaac Asimov",
    "status": "finished",
    "photoRefs": [
      5
    ],
    "spineTitle": "Δεύτερο θεμέλιο"
  },
  {
    "id": "elon-musk",
    "title": "Elon Musk",
    "author": "Walter Isaacson",
    "status": "finished",
    "photoRefs": [
      6
    ],
    "spineTitle": "Elon Musk: Η επίσημη βιογραφία"
  },
  {
    "id": "sapiens",
    "title": "Sapiens",
    "author": "Yuval Noah Harari",
    "status": "finished",
    "photoRefs": [
      6
    ]
  },
  {
    "id": "to-the-edge-of-the-world",
    "title": "To the Edge of the World",
    "author": "Christian Wolmar",
    "status": "finished",
    "photoRefs": [
      6
    ],
    "spineTitle": "Υπερσιβηρικός: Έως την άκρη του κόσμου"
  },
  {
    "id": "the-dragon-and-the-foreign-devils",
    "title": "The Dragon and the Foreign Devils",
    "author": "Harry G. Gelber",
    "status": "finished",
    "photoRefs": [
      6
    ],
    "spineTitle": "Κίνα: Ο δράκος της Ασίας"
  },
  {
    "id": "permanent-record",
    "title": "Permanent Record",
    "author": "Edward Snowden",
    "status": "finished",
    "photoRefs": [
      6
    ],
    "spineTitle": "Το μεγάλο φακέλωμα"
  },
  {
    "id": "material-world",
    "title": "Material World",
    "author": "Ed Conway",
    "status": "finished",
    "photoRefs": [
      6
    ]
  },
  {
    "id": "the-coming-wave",
    "title": "The Coming Wave",
    "author": "Mustafa Suleyman & Michael Bhaskar",
    "status": "finished",
    "photoRefs": [
      4,
      6
    ]
  },
  {
    "id": "don-quixote",
    "title": "Don Quixote",
    "author": "Miguel de Cervantes",
    "status": "finished",
    "photoRefs": [
      7
    ],
    "spineTitle": "Ο Δον Κιχώτης",
    "catalogueNote": "Two-volume edition; volumes I and II."
  },
  {
    "id": "of-mice-and-men",
    "title": "Of Mice and Men",
    "author": "John Steinbeck",
    "status": "finished",
    "photoRefs": [
      8,
      9
    ],
    "spineTitle": "Άνθρωποι και ποντίκια"
  },
  {
    "id": "the-myth-of-sisyphus",
    "title": "The Myth of Sisyphus",
    "author": "Albert Camus",
    "status": "finished",
    "photoRefs": [
      8,
      9
    ],
    "spineTitle": "Ο μύθος του Σίσυφου"
  },
  {
    "id": "the-three-body-problem",
    "title": "The Three-Body Problem",
    "author": "Cixin Liu",
    "status": "finished",
    "photoRefs": [
      8,
      9
    ]
  },
  {
    "id": "the-dark-forest",
    "title": "The Dark Forest",
    "author": "Cixin Liu",
    "status": "finished",
    "photoRefs": [
      8,
      9
    ]
  },
  {
    "id": "deaths-end",
    "title": "Death’s End",
    "author": "Cixin Liu",
    "status": "finished",
    "photoRefs": [
      8,
      9
    ]
  },
  {
    "id": "east-of-eden",
    "title": "East of Eden",
    "author": "John Steinbeck",
    "status": "finished",
    "photoRefs": [
      8
    ],
    "spineTitle": "Ανατολικά της Εδέμ"
  },
  {
    "id": "granellas-house",
    "title": "Granella’s House",
    "author": "Luigi Pirandello",
    "status": "finished",
    "photoRefs": [
      8
    ],
    "spineTitle": "Το σπίτι του Γκρανέλλα"
  },
  {
    "id": "the-ultimate-hitchhikers-guide-to-the-galaxy",
    "title": "The Ultimate Hitchhiker’s Guide to the Galaxy",
    "author": "Douglas Adams",
    "status": "finished",
    "photoRefs": [
      9
    ],
    "catalogueNote": "Five-novel omnibus; recorded as one photographed edition."
  },
  {
    "id": "one-hundred-years-of-solitude",
    "title": "One Hundred Years of Solitude",
    "author": "Gabriel García Márquez",
    "status": "finished",
    "photoRefs": [
      9
    ],
    "spineTitle": "Εκατό χρόνια μοναξιά"
  },
  {
    "id": "nineteen-eighty-four",
    "title": "Nineteen Eighty-Four",
    "author": "George Orwell",
    "status": "finished",
    "photoRefs": [
      9
    ],
    "spineTitle": "1984"
  },
  {
    "id": "the-plague",
    "title": "The Plague",
    "author": "Albert Camus",
    "status": "finished",
    "photoRefs": [
      8,
      9
    ],
    "spineTitle": "Η πανούκλα"
  },
  {
    "id": "demons",
    "title": "Demons",
    "author": "Fyodor Dostoevsky",
    "status": "finished"
  },
  {
    "id": "leonardo-da-vinci",
    "title": "Leonardo da Vinci",
    "author": "Walter Isaacson",
    "status": "finished"
  },
  {
    "id": "the-big-short",
    "title": "The Big Short",
    "author": "Michael Lewis",
    "status": "finished"
  },
  {
    "id": "a-farewell-to-arms",
    "title": "A Farewell to Arms",
    "author": "Ernest Hemingway",
    "status": "finished"
  }
];

export const BOOKS: Book[] = catalogue.map((book) => ({
  ...book,
  coverUrl: book.coverUrl ?? (covers as Record<string, CoverMatch>)[book.id]?.coverUrl,
  url: book.url ?? (covers as Record<string, CoverMatch>)[book.id]?.sourceUrl,
}));
