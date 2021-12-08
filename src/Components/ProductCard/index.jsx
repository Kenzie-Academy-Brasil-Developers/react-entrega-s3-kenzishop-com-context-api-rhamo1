import { useContext } from "react";
import { CartContext } from "../../Providers/cart/index";
import { AddButton, Container, Image } from "./styles";
// import toast from "react-hot-toast";

export const ProductCard = ({ product }) => {
  const { name, image, price } = product;

  const { addToCart } = useContext(CartContext);

  return (
    <Container>
      <h2>{name}</h2>
      <h3>{price} ꜩ</h3>
      <Image src={image} alt="" />
      <AddButton onClick={() => addToCart(product)}>Add to cart 🛒</AddButton>
    </Container>
  );
};
