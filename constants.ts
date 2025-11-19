import { Product, NavItem } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 2,
    name: "Emma Wood Coastal Tee",
    price: 42,
    image: "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?auto=format&fit=crop&w=800&q=80", // Emma Wood / Driftwood
    verse: "Matthew 5:14",
    category: "Tees"
  },
  {
    id: 3,
    name: "Mount Hood Alpine Tee",
    price: 45,
    image: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=800&q=80", // Mount Hood
    verse: "Isaiah 43:2",
    category: "Tees"
  },
  {
    id: 4,
    name: "Whitney Summit Guide Tee",
    price: 48,
    image: "https://images.unsplash.com/photo-1589802829985-817e51171b92?auto=format&fit=crop&w=800&q=80", // Mount Whitney
    verse: "Luke 6:48",
    category: "Tees"
  }
];

export const NAV_ITEMS: NavItem[] = [
  { label: "Shop", href: "#shop" },
  { label: "Mission", href: "#mission" },
  { label: "Stories", href: "#stories" },
];