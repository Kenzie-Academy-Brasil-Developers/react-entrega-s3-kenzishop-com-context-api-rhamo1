import { AddButton, Container, Image } from "./styles";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { addCartThunk } from "../../Store/modules/cart/thunks";

export const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { name, image, price } = product;

  const addItem = () => {
    dispatch(addCartThunk(product));
    toast(`${name}`, {
      icon: "🛒",
    });
  };
  return (
    <Container>
      <h2>{name}</h2>
      <h3>{price} ꜩ</h3>
      <Image src={image} alt="" />
      <AddButton onClick={() => addItem()}>Add to cart 🛒</AddButton>
    </Container>
  );
};
