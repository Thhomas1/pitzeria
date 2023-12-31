type Product = {
  id: number;
  title: string;
  desc?: string;
  img?: string;
  price: number;
  options?: { title: string; additionalPrice: number }[];
};

type Products = Product[];

export const featuredProducts: Products = [
  {
    id: 1,
    title: "La Siciliana",
    desc: "Ardiente de pepperoni picante, jalapeños, hojuelas de pimiento rojo triturado y queso mozzarella derretido, brindando una patada con cada bocado.",
    img: "/temporary/p1.png",
    price: 24.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 2,
    title: "Bacon Deluxe",
    desc: "Deléitese con la delicia ahumada con una hamburguesa de ternera a la parrilla con un poquito de lechuga y tomate para rebajar ese exceso de chimi.",
    img: "/temporary/p2.png",
    price: 29.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 3,
    title: "Bella Napoli",
    desc: "Una delicia italiana clásica con una corteza delgada y crujiente, salsa de tomate picante, mozzarella fresca y una mezcla de hierbas aromáticas cubiertas con lechuga, tomates y una cucharada de mayonesa picante.",
    img: "/temporary/p3.png",
    price: 24.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 4,
    title: "Arrabbiata",
    desc: "Penne en una salsa de tomate picante infundida con ajo, hojuelas de chile rojo y albahaca fresca para la máxima experiencia de comida reconfortante.",
    img: "/temporary/p4.png",
    price: 26.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 5,
    title: "Jalapeño Fiesta",
    desc: "Esta hamburguesa presenta una suculenta carne de res, jalapeños picantes, queso pepper jack y una sabrosa salsa de mayonesa con chipotle, y todas las guarniciones clásicas en un panecillo tostado.",
    img: "/temporary/p5.png",
    price: 29.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 6,
    title: "La Magia de Margarita",
    desc: "Un favorito atemporal con un toque diferente, que muestra una corteza delgada cubierta con tomates dulces, albahaca fresca, queso mozzarella cremoso y un chorrito de aceite de oliva virgen extra, rúcula fresca y un chorrito de glaseado balsámico",
    img: "/temporary/p6.png",
    price: 24.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 7,
    title: "Garlic Parmesano ",
    desc: "Una delicia para los amantes del ajo, con linguini bañado en una salsa cremosa de queso parmesano, infundido con ajo y adornado con perejil picado, pimientos y tomates cherry.",
    img: "/temporary/p7.png",
    price: 28.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 8,
    title: "La Mediterraneana",
    desc: "Embárquese en un viaje culinario con esta creación de inspiración mediterránea, que incluye queso feta, aceitunas Kalamata, tomates secados al sol y una pizca de orégano.",
    img: "/temporary/p8.png",
    price: 32.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 9,
    title: "Hawaii Teriyaki",
    desc: "Experimente el sabor de los trópicos con una jugosa hamburguesa de res glaseada en salsa teriyaki ácida, cubierta con piña asada, tocino crujiente y lechuga fresca, y todas las guarniciones clásicas en un panecillo tostado.",
    img: "/temporary/p9.png",
    price: 29.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
];




export const pizzas: Products = [
  {
    id: 1,
    title: "La Siciliana",
    desc: "Ardiente de pepperoni picante, jalapeños, hojuelas de pimiento rojo triturado y queso mozzarella derretido, brindando una patada con cada bocado.",
    img: "/temporary/p1.png",
    price: 24.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 2,
    title: "La mediterreanea",
    desc: "Embárquese en un viaje culinario con esta creación de inspiración mediterránea, que incluye queso feta, aceitunas Kalamata, tomates secados al sol y una pizca de orégano.",
    img: "/temporary/p8.png",
    price: 32.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 3,
    title: "Bella Napoli",
    desc: "Una delicia italiana clásica con una corteza delgada y crujiente, salsa de tomate picante, mozzarella fresca y una mezcla de hierbas aromáticas cubiertas con lechuga, tomates y una cucharada de mayonesa picante.",
    img: "/temporary/p3.png",
    price: 26.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 4,
    title: "Pesto Primavera",
    desc: "A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.",
    img: "/temporary/p10.png",
    price: 28.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 5,
    title: "Veggie Supreme",
    desc: "A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.",
    img: "/temporary/p11.png",
    price: 24.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 6,
    title: "Four Cheese Fantasy",
    desc: "Experience pure cheesy bliss with a melty blend of mozzarella, cheddar, provolone, and Parmesan cheeses, creating a rich and indulgent pizza experience.",
    img: "/temporary/p12.png",
    price: 22.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  },
];

export const singleProduct: Product = {
  id: 1,
  title: "La Siciliana",
  desc: "Ignite your taste buds with a fiery combination of spicy pepperoni, jalapeños, crushed red pepper flakes, and melted mozzarella cheese, delivering a kick with every bite.",
  img: "/temporary/p1.png",
  price: 24.9,
  options: [
    {
      title: "Small",
      additionalPrice: 0,
    },
    {
      title: "Medium",
      additionalPrice: 4,
    },
    {
      title: "Large",
      additionalPrice: 6,
    },
  ],
};


type Menu = {
  id: number;
  slug: string;
  title: string;
  desc?: string;
  img?: string;
  color: string;
}[];

export const menu: Menu = [
  {
    id: 1,
    slug: "pastas",
    title: "Pastas italianas",
    desc: "El sabor casi tan perfecto traido de la mismisima Roma para toda la gente de Latinoamerica.",
    img: "/temporary/m1.png",
    color: "white",
  },
  {
    id: 2,
    slug: "burgers",
    title: "Las Burgers",
    desc: "Burger con amor: casi como hacerla en tu casa pero con ingredientes exoticos y una presentacion excelente.",
    img: "/temporary/m2.png",
    color: "black",
  },
  {
    id: 3,
    slug: "pizzas",
    title: "Pizzas Queso Roque",
    desc: "Pizza Roquefort: Irresistible, exotica y unica. Con un agradable olor que solo algunos pueden apreciar.",
    img: "/temporary/m3.png",
    color: "white",
  },
];