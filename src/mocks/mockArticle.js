const mockArticle = [
  {
    id: 1,
    title: "Artículo 1",
    imagePath:
      "https://s3.ppllstatics.com/elnortedecastilla/www/pre2017/multimedia/noticias/201603/14/media/cortadas/Imagen%20_3139925_xoptimizadax--575x323.jpg",
    description: "Descripción del primer artículo. Esto es un resumen.",
    text: "Este es el texto que va a tener el articulo, voy a probar a ver si me deja escribir un lorem. La respuesta fue no, estoy bastante desepcionado de esta verga que no te deja ni escirbir un lorem para rellenar texto tranquilo, si tuviera el copilot lo dejaria haciendo esta verga e el pero no, no lo tengo, Y eso es muy triste ;( .",
    createdTime: "2024-08-27",
    etiquetas: [
      { title: "Etiqueta1", emoji: "🔥", color: "#FF5733" },
      { title: "Etiqueta2", emoji: "⭐", color: "#FFC107" },
    ],
    comentarios: [
      {
        id: 1,
        name: "Usuario1",
        description:
          "¡Gran artículo! Me encantó cómo explicaste el tema en detalle.",
        date: "2024-08-27",
      },
      {
        id: 2,
        name: "Jorge come Sanwiche",
        description:
          "¡qUE RICO SON LO sanWiche de jorGEE! No puedo dejar de comerlos.",
        date: "2024-08-27",
      },
      {
        id: 3,
        name: "Usuario2",
        description:
          "Interesante, pero creo que podrías haber profundizado más en algunos puntos.",
        date: "2024-08-28",
      },
      {
        id: 4,
        name: "María del Carmen",
        description:
          "Me ayudó mucho este artículo para entender mejor el tema. ¡Gracias!",
        date: "2024-08-28",
      },
      {
        id: 5,
        name: "Usuario3",
        description:
          "Tengo algunas dudas sobre lo que mencionaste en el tercer párrafo.",
        date: "2024-08-29",
      },
      {
        id: 6,
        name: "Elena P.",
        description: "Sigo todos tus artículos, este también es excelente.",
        date: "2024-08-29",
      },
      {
        id: 7,
        name: "Usuario4",
        description:
          "No estoy de acuerdo con tu opinión sobre el tema, pero fue interesante leerlo.",
        date: "2024-08-29",
      },
      {
        id: 8,
        name: "Luis Gonzales",
        description:
          "¡Qué buena explicación! Me resolviste muchas dudas que tenía.",
        date: "2024-08-30",
      },
      {
        id: 9,
        name: "Usuario5",
        description:
          "Este artículo me pareció un poco confuso, ¿podrías aclararlo?",
        date: "2024-08-30",
      },
      {
        id: 10,
        name: "Jorge come Sanwiche",
        description:
          "¡qUE RICO SON LO sanWiche de jorGEE! No me canso de decirlo.",
        date: "2024",
      },
    ],
  },
  {
    id: 2,
    title: "Artículo 2",
    imagePath:
      "https://www.dzoom.org.es/wp-content/uploads/2019/06/fotografia-paisaje-consejos-3-734x489.jpg",
    description:
      "Descripción del segundo artículo. Esto es un resumen más largo que el primero. Descripción del segundo artículo. Esto es un resumen más largo que el primeroDescripción del segundo artículo. Esto es un resumen más largo que el primero",
    text: "Este es el texto que va a tener el articulo, voy a probar a ver si me deja escribir un lorem. La respuesta fue no, estoy bastante desepcionado de esta verga que no te deja ni escirbir un lorem para rellenar texto tranquilo, si tuviera el copilot lo dejaria haciendo esta verga e el pero no, no lo tengo, Y eso es muy triste ;( .",
    createdTime: "2024-08-26",
    etiquetas: [
      { title: "Etiqueta3", emoji: "📝", color: "#33B5E5" },
      { title: "Etiqueta4", emoji: "🚀", color: "#00C851" },
    ],
    comentarios: [],
  },
  {
    id: 3,
    title: "Artículo 1",
    imagePath:
      "https://s3.ppllstatics.com/elnortedecastilla/www/pre2017/multimedia/noticias/201603/14/media/cortadas/Imagen%20_3139925_xoptimizadax--575x323.jpg",
    description: "Descripción del primer artículo. Esto es un resumen.",
    text: "Este es el texto que va a tener el articulo, voy a probar a ver si me deja escribir un lorem. La respuesta fue no, estoy bastante desepcionado de esta verga que no te deja ni escirbir un lorem para rellenar texto tranquilo, si tuviera el copilot lo dejaria haciendo esta verga e el pero no, no lo tengo, Y eso es muy triste ;( .",
    createdTime: "2024-08-27",
    etiquetas: [
      { title: "Etiqueta1", emoji: "🔥", color: "#FF5733" },
      { title: "Etiqueta2", emoji: "⭐", color: "#FFC107" },
    ],
    comentarios: [
      {
        id: 1,
        name: "Usuario1",
        description: "¡Gran artículo!",
        date: "2024-08-27",
      },
    ],
  },
  {
    id: 4,
    title: "Artículo 2",
    imagePath:
      "https://www.dzoom.org.es/wp-content/uploads/2019/06/fotografia-paisaje-consejos-3-734x489.jpg",
    description:
      "Descripción del segundo artículo. Esto es un resumen más largo que el primero. Descripción del segundo artículo. Esto es un resumen más largo que el primeroDescripción del segundo artículo. Esto es un resumen más largo que el primero",
    text: "Este es el texto que va a tener el articulo, voy a probar a ver si me deja escribir un lorem. La respuesta fue no, estoy bastante desepcionado de esta verga que no te deja ni escirbir un lorem para rellenar texto tranquilo, si tuviera el copilot lo dejaria haciendo esta verga e el pero no, no lo tengo, Y eso es muy triste ;( .",
    createdTime: "2024-08-26",
    etiquetas: [
      { title: "Etiqueta3", emoji: "📝", color: "#33B5E5" },
      { title: "Etiqueta4", emoji: "🚀", color: "#00C851" },
    ],
    comentarios: [],
  },
  {
    id: 5,
    title: "Artículo 2",
    imagePath:
      "https://www.dzoom.org.es/wp-content/uploads/2019/06/fotografia-paisaje-consejos-3-734x489.jpg",
    description:
      "Descripción del segundo artículo Esto es un resumen más largo que el primero Descripción del segundo artículo Esto es un resumen más largo que el primero Descripción del segundo artículo Esto es un resumen más largo que el primero",
    text: "Este es el texto que va a tener el articulo, voy a probar a ver si me deja escribir un lorem. La respuesta fue no, estoy bastante desepcionado de esta verga que no te deja ni escirbir un lorem para rellenar texto tranquilo, si tuviera el copilot lo dejaria haciendo esta verga e el pero no, no lo tengo, Y eso es muy triste ;( .",
    createdTime: "2024-08-26",
    etiquetas: [
      { title: "Etiqueta3", emoji: "📝", color: "#33B5E5" },
      { title: "Etiqueta4", emoji: "🚀", color: "#00C851" },
    ],
    comentarios: [],
  },
];

export default mockArticle;
