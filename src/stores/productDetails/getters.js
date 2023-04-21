export const cartItems = (state) => state.cart;

export const getProducts = (state) => state.products;

export const getProductById = (state) => (id) => {
  return state.products.data.find(product => String(product.id) === String(id))
}

export const getTotalPrice = (state) => {
  return state.cart.reduce((acc, value) => acc + value.qty * value.price, 0);
}

export const removeCartITem = (state) => (item) => {
  state.cart = state.cart.filter((cartItem) => {
    return cartItem.id != item.id;
  });
}

export const getCartTotalItems = (state) => {
  return state.cart.reduce((product, value) => product + value.qty, 0);
}