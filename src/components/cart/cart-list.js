import React from "react"
import "../../assets/css/components/product/product-list.css"
import useCartStore from "../../lib/store"
import CartItem from "./cart-item"
import CartTotals from "./cart-totals"

const CartList = () => {
  const { cart, itemsInCart } = useCartStore()

  return cart.length === 0 ? (
    <div>No Items</div>
  ) : (
    <>
      <div className="cart-list grid-x grid-margin-y">
        {cart.map(item => (
          <CartItem {...item} key={item.sku} />
        ))}
      </div>
      <CartTotals cart={cart} itemsInCart={itemsInCart} />
    </>
  )
}

export default CartList
