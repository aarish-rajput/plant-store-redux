import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

const PlantCard = ({ plant }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const isInCart = cart.find((item) => item.id === plant.id);

  const handleAdd = () => {
    dispatch(addToCart(plant));
  };

  return (
    <div>
      <img src={require(`../assets/${plant.image}`)} alt={plant.name} />
      <h3>{plant.name}</h3>
      <p>${plant.price}</p>
      <button onClick={handleAdd} disabled={isInCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default PlantCard;
