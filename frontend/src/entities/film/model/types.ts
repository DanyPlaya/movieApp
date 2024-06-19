export type Film = {
  id: number;
  release_year: string;
  duration: number;
  genre: string;
  summary: string;
  title: string;
  rating: number;
  director: string;
  studio: string;
  image: string;
};

export const films: Film[] = [
  {
    id: 1,
    release_year: "2019",
    duration: 181,
    genre: "Action",
    summary:
      "The Avengers assemble once more in order to reverse Thanos' actions.",
    title: "Avengers: Endgame",
    rating: 8,
    director: "Anthony Russo, Joe Russo",
    studio: "Marvel Studios",
    image: "https://image.tmdb.org/t/p/w500/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg",
  },
  {
    id: 2,
    release_year: "2019",
    duration: 132,
    genre: "Drama",
    summary:
      "A gripping story of a marriage breaking up and a family staying together.",
    title: "Marriage Story",
    rating: 8,
    director: "Noah Baumbach",
    studio: "Netflix",
    image: "https://image.tmdb.org/t/p/w500/pbGveUCY4bi9LEcqlLkFPleK6Xe.jpg",
  },
  {
    id: 3,
    release_year: "2020",
    duration: 150,
    genre: "Action",
    summary: "A soldier fights through time to save the world.",
    title: "Tenet",
    rating: 7,
    director: "Christopher Nolan",
    studio: "Warner Bros. Pictures",
    image: "https://image.tmdb.org/t/p/w500/k68nPLbIST6NP96JmTxmZijEvCA.jpg",
  },
  {
    id: 4,
    release_year: "2019",
    duration: 122,
    genre: "Comedy",
    summary: "Two co-workers fall in love amidst a workplace comedy.",
    title: "Long Shot",
    rating: 6,
    director: "Jonathan Levine",
    studio: "Lionsgate",
    image: "https://image.tmdb.org/t/p/w500/m2ttWZ8rMRwIMT7zA48Jo6mTkDS.jpg",
  },
  {
    id: 5,
    release_year: "2018",
    duration: 140,
    genre: "Horror",
    summary: "A family must live in silence to avoid mysterious creatures.",
    title: "A Quiet Place",
    rating: 7,
    director: "John Krasinski",
    studio: "Platinum Dunes",
    image: "https://image.tmdb.org/t/p/w500/nAU74GmpUk7t5iklEp3bufwDq4n.jpg",
  },
  {
    id: 6,
    release_year: "2018",
    duration: 129,
    genre: "Action",
    summary:
      "A young African prince inherits the throne and must protect his nation.",
    title: "Black Panther",
    rating: 7,
    director: "Ryan Coogler",
    studio: "Marvel Studios",
    image: "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
  },
  {
    id: 7,
    release_year: "2017",
    duration: 121,
    genre: "Thriller",
    summary: "A social worker fights to protect a young girl from abuse.",
    title: "The Girl with All the Gifts",
    rating: 6,
    director: "Colm McCarthy",
    studio: "Warner Bros. Pictures",
    image: "https://image.tmdb.org/t/p/w500/5W2hVZFDdJYPL0Z9NH0KTUwHNM8.jpg",
  },
  {
    id: 8,
    release_year: "2016",
    duration: 115,
    genre: "Sci-Fi",
    summary:
      "A linguist works with the military to communicate with alien lifeforms.",
    title: "Arrival",
    rating: 8,
    director: "Denis Villeneuve",
    studio: "Paramount Pictures",
    image: "https://image.tmdb.org/t/p/w500/xeItgLK9qcafxbd8kYgv7XnMEog.jpg",
  },
  {
    id: 9,
    release_year: "2015",
    duration: 135,
    genre: "Drama",
    summary: "A New York socialite dreams of becoming a singer.",
    title: "Florence Foster Jenkins",
    rating: 7,
    director: "Stephen Frears",
    studio: "Pathé",
    image: "https://image.tmdb.org/t/p/w500/8M1m5Hkf7YiEB71fGMpT64HCv9J.jpg",
  },
  {
    id: 10,
    release_year: "2015",
    duration: 150,
    genre: "Action",
    summary: "An apocalyptic story set in the furthest reaches of our planet.",
    title: "Mad Max: Fury Road",
    rating: 8,
    director: "George Miller",
    studio: "Warner Bros. Pictures",
    image: "https://image.tmdb.org/t/p/w500/hA2ple9q4qnwxp3hKVOnLrjnz9t.jpg",
  },
  {
    id: 11,
    release_year: "2014",
    duration: 169,
    genre: "Sci-Fi",
    summary:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    title: "Interstellar",
    rating: 8,
    director: "Christopher Nolan",
    studio: "Paramount Pictures",
    image: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
  },
  {
    id: 12,
    release_year: "2013",
    duration: 140,
    genre: "Drama",
    summary:
      "The story of a man who falls in love with a computer operating system.",
    title: "Her",
    rating: 8,
    director: "Spike Jonze",
    studio: "Annapurna Pictures",
    image: "https://image.tmdb.org/t/p/w500/p4yVmJXL1f4wyFFf6KOpvxyEqyL.jpg",
  },
  {
    id: 13,
    release_year: "2012",
    duration: 143,
    genre: "Drama",
    summary:
      "A biopic depicting the last four months of President Lincoln's life.",
    title: "Lincoln",
    rating: 7,
    director: "Steven Spielberg",
    studio: "DreamWorks Pictures",
    image: "https://image.tmdb.org/t/p/w500/hPzrBRoT7eXPSo6gddZ17Wb9fAJ.jpg",
  },
  {
    id: 14,
    release_year: "2011",
    duration: 117,
    genre: "Comedy",
    summary:
      "A look at the lives of staff members working in a bustling office.",
    title: "Horrible Bosses",
    rating: 6,
    director: "Seth Gordon",
    studio: "Warner Bros. Pictures",
    image: "https://image.tmdb.org/t/p/w500/2tTLFAjJhizjWONwKjUOWVrCgqi.jpg",
  },
  {
    id: 15,
    release_year: "2010",
    duration: 148,
    genre: "Action",
    summary:
      "A thief who steals corporate secrets through dream-sharing technology.",
    title: "Inception",
    rating: 8,
    director: "Christopher Nolan",
    studio: "Warner Bros. Pictures",
    image: "https://image.tmdb.org/t/p/w500/8tSg5QRHxeBlS7teGjoxwITv35d.jpg",
  },
  {
    id: 16,
    release_year: "2009",
    duration: 162,
    genre: "Fantasy",
    summary:
      "A paraplegic Marine dispatched to the moon Pandora on a unique mission.",
    title: "Avatar",
    rating: 7,
    director: "James Cameron",
    studio: "20th Century Fox",
    image: "https://image.tmdb.org/t/p/w500/kaIfm5ryEOwYg8mLbq8HkPuM1Fo.jpg",
  },
  {
    id: 17,
    release_year: "2008",
    duration: 152,
    genre: "Action",
    summary: "Batman raises the stakes in his war on crime.",
    title: "The Dark Knight",
    rating: 9,
    director: "Christopher Nolan",
    studio: "Warner Bros. Pictures",
    image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
  },
  {
    id: 18,
    release_year: "2007",
    duration: 117,
    genre: "Comedy",
    summary:
      "A pregnant teenager makes a plan to find a suitable adoptive couple.",
    title: "Juno",
    rating: 7,
    director: "Jason Reitman",
    studio: "Fox Searchlight Pictures",
    image: "https://image.tmdb.org/t/p/w500/gpy5pOSjJjFLf3pCsjI6MMbNVED.jpg",
  },
  {
    id: 19,
    release_year: "2006",
    duration: 115,
    genre: "Action",
    summary:
      "A young police officer must prevent a bomb from exploding aboard a city bus.",
    title: "Speed",
    rating: 7,
    director: "Jan de Bont",
    studio: "20th Century Fox",
    image: "https://image.tmdb.org/t/p/w500/o5HDG5A41hAek4G0FyFd4s7NVtC.jpg",
  },
  {
    id: 20,
    release_year: "2005",
    duration: 115,
    genre: "Action",
    summary:
      "A paraplegic Marine dispatched to the moon Pandora on a unique mission.",
    title: "Avatar",
    rating: 7,
    director: "James Cameron",
    studio: "20th Century Fox",
    image: "https://image.tmdb.org/t/p/w500/kaIfm5ryEOwYg8mLbq8HkPuM1Fo.jpg",
  },
];