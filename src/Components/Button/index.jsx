import { useHistory } from "react-router";
import { Container } from "./styles";

export const Button = ({ children, push }) => {
  const history = useHistory();
  return (
    <>
      <Container onClick={() => history.push(`${push}`)}>{children}</Container>
    </>
  );
};
