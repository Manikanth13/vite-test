
export const initProducts = ({ commit, state }, product) => {
  commit("addProducts", product);

  commit('resetContents')
}

export const updateCartItem = ({ commit, state }, { product, operation, size }) => {
  const currentCart = [...state.cart];
  const productIndex = currentCart.findIndex(item => item.id === product.id && item.size === product.size);

  console.log('temp size', size, productIndex);

  if (operation === 'INC') {
    // Product doesn't exist in cart;
    if (productIndex === -1) {
      currentCart.push({ id: product.id, qty: 1, size: size });
    } else {
      currentCart[productIndex] = {
        ...currentCart[productIndex],
        qty: currentCart[productIndex].qty + 1,
        size: size
      }
    }
  } else {
    if (productIndex === -1) {
      return;
    }
    if (currentCart[productIndex].qty === 1) {
      currentCart.splice(productIndex, 1);
    } else {
      currentCart[productIndex] = {
        ...currentCart[productIndex],
        qty: currentCart[productIndex].qty - 1,
      }
    }
  }

  commit('updateCart', [...currentCart]);
}
