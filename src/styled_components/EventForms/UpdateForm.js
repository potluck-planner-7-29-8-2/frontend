import styled from "styled-components";
import { device } from "../device";

export const UpdateContainer = styled.div`
  display: flex;
  width: 1200px;
  height: 800px;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 auto;

  @media ${device.mobileL} {
    width: 100%;
  }
`;

export const UpdateLeftColumn = styled.div`
  height: 450px;
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  h2,
  li {
    list-style-type: none;
    font-family: ${({ theme }) => theme.poppinsFont};
    font-size: ${({ theme }) => theme.mediumFont};

    span {
      text-decoration: underline;
    }
  }

  @media ${device.mobileL} {
    display: none;
  }
`;