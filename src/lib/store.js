import create from "zustand"

const useCartStore = create((set, get) => ({
  cart: [],
  addItemToCart: itemToAdd => {
    const cart = get().cart
    const existingItem = cart.find(cartItem => cartItem.sku === itemToAdd.sku)

    if (existingItem) {
      set({
        cart: cart.map(cartItem =>
          cartItem.sku === itemToAdd.sku
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        ),
      })
    } else {
      set({ cart: [...cart, { ...itemToAdd, quantity: 1 }] })
    }
  },
  removeItemFromCart: itemToRemove => {
    const cart = get().cart
    const existingItem = cart.find(
      cartItem => cartItem.sku === itemToRemove.sku
    )

    if (existingItem.quantity === 1) {
      set({ cart: cart.filter(cartItem => cartItem.sku !== itemToRemove.sku) })
    } else {
      set({
        cart: cart.map(cartItem =>
          cartItem.sku === itemToRemove.sku
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        ),
      })
    }
  },
  clearItemFromCart: itemToClear =>
    set(state => ({
      cart: state.cart.filter(item => item.sku !== itemToClear.sku),
    })),
  getCartTotal: () => {},
  itemsInCart: () => {
    const cart = get().cart
    return cart.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
  },
}))

export default useCartStore
