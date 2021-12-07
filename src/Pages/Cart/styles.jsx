import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  width: 80vw;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const CartBody = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const CardItems = styled.div`
  display: flex;
  flex-direction: column;

  width: 300px;
  padding: 40px;
  margin: 10px;

  border: 3px solid black;
`;

export const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px;
  margin: 10px;

  border: 3px solid black;
`;

export const FinishButton = styled.button`
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  letter-spacing: 2px;
  text-decoration: none;
  text-transform: uppercase;
  color: #000;
  cursor: pointer;
  border: 3px solid;
  padding: 0.5em 0.5em;
  box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px,
    5px 5px 0px 0px;
  position: relative;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:active {
    text-transform: lowercase;
    box-shadow: 0px 0px 0px 0px;
    top: 5px;
    left: 5px;
  }
`;

export const ItemInfo = styled.div`
  border: 5px solid black;
`;
