import { Game } from "../contexts/LayoutContext";

export const gamesEN_US: Game[] = [
  {
    id: 'a0f88b71-5062-469a-aebe-dbc7d3a5e9af',
    title: "Sword of the Abyss",
    images: [
      "/espada_do_abismo/Espadadoabismo1.png",
      "/espada_do_abismo/Espadadoabismo2.png",
      "/espada_do_abismo/Espadadoabismo3.png",
      "/espada_do_abismo/Espadadoabismo4.png",
      "/espada_do_abismo/Espadadoabismo5.png",
      "/espada_do_abismo/Espadadoabismo6.png",
    ],
    summary: "Embark on this new adventure filled with mysteries and exploration, where you will experience the journeys of various heroes trying to save the world.",
    description: [
      {
        type: "title",
        content: "The Kingdom of Fortgrad"
      },
      {
        type: "paragraph",
        content: "The game starts in the kingdom of Fortgrad, where the protagonist resides with their family. Many young people in the kingdom train to earn the title of a member of the royal guard."
      },
      {
        type: "paragraph",
        content: "The current king of Fortgrad, Septimus, is renowned for his past in great battles. Today, in his old age, he continues his reign, albeit considerably weakened and facing health problems. Septimus has a son named Randall."
      }
    ],
    characters: [
      {
        id: '616733bf-20d1-4b20-9c8f-bfee919cc475',
        name: "Lucius",
        type: "Knight",
        age: 21,
        slug: "/espada_do_abismo/lucius1.png",
        plot: "One of his biggest dreams is to become one of the members of the royal guard. He failed the exam last year and trained for a year with the determination to become as strong and famous as his brother, Kain."
      },
      {
        id: 'ddaf19f6-73f0-4163-8f13-aed2c3ea5505',
        name: "Sherry",
        type: "Rogue",
        age: 20,
        slug: "/espada_do_abismo/sherry1.png",
        plot: "She is a childhood friend of Lucius. Her family used to live in Fortgrad, and they decided to return a few years ago. Upon reaching the minimum age to take the exam, she decided to train and try to become a member of the royal guard."
      },
      {
        id: 'a12762c0-f916-4eeb-af55-3c2364c963a7',
        name: "Kain",
        type: "Mage",
        age: 28,
        slug: "/espada_do_abismo/kain1.png",
        plot: "One of the most famous mages in the kingdom. He was a former student of Archmage Drakon and now works for him. Kain does not agree with the idea of his younger brother, Lucius, becoming a member of the royal guard."
      },
    ],
    requirements: [
      {
        id: 1,
        name: "Minimum Requirements",
        os: "Windows 7",
        processor: "Pentium Dual Core E5700 Athlon 64 X2 6400+",
        RAM: "2GB + Hard disk space of 1GB or more",
        graphics_card: "Geforce 8600 GT 256MB"
      },
      {
        id: 2,
        name: "Recommended Requirements",
        os: "Windows 8/10/11",
        processor: "Core 2 Quad Q6600 AMD Phenom II",
        RAM: "4 GB RAM + Hard disk space of 2GB or more",
        graphics_card: "Geforce 8800 GT 512MB"
      }
    ]
  },
  // Add more game data as needed
];
