export const addToCart = (product) => ({
  type: "ADD_CART",
  product,
});

export const removeFromCart = (itemIndex) => ({
  type: "REMOVE_CART",
  itemIndex,
});
