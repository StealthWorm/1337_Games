import { Game } from "../contexts/LayoutContext";

export const gamesPT_BR: Game[] = [
  {
    id: 'a0f88b71-5062-469a-aebe-dbc7d3a5e9af',
    title: "Espada do Abismo",
    images: [
      "/espada_do_abismo/Espadadoabismo1.png",
      "/espada_do_abismo/Espadadoabismo2.png",
      "/espada_do_abismo/Espadadoabismo3.png",
      "/espada_do_abismo/Espadadoabismo4.png",
      "/espada_do_abismo/Espadadoabismo5.png",
      "/espada_do_abismo/Espadadoabismo6.png",
    ],
    summary: "Embarque nesta nova aventura repleta de mistérios e exploração, onde você vivenciará as jornadas de vários heróis tentando salvar o mundo.",
    description: [
      {
        type: "title",
        content: "O reino de Fortgrad"
      },
      {
        type: "paragraph",
        content: "O jogo começa no reino de Fortgrad, onde o protagonista reside com sua família. Muitos jovens no reino treinam para conquistar o título de membro da guarda real."
      },
      {
        type: "paragraph",
        content: "O atual rei de Fortgrad, Septimus, é renomado por seu passado em grandes batalhas. Hoje, em sua idade avançada, ele continua seu reinado, embora consideravelmente enfraquecido e enfrentando problemas de saúde. Septimus tem um filho chamado Randall."
      }
    ],
    characters: [
      {
        id: '616733bf-20d1-4b20-9c8f-bfee919cc475',
        name: "Lucius",
        type: "Cavaleiro",
        age: 21,
        slug: "/espada_do_abismo/lucius1.png",
        plot: "Um de seus maiores sonhos é tornar-se um dos membros da guarda real. Ele reprovou no exame no ano passado e treinou por um ano com a determinação de se tornar tão forte e famoso quanto seu irmão, Kain."
      },
      {
        id: 'ddaf19f6-73f0-4163-8f13-aed2c3ea5505',
        name: "Sherry",
        type: "Ladina",
        age: 20,
        slug: "/espada_do_abismo/sherry1.png",
        plot: "Ela é uma amiga de infância de Lucius. Sua família costumava morar em Fortgrad, e decidiram voltar alguns anos atrás. Ao atingir a idade mínima para fazer o exame, ela decidiu treinar e tentar tornar-se membro da guarda real."
      },
      {
        id: 'a12762c0-f916-4eeb-af55-3c2364c963a7',
        name: "Kain",
        type: "Mago",
        age: 28,
        slug: "/espada_do_abismo/kain1.png",
        plot: "Um dos magos mais famosos do reino. Ele foi um ex-aluno do Arquimago Drakon e agora trabalha para ele. Kain não concorda com a ideia de seu irmão mais novo, Lucius, tornar-se membro da guarda real."
      }
    ],
    requirements: [
      {
        id: 1,
        name: "Requisitos Mínimos",
        os: "Windows 7",
        processor: "Pentium Dual Core E5700 Athlon 64 X2 6400+",
        RAM: "2GB + Espaço no disco rígido de 1GB ou mais",
        graphics_card: "Geforce 8600 GT 256MB"
      },
      {
        id: 2,
        name: "Requisitos Recomendados",
        os: "Windows 8/10/11",
        processor: "Core 2 Quad Q6600 AMD Phenom II",
        RAM: "4 GB RAM + Espaço no disco rígido de 2GB ou mais",
        graphics_card: "Geforce 8800 GT 512MB"
      }
    ]
  },
  // Add more game data as needed
];