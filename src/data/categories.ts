import type { Category } from "./products";

export type CategoryId = Category | "ofertas";

export type CategoryPhoto = {
  src: string;
  alt: string;
  /** Fotógrafo en Unsplash (licencia Unsplash: uso comercial libre). */
  credit: string;
  unsplashId: string;
};

export type CategoryInfo = {
  tagline: string;
  description: string;
  photos: CategoryPhoto[];
};

const photo = (cat: CategoryId, n: number, alt: string, credit: string, unsplashId: string): CategoryPhoto => ({
  src: `/categories/${cat}-${n}.webp`,
  alt,
  credit,
  unsplashId,
});

export const CATEGORY_INFO: Record<CategoryId, CategoryInfo> = {
  juguetes: {
    tagline: "Placer a tu medida",
    description: "Vibradores, succionadores y estimuladores de silicona médica, de las marcas líderes y con garantía oficial.",
    photos: [
      photo("juguetes", 1, "Colección de juguetes de silicona en colores pastel", "IFONNX Toys", "ck1ZlJbXrlg"),
      photo("juguetes", 2, "Vibradores de colores sobre fondo oscuro", "IFONNX Toys", "Ii43JmypSLY"),
      photo("juguetes", 3, "Estimulador rosa sobre plato rosa", "Lovense Toys", "dNfRmv93ztw"),
      photo("juguetes", 4, "Vibrador rabbit rosado", "IFONNX Toys", "CSTQ08NXKOE"),
      photo("juguetes", 5, "Vibrador para parejas en rosa fucsia", "Andrey Matveev", "WydWcF2EPjc"),
      photo("juguetes", 6, "Estimulador en forma de rosa rodeado de rosas", "My Rose Toy", "OzI2rMrywUk"),
    ],
  },
  lenceria: {
    tagline: "Seducción en cada detalle",
    description: "Encaje, transparencias y cortes que realzan tu figura. Piezas para sentirte poderosa y sensual.",
    photos: [
      photo("lenceria", 1, "Conjunto de lencería negra sobre sábanas blancas", "Mathilde Langevin", "MPbVLbwQzaU"),
      photo("lenceria", 2, "Brasieres y panties de encaje en flat lay", "Fahad Waseem", "AdjyrNhFVPI"),
      photo("lenceria", 3, "Modelo con lencería roja sobre fondo rojo", "Brian Lawson", "mvSNFg8KS7U"),
      photo("lenceria", 4, "Body de encaje negro", "LOLA AZIZADA", "lGPnjAOzpwU"),
      photo("lenceria", 5, "Detalle de encaje floral", "Alex Bracken", "l1SJO7TMVEc"),
      photo("lenceria", 6, "Detalle de tirante de encaje en luz cálida", "Daniel Dvorský", "cCpc0FWcK4s"),
    ],
  },
  bienestar: {
    tagline: "Rituales para los sentidos",
    description: "Lubricantes, aceites de masaje y cosmética íntima para cuidar tu cuerpo y crear el ambiente perfecto.",
    photos: [
      photo("bienestar", 1, "Aceite de masaje con lavanda", "olga volkovitskaia", "1AlX8wezPpM"),
      photo("bienestar", 2, "Gotero de aceite esencial en ámbar", "Christin Hume", "0MoF-Fe0w0A"),
      photo("bienestar", 3, "Velas encendidas en ambiente cálido", "Claudio Schwarz", "e7cDMN6f0gs"),
      photo("bienestar", 4, "Vela escultórica con forma de cuerpo", "Raspopova Marina", "bWMlE4paoQM"),
      photo("bienestar", 5, "Velas rojas encendidas en la oscuridad", "Joanna Kosinska", "ouCiZihVMS8"),
      photo("bienestar", 6, "Masaje relajante en la espalda", "Massage a Domicile", "nMVUTY8_gGw"),
    ],
  },
  accesorios: {
    tagline: "Atrévete a jugar",
    description: "Antifaces, esposas, anillos y juegos para parejas que encienden la complicidad y rompen la rutina.",
    photos: [
      photo("accesorios", 1, "Antifaz de satén rojo", "Carla Roberta de Oliveira Maciel", "Zr4y9I_8tsA"),
      photo("accesorios", 2, "Esposas de cuero con medias de malla", "Artem Labunsky", "whsB1P4Kblc"),
      photo("accesorios", 3, "Antifaz negro en penumbra", "Kirill Balobanov", "YbHFrt7-9Lc"),
      photo("accesorios", 4, "Retrato con antifaz negro", "engin akyurt", "JNDkZnoE548"),
      photo("accesorios", 5, "Antifaz blanco de tela", "Elizeu Dias", "SxhtVtiWnqI"),
      photo("accesorios", 6, "Esposas metálicas", "niu niu", "5HzOtV-FSlw"),
    ],
  },
  ofertas: {
    tagline: "Regalos que enamoran",
    description: "Precios especiales, kits para parejas y detalles listos para regalar. Por tiempo limitado.",
    photos: [
      photo("ofertas", 1, "Caja de regalo fucsia con lazo dorado", "Ekaterina Shevchenko", "ZLTlHeKbh04"),
      photo("ofertas", 2, "Empaque de regalo rosa", "Nick Fewings", "rO20Sn1FWo4"),
      photo("ofertas", 3, "Caja de regalo roja con corazones", "mehdi lamaaffar", "8i3UUaX03rU"),
      photo("ofertas", 4, "Regalos envueltos en rojo y negro", "Tamanna Rumee", "5n2XtbvekO8"),
      photo("ofertas", 5, "Caja de chocolates en forma de corazón", "Anita Austvika", "_dXp2DzONi4"),
      photo("ofertas", 6, "Rosas rojas sobre papel rosa", "Mikki Speid", "OzWZuo_ZuV4"),
    ],
  },
};
