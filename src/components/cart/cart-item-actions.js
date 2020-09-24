import React from "react"
import useCartStore from "../../lib/store"
import "../../assets/css/components/cart/cart-item-actions.css"

const CartItemActions = cartItem => {
  const {
    removeItemFromCart,
    addItemToCart,
    clearItemFromCart,
  } = useCartStore()

  return (
    <div className="grid-x">
      <div className="cell small-8">
        <button
          className="action-btn"
          onClick={() => removeItemFromCart(cartItem)}
        >
          <span role="img" aria-label="minus">
            ➖
          </span>
        </button>
        <span className="quantity-num">{cartItem.quantity}</span>
        <button className="action-btn" onClick={() => addItemToCart(cartItem)}>
          <span role="img" aria-label="plus">
            ➕
          </span>
        </button>
      </div>
      <button
        className="action-btn"
        onClick={() => clearItemFromCart(cartItem)}
      >
        <span role="img" aria-label="trash">
          🗑️
        </span>
      </button>
    </div>
  )
}

export default CartItemActions
