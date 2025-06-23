import React from "react";

const CartItem = ({ item, onIncrement, onDecrement, onRemove }) => {
  return (
    <div>
      <img src={require(`../assets/${item.image}`)} alt={item.name} />
      <h3>{item.name}</h3>
      <p>Unit Price: ${item.price}</p>
      <p>Quantity: {item.quantity}</p>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement} disabled={item.quantity <= 1}>
        -
      </button>
      <button onClick={onRemove}>Delete</button>
    </div>
  );
};

export default CartItem;
