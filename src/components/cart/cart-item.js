import React from "react"
import CartItemActions from "./cart-item-actions"

const CartItem = product => {
  const totalPrice = (product.price * product.quantity).toFixed(2)

  return (
    <div
      className="product cell small-12 grid-x grid-margin-x"
      id={product.sku}
    >
      <div className="product-image cell small-2">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-title cell small-4">{product.title}</div>
      <div className="product-sku cell small-2">{product.sku}</div>
      <div className="product-price cell small-2">${totalPrice}</div>
      <div className="product-actions cell small-2">
        <CartItemActions {...product} />
      </div>
    </div>
  )
}

export default CartItem
