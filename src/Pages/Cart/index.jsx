import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Button } from "../../Components/Button";
import { CartItem } from "../../Components/CartItem";
import { Header } from "../../Components/Header";
import {
  CardItems,
  Container,
  TotalContainer,
  CartBody,
  FinishButton,
  ItemInfo,
} from "./styles";

export const Cart = () => {
  const cart = useSelector((store) => store.cart);

  const history = useHistory();

  let cartStorage = JSON.parse(localStorage.getItem("cart"));

  let total = 0;

  let sum = cartStorage.reduce((acc, currentValue) => {
    return acc + currentValue.price;
  }, total);

  const checkout = () => {
    toast.success("Done! 💸 :)");
    history.push("/");
    localStorage.clear();
  };

  return (
    <Container>
      <div>
        <Header />

        <Button children="store 🧺" push="/" />
      </div>

      <CartBody>
        <TotalContainer>
          {cartStorage.map((product, index) => (
            <ItemInfo>
              <h4>{product.name}</h4>
              <p>{product.price}ꜩ</p>
            </ItemInfo>
          ))}
        </TotalContainer>
        <CardItems>
          {cartStorage.map((product, index) => (
            <CartItem itemIndex={index} key={index} product={product} />
          ))}
        </CardItems>
      </CartBody>
      <h2>Total</h2>
      <FinishButton onClick={checkout}>checkout {sum}ꜩ 💸</FinishButton>
    </Container>
  );
};
