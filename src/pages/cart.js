import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import CartList from "../components/cart/cart-list"

const Cart = () => (
  <Layout>
    <SEO title="Cart" />
    <h1>Cart</h1>
    <CartList />
  </Layout>
)

export default Cart
