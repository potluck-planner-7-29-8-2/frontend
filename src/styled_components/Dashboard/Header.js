import styled from "styled-components";

export const HeaderDiv = styled.div`
  height: 125px;
  font-size: 2rem;
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
`;

export const HeaderTitle = styled.h1`
  font-size: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 500px;
`;

export const HeaderNavLinks = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-between;
`;
