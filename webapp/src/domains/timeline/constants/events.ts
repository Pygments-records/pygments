import type { TimelineEvent } from "../models/TimelineEvent";
import dayjs from "dayjs";

export const events: TimelineEvent[] = [
  {
    date: dayjs("2022-06-21").toDate(),
    title: "Fête de la musique 2022",
    description:
      "C’est lors de la fête de la musique que nous avons posé nos platine pour démarrer notre aventure.",
    location: {
      address: "39 Rue Beaubourg, 75003 Paris",
      label: "Le Trente Neuf Bar",
    },
    pictures: [
      "/fdm-2022/img-1.jpg",
      "/fdm-2022/img-2.jpg",
      "/fdm-2022/img-3.jpg",
      "/fdm-2022/img-4.jpg",
      "/fdm-2022/img-5.jpg",
      "/fdm-2022/img-6.jpg",
      "/fdm-2022/img-7.jpg",
      "/fdm-2022/img-8.jpg",
      "/fdm-2022/img-9.jpg",
      "/fdm-2022/img-10.jpg",
      "/fdm-2022/img-11.jpg",
    ],
    artists: [],
    categories: ["House", "Acid House", "Techno", "Disco House"],
  },
  {
    date: dayjs("2022-07-21").toDate(),
    title: "Apéro Pygments",
    description:
      "Deuxième évènement Pygments tout pile un mois après la FDM, c’est dans notre quartier d’origine que nous avons posé nos valises. Jo&Joe Paris Nation nous a ouvert sa salle ainsi que son Rooftop pour une magnifique soirée d’été.",
    location: {
      address: "59 rue de Buzenval, 75020, Paris",
      label: "JO&JOE Paris Nation",
    },
    pictures: [
      "/Apero-Pygments/img-1.jpg",
      "/Apero-Pygments/img-2.jpg",
      "/Apero-Pygments/img-3.jpg",
      "/Apero-Pygments/img-4.jpg",
      "/Apero-Pygments/img-5.jpg",
      "/Apero-Pygments/img-6.jpg",
      "/Apero-Pygments/img-7.jpg",
      "/Apero-Pygments/img-8.jpg",
      "/Apero-Pygments/img-9.jpg",
      "/Apero-Pygments/img-10.jpg",
      "/Apero-Pygments/img-11.jpg",
      "/Apero-Pygments/img-12.jpg",
      "/Apero-Pygments/img-13.jpg",
      "/Apero-Pygments/img-14.jpg",
      "/Apero-Pygments/img-15.jpg",
      "/Apero-Pygments/img-16.jpg",
      "/Apero-Pygments/img-17.jpg",
      "/Apero-Pygments/img-18.jpg",
      "/Apero-Pygments/img-19.jpg",
      "/Apero-Pygments/img-20.jpg",
      "/Apero-Pygments/img-21.jpg",
      "/Apero-Pygments/img-22.jpg",
      "/Apero-Pygments/img-23.jpg",
      "/Apero-Pygments/img-24.jpg",
      "/Apero-Pygments/img-25.jpg",
      "/Apero-Pygments/img-26.jpg",
    ],
    artists: [],
    categories: ["House", "Acid House", "Disco House"],
  },
  {
    date: dayjs("2022-08-26").toDate(),
    title: "Pygments on a Rooftop",
    description:
      "Une expérience inédite : une série de 4 sets filmés sur un rooftop un matin d'août aux aurores. Au programme, un voyage musicale de 3h sans précédent accompagné d'un levé de soleil qui nous a emporté dans les chaleurs estivales!",
    location: {
      address: "59 rue de Buzenval, 75020, Paris",
      label: "JO&JOE Paris Nation",
    },
    pictures: [
      "/pygments-rooftop/img-1.jpg",
      "/pygments-rooftop/img-3.jpg",
      "/pygments-rooftop/img-4.jpg",
      "/pygments-rooftop/img-5.jpg",
      "/pygments-rooftop/img-6.jpg",
      "/pygments-rooftop/img-7.jpg",
      "/pygments-rooftop/img-8.jpg",
      "/pygments-rooftop/img-9.jpg",
      "/pygments-rooftop/img-10.jpg",
      "/pygments-rooftop/img-11.jpg",
      "/pygments-rooftop/img-12.jpg",
      "/pygments-rooftop/img-13.jpg",
      "/pygments-rooftop/img-14.jpg",
      "/pygments-rooftop/img-15.jpg",
      "/pygments-rooftop/img-16.jpg",
      "/pygments-rooftop/img-17.jpg",
      "/pygments-rooftop/img-18.jpg",
      "/pygments-rooftop/img-19.jpg",
      "/pygments-rooftop/img-20.jpg",
      "/pygments-rooftop/img-21.jpg",
    ],
    artists: [],
    categories: ["Dark minimal", "Techno", "Drill", "House"],
  },
  {
    date: dayjs("2022-10-06").toDate(),
    title: "Punk Paradise",
    description:
      "Après deux évènements plutôt House, nous avons changé d’ambiance pour passer du côté obscur avec au programme Techno, Acid et Indus ! Le 6 Octobre on a tapé fort du pied jusqu’au bout de la nuit !",
    location: {
      address: "44 Rue de la Folie Méricourt, 75011 Paris",
      label: "Punk Paradise",
    },
    pictures: [
      "/punk-paradise/img-1.jpg",
      "/punk-paradise/img-2.jpg",
      "/punk-paradise/img-4.jpg",
      "/punk-paradise/img-5.jpg",
      "/punk-paradise/img-3.jpg",
      "/punk-paradise/img-6.jpg",
      "/punk-paradise/img-8.jpg",
      "/punk-paradise/img-7.jpg",
      "/punk-paradise/img-9.jpg",
      "/punk-paradise/img-10.jpg",
      "/punk-paradise/img-11.jpg",
    ],
    artists: [],
    categories: ["Techno", "Ghetto House", "Acid", "Indus"],
  },
  {
    date: dayjs("2022-10-26").toDate(),
    title: "Pygments Lab #1",
    description:
      "Pygments LAB: le laboratoire des artistes qui expérimentent en toute liberté ! Première soirée de ce nouveau concept au sein de notre résidence JO&JOE, ce sont des artistes aux styles peu communs qui ont été invités : Vraiment Perceval et Cattomix. Ils ont été accompagnés par In-Tan et Kelbail.",
    location: {
      address: "59 Rue de Buzenval, 75020 Paris",
      label: "JO&JOE Paris Nation",
    },
    pictures: [
      "/pygments-lab-1/img-1.jpg",
      "/pygments-lab-1/img-2.jpg",
      "/pygments-lab-1/img-3.jpg",
      "/pygments-lab-1/img-4.jpg",
      "/pygments-lab-1/img-5.jpg",
      "/pygments-lab-1/img-6.jpg",
      "/pygments-lab-1/img-7.jpg",
      "/pygments-lab-1/img-8.jpg",
      "/pygments-lab-1/img-9.jpg",
      "/pygments-lab-1/img-10.jpg",
      "/pygments-lab-1/img-11.jpg",
      "/pygments-lab-1/img-12.jpg",
      "/pygments-lab-1/img-13.jpg",
      "/pygments-lab-1/img-14.jpg",
      "/pygments-lab-1/img-15.jpg",
    ],
    artists: [],
    categories: ["House", "Techno", "Disco House"],
  },
  {
    date: dayjs("2022-11-16").toDate(),
    title: "Pygments Lab #2",
    description:
      "Pour cette deuxième édition on a reçu Palorim et Chich, deux artistes qui nous ont concoctés des DJ Sets incroyables! Côté Pygments Records, Kojo Kara a effectué un premier passage au Pygments LAB et IN-TAN et KELBAIL se sont lancés dans un B2B d’exception !",
    location: {
      address: "59 Rue de Buzenval, 75020 Paris",
      label: "JO&JOE Paris Nation",
    },
    pictures: [
      "/pygments-lab-2/img-1.jpg",
      "/pygments-lab-2/img-2.jpg",
      "/pygments-lab-2/img-3.jpg",
      "/pygments-lab-2/img-4.jpg",
      "/pygments-lab-2/img-5.jpg",
      "/pygments-lab-2/img-6.jpg",
      "/pygments-lab-2/img-7.jpg",
      "/pygments-lab-2/img-8.jpg",
      "/pygments-lab-2/img-9.jpg",
      "/pygments-lab-2/img-10.jpg",
      "/pygments-lab-2/img-11.jpg",
      "/pygments-lab-2/img-12.jpg",
      "/pygments-lab-2/img-13.jpg",
      "/pygments-lab-2/img-14.jpg",
      "/pygments-lab-2/img-15.jpg",
      "/pygments-lab-2/img-16.jpg",
    ],
    artists: [],
    categories: ["House", "Electro House"],
  },
  {
    date: dayjs("2022-12-02").toDate(),
    title: "Pygments LAB #3 - Fluctuart",
    description:
      "Pour sa troisième édition, le Pygments LAB a posé ses éprouvettes au Fluctuart, premier centre d’art urbain flottant au monde ! Une édition XXL avec pas moins de 8 artistes qui sont venus enflammer les paillasses de 18h30 à 1h30 !",
    location: {
      address: "2 Port du Gros Caillou, 75007 Paris",
      label: "Fluctuart - Centre d'art urbain",
    },
    pictures: [
      "/pygments-lab-3/img-1.jpg",
      "/pygments-lab-3/img-2.jpg",
      "/pygments-lab-3/img-3.jpg",
      "/pygments-lab-3/img-4.jpg",
      "/pygments-lab-3/img-5.jpg",
      "/pygments-lab-3/img-6.jpg",
      "/pygments-lab-3/img-7.jpg",
      "/pygments-lab-3/img-8.jpg",
      "/pygments-lab-3/img-9.jpg",
      "/pygments-lab-3/img-10.jpg",
      "/pygments-lab-3/img-11.jpg",
      "/pygments-lab-3/img-12.jpg",
      "/pygments-lab-3/img-13.jpg",
      "/pygments-lab-3/img-14.jpg",
    ],
    artists: [],
    categories: ["House", "Minimal", "Italo Disco"],
  },
  {
    date: dayjs("2022-12-08").toDate(),
    title: "Panic Room",
    description:
      "Pour notre cinquième évènement, nous vous avons emmenés dans un voyage House to Techno dont on se souviendra très longtemps ! Pour l’occasion, tous les artistes Pygments étaient présents et nous avons eu l’honneur de recevoir un invité très spécial venu de chez Dissidance !",
    location: {
      address: "101 Rue Amelot, 75011 Paris",
      label: "Panic Room",
    },
    pictures: [
      "/panic-room/img-1.jpg",
      "/panic-room/img-2.jpg",
      "/panic-room/img-3.jpg",
      "/panic-room/img-4.jpg",
      "/panic-room/img-5.jpg",
      "/panic-room/img-6.jpg",
      "/panic-room/img-7.jpg",
      "/panic-room/img-8.jpg",
      "/panic-room/img-9.jpg",
      "/panic-room/img-10.jpg",
      "/panic-room/img-11.jpg",
      "/panic-room/img-12.jpg",
      "/panic-room/img-13.jpg",
      "/panic-room/img-14.jpg",
      "/panic-room/img-15.jpg",
      "/panic-room/img-16.jpg",
      "/panic-room/img-17.jpg",
      "/panic-room/img-18.jpg",
      "/panic-room/img-19.jpg",
    ],
    artists: [],
    categories: ["House", "Techno", "Italo Disco"],
  },
  {
    date: dayjs("2022-07-21").toDate(),
    title: "Pygments LAB #4",
    description:
      "Pour notre dernier évènement de l’année 2022, ce sont trois artistes extérieurs qui furent présents pour cette session du Pygments Lab ! Nous avons eu le plaisir d'accueillir Angie et Christie Kitten du collectif Club Sauvage et Crevette Surimi.",
    location: {
      address: "59 rue de Buzenval, 75020, Paris",
      label: "JO&JOE Paris Nation",
    },
    pictures: [
      "/pygments-lab-4/img-1.jpg",
      "/pygments-lab-4/img-2.jpg",
      "/pygments-lab-4/img-3.jpg",
      "/pygments-lab-4/img-4.jpg",
      "/pygments-lab-4/img-5.jpg",
      "/pygments-lab-4/img-6.jpg",
      "/pygments-lab-4/img-7.jpg",
      "/pygments-lab-4/img-8.jpg",
      "/pygments-lab-4/img-9.jpg",
      "/pygments-lab-4/img-10.jpg",
      "/pygments-lab-4/img-11.jpg",
      "/pygments-lab-4/img-12.jpg",
      "/pygments-lab-4/img-13.jpg",
      "/pygments-lab-4/img-14.jpg",
      "/pygments-lab-4/img-15.jpg",
    ],
    artists: [],
    categories: ["House", "Italo House", "Disco House", "Dark Disco"],
  },
];

