import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "./CartSlice";
import "./CartItem.css";

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // Calculate total amount for all products in the cart
  const calculateTotalCartAmount = () => {
    let value = 0;
    cart.forEach((plant) => {
      value += plant.quantity * parseFloat(plant.cost.substring(1));
    });
    return value;
  };

  const handleContinueShopping = (e) => {
    onContinueShopping(e);
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(
        updateQuantity({ name: item.name, quantity: item.quantity - 1 })
      );
    } else {
      dispatch(removeItem(item));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item));
  };

  const handleOnCheckout = () => {
    alert("Functionality to be added for future reference");
  };

  // Calculate total cost based on quantity for an item
  const calculateItemCost = (item) => {
    let value = item.quantity * parseFloat(item.cost.substring(1));
    return value;
  };

  return (
    <div className="cart-container">
      <h2 className="cart-total-amount">
        Total Cart Amount: ${calculateTotalCartAmount()}
      </h2>
      <div className="cart-content">
        {cart.map((item) => (
          <div className="cart-item" key={item.name}>
            <div className="cart-item-img-container">
              <img
                className="cart-item-image"
                src={item.image}
                alt={item.name}
              />
            </div>
            <div className="cart-item-details">
              <h4 className="cart-item-name">{item.name}</h4>
              <p className="cart-item-cost">Unit Price: {item.cost}</p>
              <div className="cart-item-quantity">
                <button
                  className="cart-item-button-dec"
                  onClick={() => handleDecrement(item)}
                >
                  -
                </button>
                <span className="cart-item-quantity-value">
                  {item.quantity}
                </span>
                <button
                  className="cart-item-button-inc"
                  onClick={() => handleIncrement(item)}
                >
                  +
                </button>
              </div>
              <div className="cart-item-total">
                Total: ${calculateItemCost(item)}
              </div>
              <button
                className="cart-item-delete"
                onClick={() => handleRemove(item)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-buttons-container">
        <button
          className="continue-shopping"
          onClick={(e) => handleContinueShopping(e)}
        >
          Continue Shopping
        </button>
        <button onClick={handleOnCheckout} className="checkout-button">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartItem;
