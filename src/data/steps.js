import products from "./products.json";

const steps = [
  {
    id: 1,
    title: "Choose your cameras",
    category: "cameras",
    icon: "/images/products/livestream.png",
    products: products.cameras,
    type: "multi",
  },
  {
    id: 2,
    title: "Choose your plan",
    category: "plans",
    icon: "/images/products/Vector.png",
    products: products.plans,
    type: "multi",
  },
  {
    id: 3,
    title: "Choose your sensors",
    category: "sensors",
    icon: "/images/products/sensor_icon.png",
    products: products.sensors,
    type: "multi",
  },
  {
    id: 4,
    title: "Add extra protection",
    category: "accessories",
    icon: "/images/products/extra_icon.png",
    products: products.accessories,
    type: "multi",
  },
  {
    id: 5,
    title: "Shipping",
    category: "shipping",
    products: products.shipping,
    hidden: true,
  },
];

export default steps;
