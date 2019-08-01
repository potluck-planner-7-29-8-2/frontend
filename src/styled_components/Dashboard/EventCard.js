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
    background-color: #E6EBEE;
    margin: 10px auto;

    .card-field {
      font-weight: 900;
    }  
    
    @media (max-width: 500px) {
      max-width: 425px;
    }
    `;

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
  background-color: transparent;

  button {
    outline: none;
    background-color: ${({ theme }) => theme.blue};
    border-radius: 5px;
  }
`;

export const StyledCardHeader = styled.div`
  font-size: 3rem;
  text-align: center;
`;

export const LeaveButton = styled.button`
  font-size: ${({ theme }) => theme.smallFont};
  font-family: ${({ theme }) => theme.poppinsFont};
  color: #fff;
  passing: 0 20px;
  height: 35px;
  width: 100%;
  background: ${({ theme }) => theme.blue};
  outline: none;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.darkBlue};
  }
`;
