import styled from "styled-components";

export const StyledEventCard = styled.div`
    width: 500px
    height: 165px;
    border: 2px solid ${({ theme }) => theme.blue};
    border-radius: 15px;
    padding: 5px 0px 5px 125px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    font-size: ${({ theme }) => theme.smallFont};
    font-family: ${({ theme }) => theme.poppinsFont};
    color: #555
    margin: 10px auto;

`;

export const StyledCardHeader = styled.div`
  font-size: 3rem;
`;
