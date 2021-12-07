import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  width: 80vw;
  justify-content: center;
  align-items: center;
  padding: 20px;

  img {
    height: 200px;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 980px) {
    flex-direction: column;
  }
`;
