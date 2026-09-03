export enum NAV_LINKS {
  HOME = "/",
  CATALOGUE = "/catalogue",
  ABOUT = "/about",
  CONTACTS = "/contacts",
  LOGIN = "/login",
  PRODUCTS = "/products",
}

export enum CATALOGUE_FILTERS {
  SEARCH = "search",
  CATEGORY = "category",
}

export enum FORM_FIELDS {
  PRODUCT_NAME = "product-name",
}

export const slides = [
  {
    id: 1,
    title: "Summer Sale Collections",
    description: "Up to 30% off!",
    img: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
  },
  {
    id: 2,
    title: "Winter Sale Collections",
    description: "Up to 70% off!",
    img: "https://images.pexels.com/photos/3262937/pexels-photo-3262937.jpeg?auto=compress&cs=tinysrgb&w=800",
    bg: "bg-gradient-to-r from-pink-50 to-blue-50",
  },
  {
    id: 3,
    title: "Spring Sale Collections",
    description: "Up to 50% off!",
    img: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
    bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
  },
];

export enum PRODUCT_LIST_TITLES {
  FEATURED = "Featured Products",
  NEW = "New Products",
}

export const products = {
  items: [
    {
      _id: 0,
      image:
        "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800",
      name: "Product 1",
      price: 19.99,
      slug: "product-1",
    },
    {
      _id: 1,
      image:
        "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800",
      name: "Product 2",
      price: 29.99,
      slug: "product-2",
    },
    {
      _id: 2,
      image:
        "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800",
      name: "Product 3",
      price: 9.99,
      slug: "product-3",
    },
    {
      _id: 3,
      image:
        "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800",
      name: "Product 4",
      price: 39.99,
      slug: "product-4",
    },
  ],
  currentPage: 0,
  hasPrev: () => false,
  hasNext: () => false,
};

export const categories: Category[] = [
  {
    _id: 0,
    image:
      "https://images.pexels.com/photos/3262937/pexels-photo-3262937.jpeg?auto=compress&cs=tinysrgb&w=800",
    name: "Category 1",
    slug: "category-1",
  },
  {
    _id: 1,
    image:
      "https://images.pexels.com/photos/3262937/pexels-photo-3262937.jpeg?auto=compress&cs=tinysrgb&w=800",
    name: "Category 2",
    slug: "category-2",
  },
  {
    _id: 2,
    image:
      "https://images.pexels.com/photos/3262937/pexels-photo-3262937.jpeg?auto=compress&cs=tinysrgb&w=800",
    name: "Category 3",
    slug: "category-3",
  },
  {
    _id: 3,
    image:
      "https://images.pexels.com/photos/3262937/pexels-photo-3262937.jpeg?auto=compress&cs=tinysrgb&w=800",
    name: "Category 4",
    slug: "category-4",
  },
  {
    _id: 4,
    image:
      "https://images.pexels.com/photos/3262937/pexels-photo-3262937.jpeg?auto=compress&cs=tinysrgb&w=800",
    name: "Category 5",
    slug: "category-5",
  },
  {
    _id: 5,
    image:
      "https://images.pexels.com/photos/3262937/pexels-photo-3262937.jpeg?auto=compress&cs=tinysrgb&w=800",
    name: "Category 6",
    slug: "category-6",
  },
  {
    _id: 6,
    image:
      "https://images.pexels.com/photos/3262937/pexels-photo-3262937.jpeg?auto=compress&cs=tinysrgb&w=800",
    name: "Category 7",
    slug: "category-7",
  },
  {
    _id: 7,
    image:
      "https://images.pexels.com/photos/3262937/pexels-photo-3262937.jpeg?auto=compress&cs=tinysrgb&w=800",
    name: "Category 8",
    slug: "category-8",
  },
  {
    _id: 8,
    image:
      "https://images.pexels.com/photos/3262937/pexels-photo-3262937.jpeg?auto=compress&cs=tinysrgb&w=800",
    name: "Category 9",
    slug: "category-9",
  },
];
