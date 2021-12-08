import { useContext } from "react";
import toast from "react-hot-toast";
import { useHistory } from "react-router";
import { Button } from "../../Components/Button";
import { CartItem } from "../../Components/CartItem";
import { Header } from "../../Components/Header";
import { CartContext } from "../../Providers/cart/index";
import {
  CardItems,
  Container,
  TotalContainer,
  CartBody,
  FinishButton,
  ItemInfo,
} from "./styles";

export const Cart = () => {
  const history = useHistory();

  const { cart, setCart } = useContext(CartContext);

  let total = 0;

  let sum = cart.reduce((acc, currentValue) => {
    return acc + currentValue.price;
  }, total);

  const checkout = () => {
    toast.success("Done! 💸 :)");
    history.push("/");
    setCart([]);
  };

  return (
    <Container>
      <div>
        <Header />

        <Button children="store 🧺" push="/" />
      </div>

      <CartBody>
        <TotalContainer>
          {cart.map((product, index) => (
            <ItemInfo key={index}>
              <h4>{product.name}</h4>
              <p>{product.price}ꜩ</p>
            </ItemInfo>
          ))}
        </TotalContainer>
        <CardItems>
          {cart.map((product, index) => (
            <CartItem itemIndex={index} key={index} product={product} />
          ))}
        </CardItems>
      </CartBody>
      <h2>Total</h2>
      <FinishButton onClick={checkout}>checkout {sum}ꜩ 💸</FinishButton>
    </Container>
  );
};
