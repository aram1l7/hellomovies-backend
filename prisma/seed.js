const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
async function main() {
  const movies = await prisma.movie.createMany({
    data: [
      {
        id: 1,
        title: "The Adventure Begins",
        image: "https://example.com/movie1.jpg",
        director: "John Director",
        genres: ["Action", "Adventure"],
        duration: 120,
        score: 8.5,
        rating: 4.0,
        overview: "Join the hero on an epic journey.",
        year: 2022,
        actors: ["Actor A", "Actor B"],
      },
      {
        id: 2,
        title: "Love in Paris",
        image: "https://example.com/movie2.jpg",
        director: "Emily Director",
        genres: ["Romance", "Drama"],
        duration: 105,
        score: 7.8,
        rating: 3.5,
        overview: "A tale of love and heartbreak in the city of love.",
        year: 2020,
        actors: ["Actor C", "Actor D"],
      },
      {
        id: 3,
        title: "The Mystery Unveiled",
        image: "https://example.com/movie3.jpg",
        director: "Jane Director",
        genres: ["Mystery", "Thriller"],
        duration: 130,
        score: 9.0,
        rating: 4.2,
        overview: "Solve the mystery and uncover the truth.",
        year: 2019,
        actors: ["Actor E", "Actor F"],
      },
      {
        id: 4,
        title: "Sci-Fi Extravaganza",
        image: "https://example.com/movie4.jpg",
        director: "Sam Director",
        genres: ["Science Fiction"],
        duration: 140,
        score: 8.2,
        rating: 4.1,
        overview: "Journey to the future in this thrilling sci-fi adventure.",
        year: 2021,
        actors: ["Actor G", "Actor H"],
      },
      {
        id: 5,
        title: "Comedy Carnival",
        image: "https://example.com/movie5.jpg",
        director: "Mike Director",
        genres: ["Comedy"],
        duration: 95,
        score: 7.5,
        rating: 3.8,
        overview: "Laugh out loud with this hilarious comedy.",
        year: 2023,
        actors: ["Actor I", "Actor J"],
      },
      {
        id: 6,
        title: "Action Heroes",
        image: "https://example.com/movie6.jpg",
        director: "Tom Director",
        genres: ["Action"],
        duration: 110,
        score: 8.0,
        rating: 4.0,
        overview: "Fast-paced action with unforgettable heroes.",
        year: 2022,
        actors: ["Actor K", "Actor L"],
      },
      {
        id: 7,
        title: "Dramatic Times",
        image: "https://example.com/movie7.jpg",
        director: "Lisa Director",
        genres: ["Drama"],
        duration: 115,
        score: 7.7,
        rating: 3.9,
        overview: "A gripping drama that explores human emotions.",
        year: 2021,
        actors: ["Actor M", "Actor N"],
      },
      {
        id: 8,
        title: "Fantasy Quest",
        image: "https://example.com/movie8.jpg",
        director: "Mark Director",
        genres: ["Fantasy"],
        duration: 125,
        score: 8.3,
        rating: 4.1,
        overview: "Embark on a magical journey in a world of fantasy.",
        year: 2020,
        actors: ["Actor O", "Actor P"],
      },
      {
        id: 9,
        title: "Historical Epic",
        image: "https://example.com/movie9.jpg",
        director: "Sarah Director",
        genres: ["Historical", "Adventure"],
        duration: 150,
        score: 8.7,
        rating: 4.3,
        overview: "Relive history with this epic adventure.",
        year: 2019,
        actors: ["Actor Q", "Actor R"],
      },
      {
        id: 10,
        title: "Family Fun",
        image: "https://example.com/movie10.jpg",
        director: "David Director",
        genres: ["Family", "Animation"],
        duration: 100,
        score: 7.9,
        rating: 4.0,
        overview: "A delightful animated film for the whole family.",
        year: 2023,
        actors: ["Actor S", "Actor T"],
      },
      {
        id: 11,
        title: "Romantic Escapade",
        image: "https://example.com/movie11.jpg",
        director: "Olivia Director",
        genres: ["Romance", "Comedy"],
        duration: 110,
        score: 7.6,
        rating: 3.8,
        overview: "Fall in love all over again with this romantic comedy.",
        year: 2021,
        actors: ["Actor U", "Actor V"],
      },
      {
        id: 12,
        title: "Sci-Fi Odyssey",
        image: "https://example.com/movie12.jpg",
        director: "Chris Director",
        genres: ["Science Fiction", "Adventure"],
        duration: 135,
        score: 8.4,
        rating: 4.1,
        overview: "Explore the universe in this mind-bending sci-fi journey.",
        year: 2022,
        actors: ["Actor W", "Actor X"],
      },
      {
        id: 13,
        title: "Thrilling Mystery",
        image: "https://example.com/movie13.jpg",
        director: "Alex Director",
        genres: ["Mystery", "Thriller"],
        duration: 125,
        score: 8.0,
        rating: 4.0,
        overview:
          "Solve the mystery before it's too late in this thrilling tale.",
        year: 2020,
        actors: ["Actor Y", "Actor Z"],
      },
      {
        id: 14,
        title: "Fantasy World",
        image: "https://example.com/movie14.jpg",
        director: "Ella Director",
        genres: ["Fantasy", "Adventure"],
        duration: 140,
        score: 8.6,
        rating: 4.2,
        overview: "Enter a magical world filled with wonders and dangers.",
        year: 2019,
        actors: ["Actor AA", "Actor BB"],
      },
      {
        id: 15,
        title: "Intriguing Drama",
        image: "https://example.com/movie15.jpg",
        director: "Ryan Director",
        genres: ["Drama"],
        duration: 115,
        score: 7.7,
        rating: 3.9,
        overview: "A gripping drama that explores complex human relationships.",
        year: 2023,
        actors: ["Actor CC", "Actor DD"],
      },
      {
        id: 16,
        title: "Action Packed",
        image: "https://example.com/movie16.jpg",
        director: "Tommy Director",
        genres: ["Action", "Adventure"],
        duration: 130,
        score: 8.3,
        rating: 4.1,
        overview: "Buckle up for non-stop action and adventure.",
        year: 2021,
        actors: ["Actor EE", "Actor FF"],
      },
      {
        id: 17,
        title: "Animated Delight",
        image: "https://example.com/movie17.jpg",
        director: "Lucy Director",
        genres: ["Family", "Animation"],
        duration: 95,
        score: 7.9,
        rating: 4.0,
        overview: "A heartwarming animated film for the whole family.",
        year: 2022,
        actors: ["Actor GG", "Actor HH"],
      },
      {
        id: 18,
        title: "Epic Fantasy",
        image: "https://example.com/movie18.jpg",
        director: "Michael Director",
        genres: ["Fantasy", "Adventure"],
        duration: 145,
        score: 8.7,
        rating: 4.3,
        overview: "Embark on a grand adventure in a magical world.",
        year: 2020,
        actors: ["Actor II", "Actor JJ"],
      },
      {
        id: 19,
        title: "Historical Drama",
        image: "https://example.com/movie19.jpg",
        director: "Sophie Director",
        genres: ["Historical", "Drama"],
        duration: 125,
        score: 8.0,
        rating: 4.0,
        overview:
          "Experience history through the eyes of unforgettable characters.",
        year: 2019,
        actors: ["Actor KK", "Actor LL"],
      },
      {
        id: 20,
        title: "Feel-Good Comedy",
        image: "https://example.com/movie20.jpg",
        director: "Robert Director",
        genres: ["Comedy"],
        duration: 110,
        score: 7.6,
        rating: 3.8,
        overview: "Laugh and lighten up with this delightful comedy.",
        year: 2023,
        actors: ["Actor MM", "Actor NN"],
      },
      {
        id: 21,
        title: "Romantic Retreat",
        image: "https://example.com/movie21.jpg",
        director: "Grace Director",
        genres: ["Romance", "Drama"],
        duration: 120,
        score: 7.8,
        rating: 3.7,
        overview: "Escape to a world of romance and emotions.",
        year: 2021,
        actors: ["Actor OO", "Actor PP"],
      },
      {
        id: 22,
        title: "Sci-Fi Adventure",
        image: "https://example.com/movie22.jpg",
        director: "Daniel Director",
        genres: ["Science Fiction", "Adventure"],
        duration: 135,
        score: 8.4,
        rating: 4.2,
        overview:
          "Journey through the cosmos in this thrilling sci-fi adventure.",
        year: 2022,
        actors: ["Actor QQ", "Actor RR"],
      },
      {
        id: 23,
        title: "Mysterious Thrills",
        image: "https://example.com/movie23.jpg",
        director: "Liam Director",
        genres: ["Mystery", "Thriller"],
        duration: 125,
        score: 8.1,
        rating: 4.0,
        overview: "Unravel dark secrets in this suspenseful thriller.",
        year: 2020,
        actors: ["Actor SS", "Actor TT"],
      },
      {
        id: 24,
        title: "Fantasy World",
        image: "https://example.com/movie24.jpg",
        director: "Ella Director",
        genres: ["Fantasy", "Adventure"],
        duration: 140,
        score: 8.6,
        rating: 4.2,
        overview: "Enter a magical world filled with wonders and dangers.",
        year: 2019,
        actors: ["Actor UU", "Actor VV"],
      },
      {
        id: 25,
        title: "Intriguing Drama",
        image: "https://example.com/movie25.jpg",
        director: "Ryan Director",
        genres: ["Drama"],
        duration: 115,
        score: 7.7,
        rating: 3.9,
        overview: "A gripping drama that explores complex human relationships.",
        year: 2023,
        actors: ["Actor WW", "Actor XX"],
      },
      {
        id: 26,
        title: "Action Packed",
        image: "https://example.com/movie26.jpg",
        director: "Tommy Director",
        genres: ["Action", "Adventure"],
        duration: 130,
        score: 8.3,
        rating: 4.1,
        overview: "Buckle up for non-stop action and adventure.",
        year: 2021,
        actors: ["Actor YY", "Actor ZZ"],
      },
      {
        id: 27,
        title: "Animated Delight",
        image: "https://example.com/movie27.jpg",
        director: "Lucy Director",
        genres: ["Family", "Animation"],
        duration: 95,
        score: 7.9,
        rating: 4.0,
        overview: "A heartwarming animated film for the whole family.",
        year: 2022,
        actors: ["Actor AAA", "Actor BBB"],
      },
      {
        id: 28,
        title: "Epic Fantasy",
        image: "https://example.com/movie28.jpg",
        director: "Michael Director",
        genres: ["Fantasy", "Adventure"],
        duration: 145,
        score: 8.7,
        rating: 4.3,
        overview: "Embark on a grand adventure in a magical world.",
        year: 2020,
        actors: ["Actor CCC", "Actor DDD"],
      },
      {
        id: 29,
        title: "Historical Drama",
        image: "https://example.com/movie29.jpg",
        director: "Sophie Director",
        genres: ["Historical", "Drama"],
        duration: 125,
        score: 8.0,
        rating: 4.0,
        overview:
          "Experience history through the eyes of unforgettable characters.",
        year: 2019,
        actors: ["Actor EEE", "Actor FFF"],
      },
      {
        id: 30,
        title: "Feel-Good Comedy",
        image: "https://example.com/movie30.jpg",
        director: "Robert Director",
        genres: ["Comedy"],
        duration: 110,
        score: 7.6,
        rating: 3.8,
        overview: "Laugh and lighten up with this delightful comedy.",
        year: 2023,
        actors: ["Actor GGG", "Actor HHH"],
      },
      {
        id: 31,
        title: "Romantic Retreat",
        image: "https://example.com/movie31.jpg",
        director: "Grace Director",
        genres: ["Romance", "Drama"],
        duration: 120,
        score: 7.8,
        rating: 3.7,
        overview: "Escape to a world of romance and emotions.",
        year: 2021,
        actors: ["Actor III", "Actor JJJ"],
      },
      {
        id: 32,
        title: "Sci-Fi Adventure",
        image: "https://example.com/movie32.jpg",
        director: "Daniel Director",
        genres: ["Science Fiction", "Adventure"],
        duration: 135,
        score: 8.4,
        rating: 4.2,
        overview:
          "Journey through the cosmos in this thrilling sci-fi adventure.",
        year: 2022,
        actors: ["Actor KKK", "Actor LLL"],
      },
      {
        id: 33,
        title: "Mysterious Thrills",
        image: "https://example.com/movie33.jpg",
        director: "Liam Director",
        genres: ["Mystery", "Thriller"],
        duration: 125,
        score: 8.1,
        rating: 4.0,
        overview: "Unravel dark secrets in this suspenseful thriller.",
        year: 2020,
        actors: ["Actor MMM", "Actor NNN"],
      },
      {
        id: 34,
        title: "Fantasy World",
        image: "https://example.com/movie34.jpg",
        director: "Ella Director",
        genres: ["Fantasy", "Adventure"],
        duration: 140,
        score: 8.6,
        rating: 4.2,
        overview: "Enter a magical world filled with wonders and dangers.",
        year: 2019,
        actors: ["Actor OOO", "Actor PPP"],
      },
      {
        id: 35,
        title: "Intriguing Drama",
        image: "https://example.com/movie35.jpg",
        director: "Ryan Director",
        genres: ["Drama"],
        duration: 115,
        score: 7.7,
        rating: 3.9,
        overview: "A gripping drama that explores complex human relationships.",
        year: 2023,
        actors: ["Actor QQQ", "Actor RRR"],
      },
      {
        id: 36,
        title: "Action Packed",
        image: "https://example.com/movie36.jpg",
        director: "Tommy Director",
        genres: ["Action", "Adventure"],
        duration: 130,
        score: 8.3,
        rating: 4.1,
        overview: "Buckle up for non-stop action and adventure.",
        year: 2021,
        actors: ["Actor SSS", "Actor TTT"],
      },
      {
        id: 37,
        title: "Animated Delight",
        image: "https://example.com/movie37.jpg",
        director: "Lucy Director",
        genres: ["Family", "Animation"],
        duration: 95,
        score: 7.9,
        rating: 4.0,
        overview: "A heartwarming animated film for the whole family.",
        year: 2022,
        actors: ["Actor UUU", "Actor VVV"],
      },
      {
        id: 38,
        title: "Epic Fantasy",
        image: "https://example.com/movie38.jpg",
        director: "Michael Director",
        genres: ["Fantasy", "Adventure"],
        duration: 145,
        score: 8.7,
        rating: 4.3,
        overview: "Embark on a grand adventure in a magical world.",
        year: 2020,
        actors: ["Actor WWW", "Actor XXX"],
      },
      {
        id: 39,
        title: "Historical Drama",
        image: "https://example.com/movie39.jpg",
        director: "Sophie Director",
        genres: ["Historical", "Drama"],
        duration: 125,
        score: 8.0,
        rating: 4.0,
        overview:
          "Experience history through the eyes of unforgettable characters.",
        year: 2019,
        actors: ["Actor YYY", "Actor ZZZ"],
      },
      {
        id: 40,
        title: "Feel-Good Comedy",
        image: "https://example.com/movie40.jpg",
        director: "Robert Director",
        genres: ["Comedy"],
        duration: 110,
        score: 7.6,
        rating: 3.8,
        overview: "Laugh and lighten up with this delightful comedy.",
        year: 2023,
        actors: ["Actor AAAA", "Actor BBBB"],
      },
      {
        id: 41,
        title: "Romantic Retreat",
        image: "https://example.com/movie41.jpg",
        director: "Grace Director",
        genres: ["Romance", "Drama"],
        duration: 120,
        score: 7.8,
        rating: 3.7,
        overview: "Escape to a world of romance and emotions.",
        year: 2021,
        actors: ["Actor CCCC", "Actor DDDD"],
      },
      {
        id: 42,
        title: "Sci-Fi Adventure",
        image: "https://example.com/movie42.jpg",
        director: "Daniel Director",
        genres: ["Science Fiction", "Adventure"],
        duration: 135,
        score: 8.4,
        rating: 4.2,
        overview:
          "Journey through the cosmos in this thrilling sci-fi adventure.",
        year: 2022,
        actors: ["Actor EEEE", "Actor FFFF"],
      },
      {
        id: 43,
        title: "Mysterious Thrills",
        image: "https://example.com/movie43.jpg",
        director: "Liam Director",
        genres: ["Mystery", "Thriller"],
        duration: 125,
        score: 8.1,
        rating: 4.0,
        overview: "Unravel dark secrets in this suspenseful thriller.",
        year: 2020,
        actors: ["Actor GGGG", "Actor HHHH"],
      },
      {
        id: 44,
        title: "Fantasy World",
        image: "https://example.com/movie44.jpg",
        director: "Ella Director",
        genres: ["Fantasy", "Adventure"],
        duration: 140,
        score: 8.6,
        rating: 4.2,
        overview: "Enter a magical world filled with wonders and dangers.",
        year: 2019,
        actors: ["Actor IIII", "Actor JJJJ"],
      },
      {
        id: 45,
        title: "Intriguing Drama",
        image: "https://example.com/movie45.jpg",
        director: "Ryan Director",
        genres: ["Drama"],
        duration: 115,
        score: 7.7,
        rating: 3.9,
        overview: "A gripping drama that explores complex human relationships.",
        year: 2023,
        actors: ["Actor KKKK", "Actor LLLL"],
      },
      {
        id: 46,
        title: "Action Packed",
        image: "https://example.com/movie46.jpg",
        director: "Tommy Director",
        genres: ["Action", "Adventure"],
        duration: 130,
        score: 8.3,
        rating: 4.1,
        overview: "Buckle up for non-stop action and adventure.",
        year: 2021,
        actors: ["Actor MMMM", "Actor NNNN"],
      },
      {
        id: 47,
        title: "Animated Delight",
        image: "https://example.com/movie47.jpg",
        director: "Lucy Director",
        genres: ["Family", "Animation"],
        duration: 95,
        score: 7.9,
        rating: 4.0,
        overview: "A heartwarming animated film for the whole family.",
        year: 2022,
        actors: ["Actor OOOO", "Actor PPPP"],
      },
      {
        id: 48,
        title: "Epic Fantasy",
        image: "https://example.com/movie48.jpg",
        director: "Michael Director",
        genres: ["Fantasy", "Adventure"],
        duration: 145,
        score: 8.7,
        rating: 4.3,
        overview: "Embark on a grand adventure in a magical world.",
        year: 2020,
        actors: ["Actor QQQQ", "Actor RRRR"],
      },
      {
        id: 49,
        title: "Historical Drama",
        image: "https://example.com/movie49.jpg",
        director: "Sophie Director",
        genres: ["Historical", "Drama"],
        duration: 125,
        score: 8.0,
        rating: 4.0,
        overview:
          "Experience history through the eyes of unforgettable characters.",
        year: 2019,
        actors: ["Actor SSSS", "Actor TTTT"],
      },
      {
        id: 50,
        title: "Feel-Good Comedy",
        image: "https://example.com/movie50.jpg",
        director: "Robert Director",
        genres: ["Comedy"],
        duration: 110,
        score: 7.6,
        rating: 3.8,
        overview: "Laugh and lighten up with this delightful comedy.",
        year: 2023,
        actors: ["Actor UUUU", "Actor VVVV"],
      },
    ],
  });
  console.log(movies);
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
