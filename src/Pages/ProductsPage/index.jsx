import { Header } from "../../Components/Header";
import { ProductCard } from "../../Components/ProductCard";
import { CardsContainer, Container } from "./styles";

import { useSelector } from "react-redux";
import { Button } from "../../Components/Button";

export const ProductsPage = () => {
  const products = useSelector((store) => store.products);
  console.log(products);

  return (
    <Container>
      <div>
        <Header />

        <Button children="cart 🛒" push="/cart" />
      </div>

      <CardsContainer>
        {products.map((product, index) => {
          return (
            <div key={index}>
              <ProductCard product={product} />
            </div>
          );
        })}
      </CardsContainer>
    </Container>
  );
};
