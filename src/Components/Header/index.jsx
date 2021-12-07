import "./styles";
import { HeaderContent } from "./styles";

export const Header = ({ push }) => {
  return (
    <HeaderContent>
      {/* <HeaderImage src={logo} alt="" /> */}
      <h1>Dalí on ꜩ</h1>
      <div>{/* <Button children="cart" push={push} /> */}</div>
    </HeaderContent>
  );
};
