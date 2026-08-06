// Import images

import preview from "../../assets/wadrobe.avif";
import hero from "../../assets/wadrobe.avif";

import sliding from "../../assets/wadrobe.avif";
import walkin from "../../assets/wadrobe.avif";
import glass from "../../assets/wadrobe.avif";
import openable from "../../assets/wadrobe.avif";
import mirror from "../../assets/wadrobe.avif";

export const categoryData = [

  {
    id: 1,

    title: "Wardrobes",

    previewImage: preview,

    heroImage: hero,

    collections: [
      {
        name: "Sliding Wardrobes",
        image: sliding,
      },
      {
        name: "Walk-in Wardrobes",
        image: walkin,
      },
      {
        name: "Glass Wardrobes",
        image: glass,
      },
      {
        name: "Openable Wardrobes",
        image: openable,
      },
      {
        name: "Mirror Wardrobes",
        image: mirror,
      },
    ],
  },

];