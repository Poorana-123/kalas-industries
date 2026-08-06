// =======================================================
// WARDROBE
// =======================================================

import wardrobePreview from "../../assets/wadrobe.avif";
import wardrobeHero from "../../assets/wadrobe.avif";

import sliding from "../../assets/categories/sliding_wardrobe.webp";
import walkin from "../../assets/categories/walk_in_wardrobe.jpg";
import glass from "../../assets/categories/glass_wardrobe.jpg";
import openable from "../../assets/categories/openable_wardrobe.avif";
import mirror from "../../assets/categories/mirror_wardrobe.jpg";

// =======================================================
// COMMON PLACEHOLDER
// Replace these with actual images later
// =======================================================

import placeholder from "../../assets/wadrobe.avif";

// =======================================================
// CATEGORY DATA
// =======================================================

export const categoryData = [

  // ===================== HOME =====================

  {
    id: 0,
    title: "Home",
    previewImage: placeholder,
    heroImage: placeholder,

    collections: [
      { id: 1, name: "Featured Collection", image: placeholder },
      { id: 2, name: "New Arrivals", image: placeholder },
      { id: 3, name: "Luxury Furniture", image: placeholder },
      { id: 4, name: "Best Sellers", image: placeholder },
      { id: 5, name: "Premium Designs", image: placeholder },
    ],
  },

  // ===================== WARDROBES =====================

  {
    id: 1,

    title: "Wardrobes",

    previewImage: wardrobePreview,

    heroImage: wardrobeHero,

    collections: [

      {
        id: 1,
        name: "Sliding Wardrobes",
        image: sliding,
      },

      {
        id: 2,
        name: "Walk-in Wardrobes",
        image: walkin,
      },

      {
        id: 3,
        name: "Glass Wardrobes",
        image: glass,
      },

      {
        id: 4,
        name: "Openable Wardrobes",
        image: openable,
      },

      {
        id: 5,
        name: "Mirror Wardrobes",
        image: mirror,
      },

    ],
  },

  // ===================== BED SET =====================

  {
    id: 2,

    title: "Bed Set",

    previewImage: placeholder,

    heroImage: placeholder,

    collections: [

      {
        id: 1,
        name: "King Size Beds",
        image: placeholder,
      },

      {
        id: 2,
        name: "Queen Size Beds",
        image: placeholder,
      },

      {
        id: 3,
        name: "Storage Beds",
        image: placeholder,
      },

      {
        id: 4,
        name: "Hydraulic Beds",
        image: placeholder,
      },

      {
        id: 5,
        name: "Luxury Bed Sets",
        image: placeholder,
      },

    ],
  },

  // ===================== DRESSING TABLE =====================

  {
    id: 3,

    title: "Dressing Table",

    previewImage: placeholder,

    heroImage: placeholder,

    collections: [

      { id: 1, name: "Modern Dressing Table", image: placeholder },
      { id: 2, name: "Mirror Dressing Table", image: placeholder },
      { id: 3, name: "Wooden Dressing Table", image: placeholder },
      { id: 4, name: "Wall Mounted Dressing", image: placeholder },
      { id: 5, name: "Luxury Dressing Table", image: placeholder },

    ],
  },

  // ===================== OFFICE TABLE =====================

  {
    id: 4,

    title: "Office Table",

    previewImage: placeholder,

    heroImage: placeholder,

    collections: [

      { id: 1, name: "Executive Table", image: placeholder },
      { id: 2, name: "Computer Table", image: placeholder },
      { id: 3, name: "Workstation", image: placeholder },
      { id: 4, name: "Conference Table", image: placeholder },
      { id: 5, name: "Reception Desk", image: placeholder },

    ],
  },

  // ===================== SHOE RACK =====================

  {
    id: 5,

    title: "Shoe Rack",

    previewImage: placeholder,

    heroImage: placeholder,

    collections: [

      { id: 1, name: "Wooden Shoe Rack", image: placeholder },
      { id: 2, name: "Open Shoe Rack", image: placeholder },
      { id: 3, name: "Closed Shoe Rack", image: placeholder },
      { id: 4, name: "Mirror Shoe Rack", image: placeholder },
      { id: 5, name: "Premium Shoe Rack", image: placeholder },

    ],
  },

  // ===================== CHEST OF DRAWERS =====================

  {
    id: 6,

    title: "Chest of Drawers",

    previewImage: placeholder,

    heroImage: placeholder,

    collections: [

      { id: 1, name: "4 Drawer Chest", image: placeholder },
      { id: 2, name: "5 Drawer Chest", image: placeholder },
      { id: 3, name: "Wooden Chest", image: placeholder },
      { id: 4, name: "Modern Chest", image: placeholder },
      { id: 5, name: "Luxury Chest", image: placeholder },

    ],
  },

  // ===================== DINING TABLE =====================

  {
    id: 7,

    title: "Dining Table",

    previewImage: placeholder,

    heroImage: placeholder,

    collections: [

      { id: 1, name: "4 Seater Dining", image: placeholder },
      { id: 2, name: "6 Seater Dining", image: placeholder },
      { id: 3, name: "8 Seater Dining", image: placeholder },
      { id: 4, name: "Marble Dining", image: placeholder },
      { id: 5, name: "Wooden Dining", image: placeholder },

    ],
  },

  // ===================== SIDE TABLE =====================

  {
    id: 8,

    title: "Side Table",

    previewImage: placeholder,

    heroImage: placeholder,

    collections: [

      { id: 1, name: "Wooden Side Table", image: placeholder },
      { id: 2, name: "Metal Side Table", image: placeholder },
      { id: 3, name: "Round Side Table", image: placeholder },
      { id: 4, name: "Luxury Side Table", image: placeholder },
      { id: 5, name: "Designer Side Table", image: placeholder },

    ],
  },

  // ===================== BOOK SHELF =====================

  {
    id: 9,

    title: "Book Shelf",

    previewImage: placeholder,

    heroImage: placeholder,

    collections: [

      { id: 1, name: "Wall Bookshelf", image: placeholder },
      { id: 2, name: "Standing Bookshelf", image: placeholder },
      { id: 3, name: "Corner Bookshelf", image: placeholder },
      { id: 4, name: "Glass Bookshelf", image: placeholder },
      { id: 5, name: "Designer Bookshelf", image: placeholder },

    ],
  },

  // ===================== CENTER TABLE =====================

  {
    id: 10,

    title: "Center Table",

    previewImage: placeholder,

    heroImage: placeholder,

    collections: [

      { id: 1, name: "Wooden Center Table", image: placeholder },
      { id: 2, name: "Glass Center Table", image: placeholder },
      { id: 3, name: "Marble Center Table", image: placeholder },
      { id: 4, name: "Luxury Center Table", image: placeholder },
      { id: 5, name: "Modern Center Table", image: placeholder },

    ],
  },

  // ===================== MORE =====================

  {
    id: 11,

    title: "More",

    previewImage: placeholder,

    heroImage: placeholder,

    collections: [

      { id: 1, name: "TV Unit", image: placeholder },
      { id: 2, name: "Study Table", image: placeholder },
      { id: 3, name: "Console Table", image: placeholder },
      { id: 4, name: "Living Room Furniture", image: placeholder },
      { id: 5, name: "Custom Furniture", image: placeholder },

    ],
  },

];