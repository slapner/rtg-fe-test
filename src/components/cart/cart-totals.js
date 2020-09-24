import React from "react"
import "../../assets/css/components/cart/cart-totals.css"

const CartTotals = ({ cart, itemsInCart }) => {
  const subtotal = cart.reduce(
    (accumulatedQuantity, cartItem) =>
      accumulatedQuantity + cartItem.quantity * cartItem.price,
    0
  )

  const tax = subtotal * 0.1
  const shippingCost = 50 + 50 * 0.2 - 5 * itemsInCart()

  const totalCost = subtotal + tax + shippingCost

  return (
    <div className="cart-totals grid-y">
      <div className="total-value cell">
        <strong>Subtotal:</strong> ${subtotal.toFixed(2)}
      </div>
      <div className="total-value cell">
        <strong>Tax:</strong> ${tax.toFixed(2)}
      </div>
      <div className="total-value cell">
        <strong>Shipping:</strong> ${shippingCost}
      </div>
      <div className="total-value cell">
        <strong>Total Cost:</strong> ${totalCost.toFixed(2)}
      </div>
    </div>
  )
}

export default CartTotals
