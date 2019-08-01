import styled from "styled-components";

export const HeaderDiv = styled.div`
  height: 125px;
  font-size: 2rem;
  color: ${({ theme }) => theme.darkBlue};
  font-family: ${({ theme }) => theme.poppinsFont};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 10px;
  border-bottom: 5px solid ${({ theme }) => theme.blue};
  background-color: #e6ebee;

  img {
    height: 100px;
    width: 100px;
  }

  @media (max-width: 600px) {
    width: 100vw;
    flex-direction: column;
    height: 200%;
  }
`;

export const HeaderTitle = styled.h1`
  font-size: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 500px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const HeaderNavLinks = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: space-around;
    border: 1px solid blue;
    height: 150px;
    width: 50%;
    margin: 10px;
    font-size: 3rem;
  }
`;
