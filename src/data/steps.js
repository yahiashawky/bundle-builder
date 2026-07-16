import products from "./products.json";

const steps = [
  {
    id: 1,
    title: "Choose your cameras",
    category: "cameras",
    icon: "/images/products/livestream.png",
    products: products.cameras,
  },
  {
    id: 2,
    title: "Choose your plan",
    category: "plans",
    icon: "/images/products/Vector.png",
    products: products.plans,
  },
  {
    id: 3,
    title: "Choose your sensors",
    category: "sensors",
    icon: "/images/products/sensor_icon.png",
    products: products.sensors,
  },
  {
    id: 4,
    title: "Add extra protection",
    category: "accessories",
    icon: "/images/products/extra_icon.png",
    products: products.accessories,
  },
];

export default steps;