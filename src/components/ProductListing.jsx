import React from "react";
import PlantCard from "./PlantCard";

const plants = [
  {
    id: 1,
    name: "Snake Plant",
    category: "Indoor",
    price: 15,
    image: "plant1.jpeg",
  },
  {
    id: 2,
    name: "Fiddle Leaf Fig",
    category: "Indoor",
    price: 25,
    image: "plant2.jpg",
  },
  {
    id: 3,
    name: "Aloe Vera",
    category: "Succulent",
    price: 10,
    image: "plant3.jpg",
  },
  {
    id: 4,
    name: "Cactus",
    category: "Succulent",
    price: 12,
    image: "plant4.jpg",
  },
  {
    id: 5,
    name: "Spider Plant",
    category: "Air Purifying",
    price: 18,
    image: "plant5.jpg",
  },
  {
    id: 6,
    name: "Peace Lily",
    category: "Air Purifying",
    price: 20,
    image: "plant6.jpg",
  },
];

const ProductListing = () => {
  return (
    <div>
      <h2>Our Plants</h2>
      <div>
        {plants.map((plant) => (
          <PlantCard key={plant.id} plant={plant} />
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
