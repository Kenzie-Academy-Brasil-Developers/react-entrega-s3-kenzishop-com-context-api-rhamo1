import { useContext } from "react";
import { CartContext } from "../../Providers/cart";
import { Image, ItemCard, RemoveButton } from "./styles";

export const CartItem = ({ product, itemIndex }) => {
  const { image } = product;

  const { removeFromCart } = useContext(CartContext);

  return (
    <ItemCard>
      <Image src={`${image}`} alt="" />
      <RemoveButton onClick={() => removeFromCart(itemIndex, product)}>
        remove
      </RemoveButton>
    </ItemCard>
  );
};