export const events2: TimelineEvent[] = [
  {
    date: new Date(),
    title: "Pygments Lab #1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rutrum, purus vitae imperdiet condimentum, metus erat tincidunt arcu, at feugiat ipsum leo iaculis nulla. Integer dictum scelerisque metus. Nam non consectetur lectus. Nam ultrices vehicula est, volutpat tristique ex. Praesent malesuada, erat non consectetur aliquam, nibh lacus aliquam quam, vitae rhoncus diam neque vitae nisl. Donec vel mauris at erat semper ultrices non nec ex. Aenean eu tincidunt tortor. Ut tristique a risus non placerat. Proin ligula mauris, hendrerit eget scelerisque at, vulputate sed dolor. Proin nec massa semper, porta tellus a, euismod nulla. Maecenas sit amet dui convallis, volutpat tellus facilisis, ullamcorper dolor. Nam imperdiet, leo vitae commodo maximus, enim lectus sagittis lacus, vel dapibus odio ex aliquet lectus. Sed fermentum ex sed sodales mattis. Suspendisse potenti. Integer libero enim, interdum faucibus sagittis eget, convallis at risus. Ut in laoreet quam. Proin nec.",
    location: {
      address: "61 Rue de Buzenval, 75020 Paris",
      label: "Jo&Joe Nation",
    },
    pictures: [
      "https://thumbs.dreamstime.com/z/african-lion-zoo-animal-bigcat-king-127202038.jpg",
      "https://thumbs.dreamstime.com/z/lion-leo-africa-kenya-safari-national-park-wild-animals-46370662.jpg",
      "https://thumbs.dreamstime.com/z/male-lion-showing-teeth-panthera-leo-his-32322573.jpg",
    ],
    artists: [
      {
        id: "kojo-kara",
        username: "Kojo Kara",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rutrum, purus vitae imperdiet condimentum, metus erat tincidunt arcu, at feugiat ipsum leo iaculis nulla. Integer dictum scelerisque metus. Nam non consectetur lectus. Nam ultrices vehicula est, volutpat tristique ex. Praesent malesuada, erat non consectetur aliquam, nibh lacus aliquam quam, vitae rhoncus diam neque vitae nisl. Donec vel mauris at erat semper ultrices non nec ex. Aenean eu tincidunt tortor. Ut tristique a risus non placerat. Proin ligula mauris, hendrerit eget scelerisque at, vulputate sed dolor. Proin nec massa semper, porta tellus a, euismod nulla. Maecenas sit amet dui convallis, volutpat tellus facilisis, ullamcorper dolor. Nam imperdiet, leo vitae commodo maximus, enim lectus sagittis lacus, vel dapibus odio ex aliquet lectus. Sed fermentum ex sed sodales mattis. Suspendisse potenti. Integer libero enim, interdum faucibus sagittis eget, convallis at risus. Ut in laoreet quam. Proin nec.",
        pictures: [
          "https://thumbs.dreamstime.com/z/african-lion-zoo-animal-bigcat-king-127202038.jpg",
          "https://thumbs.dreamstime.com/z/lion-leo-africa-kenya-safari-national-park-wild-animals-46370662.jpg",
          "https://thumbs.dreamstime.com/z/male-lion-showing-teeth-panthera-leo-his-32322573.jpg",
        ],
      },
      {
        id: "in-tan",
        username: "In-Tan",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rutrum, purus vitae imperdiet condimentum, metus erat tincidunt arcu, at feugiat ipsum leo iaculis nulla. Integer dictum scelerisque metus. Nam non consectetur lectus. Nam ultrices vehicula est, volutpat tristique ex. Praesent malesuada, erat non consectetur aliquam, nibh lacus aliquam quam, vitae rhoncus diam neque vitae nisl. Donec vel mauris at erat semper ultrices non nec ex. Aenean eu tincidunt tortor. Ut tristique a risus non placerat. Proin ligula mauris, hendrerit eget scelerisque at, vulputate sed dolor. Proin nec massa semper, porta tellus a, euismod nulla. Maecenas sit amet dui convallis, volutpat tellus facilisis, ullamcorper dolor. Nam imperdiet, leo vitae commodo maximus, enim lectus sagittis lacus, vel dapibus odio ex aliquet lectus. Sed fermentum ex sed sodales mattis. Suspendisse potenti. Integer libero enim, interdum faucibus sagittis eget, convallis at risus. Ut in laoreet quam. Proin nec.",
        pictures: [
          "https://thumbs.dreamstime.com/z/african-lion-zoo-animal-bigcat-king-127202038.jpg",
          "https://thumbs.dreamstime.com/z/lion-leo-africa-kenya-safari-national-park-wild-animals-46370662.jpg",
          "https://thumbs.dreamstime.com/z/male-lion-showing-teeth-panthera-leo-his-32322573.jpg",
        ],
      },
      {
        id: "kelbail",
        username: "Kelbail",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rutrum, purus vitae imperdiet condimentum, metus erat tincidunt arcu, at feugiat ipsum leo iaculis nulla. Integer dictum scelerisque metus. Nam non consectetur lectus. Nam ultrices vehicula est, volutpat tristique ex. Praesent malesuada, erat non consectetur aliquam, nibh lacus aliquam quam, vitae rhoncus diam neque vitae nisl. Donec vel mauris at erat semper ultrices non nec ex. Aenean eu tincidunt tortor. Ut tristique a risus non placerat. Proin ligula mauris, hendrerit eget scelerisque at, vulputate sed dolor. Proin nec massa semper, porta tellus a, euismod nulla. Maecenas sit amet dui convallis, volutpat tellus facilisis, ullamcorper dolor. Nam imperdiet, leo vitae commodo maximus, enim lectus sagittis lacus, vel dapibus odio ex aliquet lectus. Sed fermentum ex sed sodales mattis. Suspendisse potenti. Integer libero enim, interdum faucibus sagittis eget, convallis at risus. Ut in laoreet quam. Proin nec.",
        pictures: [
          "https://thumbs.dreamstime.com/z/african-lion-zoo-animal-bigcat-king-127202038.jpg",
          "https://thumbs.dreamstime.com/z/lion-leo-africa-kenya-safari-national-park-wild-animals-46370662.jpg",
          "https://thumbs.dreamstime.com/z/male-lion-showing-teeth-panthera-leo-his-32322573.jpg",
        ],
      },
      {
        id: "artifak",
        username: "Artifak",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rutrum, purus vitae imperdiet condimentum, metus erat tincidunt arcu, at feugiat ipsum leo iaculis nulla. Integer dictum scelerisque metus. Nam non consectetur lectus. Nam ultrices vehicula est, volutpat tristique ex. Praesent malesuada, erat non consectetur aliquam, nibh lacus aliquam quam, vitae rhoncus diam neque vitae nisl. Donec vel mauris at erat semper ultrices non nec ex. Aenean eu tincidunt tortor. Ut tristique a risus non placerat. Proin ligula mauris, hendrerit eget scelerisque at, vulputate sed dolor. Proin nec massa semper, porta tellus a, euismod nulla. Maecenas sit amet dui convallis, volutpat tellus facilisis, ullamcorper dolor. Nam imperdiet, leo vitae commodo maximus, enim lectus sagittis lacus, vel dapibus odio ex aliquet lectus. Sed fermentum ex sed sodales mattis. Suspendisse potenti. Integer libero enim, interdum faucibus sagittis eget, convallis at risus. Ut in laoreet quam. Proin nec.",
        pictures: [
          "https://thumbs.dreamstime.com/z/african-lion-zoo-animal-bigcat-king-127202038.jpg",
          "https://thumbs.dreamstime.com/z/lion-leo-africa-kenya-safari-national-park-wild-animals-46370662.jpg",
          "https://thumbs.dreamstime.com/z/male-lion-showing-teeth-panthera-leo-his-32322573.jpg",
        ],
      },
      {
        id: "palorim",
        username: "Palorim",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rutrum, purus vitae imperdiet condimentum, metus erat tincidunt arcu, at feugiat ipsum leo iaculis nulla. Integer dictum scelerisque metus. Nam non consectetur lectus. Nam ultrices vehicula est, volutpat tristique ex. Praesent malesuada, erat non consectetur aliquam, nibh lacus aliquam quam, vitae rhoncus diam neque vitae nisl. Donec vel mauris at erat semper ultrices non nec ex. Aenean eu tincidunt tortor. Ut tristique a risus non placerat. Proin ligula mauris, hendrerit eget scelerisque at, vulputate sed dolor. Proin nec massa semper, porta tellus a, euismod nulla. Maecenas sit amet dui convallis, volutpat tellus facilisis, ullamcorper dolor. Nam imperdiet, leo vitae commodo maximus, enim lectus sagittis lacus, vel dapibus odio ex aliquet lectus. Sed fermentum ex sed sodales mattis. Suspendisse potenti. Integer libero enim, interdum faucibus sagittis eget, convallis at risus. Ut in laoreet quam. Proin nec.",
        pictures: [
          "https://thumbs.dreamstime.com/z/african-lion-zoo-animal-bigcat-king-127202038.jpg",
          "https://thumbs.dreamstime.com/z/lion-leo-africa-kenya-safari-national-park-wild-animals-46370662.jpg",
          "https://thumbs.dreamstime.com/z/male-lion-showing-teeth-panthera-leo-his-32322573.jpg",
        ],
      },
    ],
    categories: ["House", "Techno", "Minimal"],
  },
  {
    date: new Date(),
    title: "Pygments Lab #2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rutrum, purus vitae imperdiet condimentum, metus erat tincidunt arcu, at feugiat ipsum leo iaculis nulla. Integer dictum scelerisque metus. Nam non consectetur lectus. Nam ultrices vehicula est, volutpat tristique ex. Praesent malesuada, erat non consectetur aliquam, nibh lacus aliquam quam, vitae rhoncus diam neque vitae nisl. Donec vel mauris at erat semper ultrices non nec ex. Aenean eu tincidunt tortor. Ut tristique a risus non placerat. Proin ligula mauris, hendrerit eget scelerisque at, vulputate sed dolor. Proin nec massa semper, porta tellus a, euismod nulla. Maecenas sit amet dui convallis, volutpat tellus facilisis, ullamcorper dolor. Nam imperdiet, leo vitae commodo maximus, enim lectus sagittis lacus, vel dapibus odio ex aliquet lectus. Sed fermentum ex sed sodales mattis. Suspendisse potenti. Integer libero enim, interdum faucibus sagittis eget, convallis at risus. Ut in laoreet quam. Proin nec.",
    location: {
      address: "61 Rue de Buzenval, 75020 Paris",
      label: "Jo&Joe Nation",
    },
    pictures: [
      "https://thumbs.dreamstime.com/z/african-lion-zoo-animal-bigcat-king-127202038.jpg",
      "https://thumbs.dreamstime.com/z/lion-leo-africa-kenya-safari-national-park-wild-animals-46370662.jpg",
      "https://thumbs.dreamstime.com/z/male-lion-showing-teeth-panthera-leo-his-32322573.jpg",
    ],
    artists: [
      {
        id: "kojo-kara",
        username: "Kojo Kara",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rutrum, purus vitae imperdiet condimentum, metus erat tincidunt arcu, at feugiat ipsum leo iaculis nulla. Integer dictum scelerisque metus. Nam non consectetur lectus. Nam ultrices vehicula est, volutpat tristique ex. Praesent malesuada, erat non consectetur aliquam, nibh lacus aliquam quam, vitae rhoncus diam neque vitae nisl. Donec vel mauris at erat semper ultrices non nec ex. Aenean eu tincidunt tortor. Ut tristique a risus non placerat. Proin ligula mauris, hendrerit eget scelerisque at, vulputate sed dolor. Proin nec massa semper, porta tellus a, euismod nulla. Maecenas sit amet dui convallis, volutpat tellus facilisis, ullamcorper dolor. Nam imperdiet, leo vitae commodo maximus, enim lectus sagittis lacus, vel dapibus odio ex aliquet lectus. Sed fermentum ex sed sodales mattis. Suspendisse potenti. Integer libero enim, interdum faucibus sagittis eget, convallis at risus. Ut in laoreet quam. Proin nec.",
        pictures: [
          "https://thumbs.dreamstime.com/z/african-lion-zoo-animal-bigcat-king-127202038.jpg",
          "https://thumbs.dreamstime.com/z/lion-leo-africa-kenya-safari-national-park-wild-animals-46370662.jpg",
          "https://thumbs.dreamstime.com/z/male-lion-showing-teeth-panthera-leo-his-32322573.jpg",
        ],
      },
      {
        id: "in-tan",
        username: "In-Tan",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rutrum, purus vitae imperdiet condimentum, metus erat tincidunt arcu, at feugiat ipsum leo iaculis nulla. Integer dictum scelerisque metus. Nam non consectetur lectus. Nam ultrices vehicula est, volutpat tristique ex. Praesent malesuada, erat non consectetur aliquam, nibh lacus aliquam quam, vitae rhoncus diam neque vitae nisl. Donec vel mauris at erat semper ultrices non nec ex. Aenean eu tincidunt tortor. Ut tristique a risus non placerat. Proin ligula mauris, hendrerit eget scelerisque at, vulputate sed dolor. Proin nec massa semper, porta tellus a, euismod nulla. Maecenas sit amet dui convallis, volutpat tellus facilisis, ullamcorper dolor. Nam imperdiet, leo vitae commodo maximus, enim lectus sagittis lacus, vel dapibus odio ex aliquet lectus. Sed fermentum ex sed sodales mattis. Suspendisse potenti. Integer libero enim, interdum faucibus sagittis eget, convallis at risus. Ut in laoreet quam. Proin nec.",
        pictures: [
          "https://thumbs.dreamstime.com/z/african-lion-zoo-animal-bigcat-king-127202038.jpg",
          "https://thumbs.dreamstime.com/z/lion-leo-africa-kenya-safari-national-park-wild-animals-46370662.jpg",
          "https://thumbs.dreamstime.com/z/male-lion-showing-teeth-panthera-leo-his-32322573.jpg",
        ],
      },
    ],
    categories: ["House", "Techno", "Minimal"],
  },
  {
    date: new Date(),
    title: "Pygments Lab #3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rutrum, purus vitae imperdiet condimentum, metus erat tincidunt arcu, at feugiat ipsum leo iaculis nulla. Integer dictum scelerisque metus. Nam non consectetur lectus. Nam ultrices vehicula est, volutpat tristique ex. Praesent malesuada, erat non consectetur aliquam, nibh lacus aliquam quam, vitae rhoncus diam neque vitae nisl. Donec vel mauris at erat semper ultrices non nec ex. Aenean eu tincidunt tortor. Ut tristique a risus non placerat. Proin ligula mauris, hendrerit eget scelerisque at, vulputate sed dolor. Proin nec massa semper, porta tellus a, euismod nulla. Maecenas sit amet dui convallis, volutpat tellus facilisis, ullamcorper dolor. Nam imperdiet, leo vitae commodo maximus, enim lectus sagittis lacus, vel dapibus odio ex aliquet lectus. Sed fermentum ex sed sodales mattis. Suspendisse potenti. Integer libero enim, interdum faucibus sagittis eget, convallis at risus. Ut in laoreet quam. Proin nec.",
    location: {
      address: "61 Rue de Buzenval, 75020 Paris",
      label: "Jo&Joe Nation",
    },
    pictures: [
      "https://thumbs.dreamstime.com/z/african-lion-zoo-animal-bigcat-king-127202038.jpg",
      "https://thumbs.dreamstime.com/z/lion-leo-africa-kenya-safari-national-park-wild-animals-46370662.jpg",
      "https://thumbs.dreamstime.com/z/male-lion-showing-teeth-panthera-leo-his-32322573.jpg",
    ],
    artists: [
      {
        id: "kojo-kara",
        username: "Kojo Kara",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rutrum, purus vitae imperdiet condimentum, metus erat tincidunt arcu, at feugiat ipsum leo iaculis nulla. Integer dictum scelerisque metus. Nam non consectetur lectus. Nam ultrices vehicula est, volutpat tristique ex. Praesent malesuada, erat non consectetur aliquam, nibh lacus aliquam quam, vitae rhoncus diam neque vitae nisl. Donec vel mauris at erat semper ultrices non nec ex. Aenean eu tincidunt tortor. Ut tristique a risus non placerat. Proin ligula mauris, hendrerit eget scelerisque at, vulputate sed dolor. Proin nec massa semper, porta tellus a, euismod nulla. Maecenas sit amet dui convallis, volutpat tellus facilisis, ullamcorper dolor. Nam imperdiet, leo vitae commodo maximus, enim lectus sagittis lacus, vel dapibus odio ex aliquet lectus. Sed fermentum ex sed sodales mattis. Suspendisse potenti. Integer libero enim, interdum faucibus sagittis eget, convallis at risus. Ut in laoreet quam. Proin nec.",
        pictures: [
          "https://thumbs.dreamstime.com/z/african-lion-zoo-animal-bigcat-king-127202038.jpg",
          "https://thumbs.dreamstime.com/z/lion-leo-africa-kenya-safari-national-park-wild-animals-46370662.jpg",
          "https://thumbs.dreamstime.com/z/male-lion-showing-teeth-panthera-leo-his-32322573.jpg",
        ],
      },
      {
        id: "in-tan",
        username: "In-Tan",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rutrum, purus vitae imperdiet condimentum, metus erat tincidunt arcu, at feugiat ipsum leo iaculis nulla. Integer dictum scelerisque metus. Nam non consectetur lectus. Nam ultrices vehicula est, volutpat tristique ex. Praesent malesuada, erat non consectetur aliquam, nibh lacus aliquam quam, vitae rhoncus diam neque vitae nisl. Donec vel mauris at erat semper ultrices non nec ex. Aenean eu tincidunt tortor. Ut tristique a risus non placerat. Proin ligula mauris, hendrerit eget scelerisque at, vulputate sed dolor. Proin nec massa semper, porta tellus a, euismod nulla. Maecenas sit amet dui convallis, volutpat tellus facilisis, ullamcorper dolor. Nam imperdiet, leo vitae commodo maximus, enim lectus sagittis lacus, vel dapibus odio ex aliquet lectus. Sed fermentum ex sed sodales mattis. Suspendisse potenti. Integer libero enim, interdum faucibus sagittis eget, convallis at risus. Ut in laoreet quam. Proin nec.",
        pictures: [
          "https://thumbs.dreamstime.com/z/african-lion-zoo-animal-bigcat-king-127202038.jpg",
          "https://thumbs.dreamstime.com/z/lion-leo-africa-kenya-safari-national-park-wild-animals-46370662.jpg",
          "https://thumbs.dreamstime.com/z/male-lion-showing-teeth-panthera-leo-his-32322573.jpg",
        ],
      },
    ],
    categories: ["House", "Techno", "Minimal"],
  },
];
