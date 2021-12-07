import { addToCart, removeFromCart } from "./actions";

export const addCartThunk = (product) => (dispatch) => {
  let list = JSON.parse(localStorage.getItem("cart")) || [];
  list = [...list, product];
  localStorage.setItem("cart", JSON.stringify(list));
  dispatch(addToCart(product));
};

export const removeCartThunk = (product) => (dispatch) => {
  console.log(product);
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  console.log(cart);

  let newCart = cart.filter((item, index) => index !== product);

  //filtrar o item da lista no localstorage

  console.log(newCart);

  localStorage.setItem("cart", JSON.stringify(newCart));

  dispatch(removeFromCart(newCart));
};
