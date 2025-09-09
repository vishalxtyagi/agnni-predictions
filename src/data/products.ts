// Import product images
import BlackSalt from "../assets/images/crystals/black-salt.webp";
import AmethystBracelet from "../assets/images/crystals/amethyst-bracelet.webp";
import LapisLazuli from "../assets/images/crystals/lapis-lazuli.webp";
import TigerEye from "../assets/images/crystals/tiger-eye-stone.webp";
import Pyrite from "../assets/images/crystals/pyrite.webp";
import Carnelian from "../assets/images/crystals/carnelian.webp";

export interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  featured?: boolean;
  category: string;
}

export const products: Product[] = [
  { 
    id: 1, 
    title: "Black Salt for Nazar Removal", 
    description: "Protect your space from negativity with our specially prepared Black Salt, chanted with sacred mantras over 1 lakh times.", 
    image: BlackSalt, 
    price: 799, 
    featured: true,
    category: "Protection"
  },
  { 
    id: 2, 
    title: "Amethyst Crystal Bracelet", 
    description: "Enhances spiritual clarity, promotes calmness, and deepens your meditation practice for profound peace.", 
    image: AmethystBracelet, 
    price: 1299,
    category: "Healing"
  },
  { 
    id: 3, 
    title: "Lapis Lazuli Bracelet", 
    description: "Boosts self-expression, mental clarity, and authentic communication, connecting you to your inner wisdom.", 
    image: LapisLazuli, 
    price: 1299,
    category: "Communication"
  },
  { 
    id: 4, 
    title: "Tiger's Eye Bracelet", 
    description: "A powerful stone of protection and confidence, it shields against negativity while attracting courage.", 
    image: TigerEye, 
    price: 1299,
    category: "Protection"
  },
  { 
    id: 5, 
    title: "Pyrite Crystal Bracelet", 
    description: "Known as a stone of wealth and manifestation, Pyrite energizes action and attracts abundance.", 
    image: Pyrite, 
    price: 1299,
    category: "Manifestation"
  },
  { 
    id: 6, 
    title: "Carnelian Bracelet", 
    description: "Ignites creativity, courage, and motivation, opening the heart to love and healing emotional wounds.", 
    image: Carnelian, 
    price: 1299,
    category: "Creativity"
  },
];