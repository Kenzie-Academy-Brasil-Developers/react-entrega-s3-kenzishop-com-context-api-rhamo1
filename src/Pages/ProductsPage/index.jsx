import { Header } from "../../Components/Header";
import { ProductCard } from "../../Components/ProductCard";
import { CardsContainer, Container } from "./styles";

import { Button } from "../../Components/Button";
import { useContext } from "react";
import { ProductsContext } from "../../Providers/products";

export const ProductsPage = () => {
  const { products } = useContext(ProductsContext);

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
