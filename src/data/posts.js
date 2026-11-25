// Dados mockados para os dois posts do feed.
// Os caminhos das imagens partem da pasta public.
export const posts = [
  {
    id: "post-mica-rio",
    user: {
      username: "mica.galvao",
      displayName: "Mica Galvão",
      avatar: "/images/stories/story-02.png",
      verified: false,
    },
    headerPlacement: "outside",
    postedAt: "há 2 horas",
    location: "Praia de Ipanema, Rio de Janeiro",
    media: {
      type: "image",
      src: "/images/posts/mica-rio-selfie.png",
      alt: "Selfie de Mica Galvão na praia de Ipanema, com o mar e as montanhas do Rio ao fundo.",
    },
    counts: {
      likes: 9900,
      comments: 74,
      reposts: 239,
      shares: 4500,
      saves: 320,
    },
    caption:
      "Um fim de tarde no Rio para recarregar as energias antes do próximo treino. 🌊☀️",
  },
  {
    id: "post-kyra-paris",
    user: {
      username: "kyra.gracie",
      displayName: "Kyra Gracie",
      avatar: "/images/stories/story-03.png",
      verified: true,
    },
    headerPlacement: "overlay",
    postedAt: "há 5 horas",
    location: "Champs-Élysées, Paris",
    media: {
      type: "image",
      src: "/images/posts/kyra-paris.png",
      alt: "Kyra Gracie caminha pela Champs-Élysées em um dia frio, com o Arco do Triunfo ao fundo.",
    },
    counts: {
      likes: 12800,
      comments: 204,
      reposts: 88,
      shares: 730,
      saves: 2160,
    },
    caption:
      "Paris com 0 °C e o Arco do Triunfo ao fundo. Valeu cada camada de roupa! 🥶🇫🇷",
  },
];
