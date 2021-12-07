const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_CART":
      const { product } = action;

      return [...state, product];
    case "REMOVE_CART":
      const { itemIndex } = action;
      const list = state.filter((product, index) => {
        return itemIndex !== index;
      });
      return list;
    default:
      return state;
  }
};

export default cartReducer;
