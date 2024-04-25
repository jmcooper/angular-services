import { Product } from "@shared/product.model";

export const engineers: Product[] = [
  {
    id: 1,
    name: "Junior Engineer",
    description: "A cost effective option for simple tasks. Our junior engineers are fully capable of general bot assembly.",
    imageName: "profile-images/junior.png",
    category: "Junior",
    price: 120,
    discount: 0
  },
  {
    id: 2,
    name: "Associate Engineer",
    description: "Associate engineers can help with both assembly and troubleshooting simple issues with connectivity and functionalty.",
    imageName: "profile-images/associate.png",
    category: "Associate",
    price: 180,
    discount: 0
  },
  {
    id: 3,
    name: "Senior Engineer",
    description: "Senior engineers are capable and efficient at programming individual bots and troubleshooting complex issues with complicated bots and systems.",
    imageName: "profile-images/senior.png",
    category: "Senior",
    price: 225,
    discount: 0
  },
  {
    id: 3,
    name: "Chief Engineer",
    description: "Our chief engineers will help you create an entire plan for creating an efficient bot workforce and assist in programming them to work within complex systems.",
    imageName: "profile-images/chief.png",
    category: "Chief",
    price: 350,
    discount: 0
  },
];