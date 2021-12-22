import { fullPage } from "../../utils/Common.style";

import styled from "styled-components";

export const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
  background-color: #ffffff;
  ${fullPage}
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 80px 0px;
  max-width: 1440px;
  width: 100%;
`;
