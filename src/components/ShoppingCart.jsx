import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  removeFromCart,
} from "../features/cart/cartSlice";
import CartItem from "./CartItem";

const ShoppingCart = () => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Your Cart</h2>
      <p>Total items: {totalItems}</p>
      <p>Total price: ${totalPrice.toFixed(2)}</p>
      {cart.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onIncrement={() => dispatch(increment(item.id))}
          onDecrement={() => dispatch(decrement(item.id))}
          onRemove={() => dispatch(removeFromCart(item.id))}
        />
      ))}
      <button onClick={() => alert("Checkout coming soon!")}>Checkout</button>
      <button>
        <a href="/products">Continue Shopping</a>
      </button>
    </div>
  );
};

export default ShoppingCart;
