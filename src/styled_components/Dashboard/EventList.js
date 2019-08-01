import styled from "styled-components";

export const EventListContainer = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  .no_events {
    font-size: ${({ theme }) => theme.hugeFont};
    margin-top: 50px;
    font-family: ${({ theme }) => theme.poppinsFont};
    color: ${({ theme }) => theme.darkBlue};
  }

  @media (max-width: 600px) {
    width: 500px;
    flex-direction: column;
  }
`;
