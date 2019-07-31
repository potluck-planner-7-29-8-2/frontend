import styled from "styled-components";

export const StyledEventCard = styled.div`
    width: 500px
    height: 165px;
    border: 2px solid ${({ theme }) => theme.blue};
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    padding: 10px 20px;
    justify-content: space-around;
    font-size: ${({ theme }) => theme.smallFont};
    font-family: ${({ theme }) => theme.poppinsFont};
    color: #555
    background-color: #E5F5EB;
    margin: 10px auto;`;

export const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardDetails = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50%;
`;

export const CardCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const CardButtons = styled.div`
  outline: none;
  background-color: transparent;
`;

export const StyledCardHeader = styled.div`
  font-size: 3rem;
  text-align: center;
`;
