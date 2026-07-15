import products from "./products.json";

const steps = [
  {
    id: 1,
    title: "Choose your cameras",
    category: "cameras",
    products: products.cameras,
  },
  {
    id: 2,
    title: "Choose your plan",
    category: "plans",
    products: products.plans,
  },
  {
    id: 3,
    title: "Choose your sensors",
    category: "sensors",
    products: products.sensors,
  },
  {
    id: 4,
    title: "Add extra protection",
    category: "accessories",
    products: products.accessories,
  },
];

export default steps;