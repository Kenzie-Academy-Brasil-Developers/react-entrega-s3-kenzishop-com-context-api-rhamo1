import { Switch, Route } from "react-router-dom";
import { Cart } from "../Pages/Cart";
import { ProductsPage } from "../Pages/ProductsPage";

export const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <ProductsPage />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
    </>
  );
};
