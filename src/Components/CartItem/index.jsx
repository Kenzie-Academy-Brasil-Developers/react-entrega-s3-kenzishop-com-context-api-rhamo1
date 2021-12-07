import { Image, ItemCard, RemoveButton } from "./styles";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../Store/modules/cart/actions";
import toast from "react-hot-toast";
import { removeCartThunk } from "../../Store/modules/cart/thunks";

export const CartItem = ({ product, itemIndex }) => {
  const dispatch = useDispatch();
  const { name, image } = product;
  //   console.log(product);

  const removeItem = () => {
    dispatch(removeCartThunk(itemIndex));
    toast(`${name}`, {
      icon: "🗑️",
    });
  };
  return (
    <ItemCard>
      <Image src={`${image}`} alt="" />
      <RemoveButton onClick={() => removeItem()}>remove</RemoveButton>
    </ItemCard>
  );
};
