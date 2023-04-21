export const addProducts = (state, products) => {
  state.products = products;
}

export const updateCart = (state, cart) => {
  state.cart = cart;
}

export const cartItems = (state, payload) => {
  if (state.cart.length) {
    const idx = state.cart.findIndex((c) => c.id === payload.id);
    if (idx !== -1) {
      state.cart = [
        ...state.cart.map((item) =>
          item.id !== payload.id ? item : { ...item, ...payload }
        )
      ];
      state.cart = state.cart.filter((c) => c.quantity !== 0);
    } else {
      if (payload.quantity) state.cart.push(payload);
    }
    return;
  }
  if (payload.quantity) state.cart.push(payload);
}

export const resetContents = (state) => {
  state.productById = [];
  state.cart = [];
}