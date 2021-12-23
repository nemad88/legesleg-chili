import styled from "styled-components";
import aCsapatJPG from "../../assets/a_csapat.jpg";

export const StyledFullPageImage = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${aCsapatJPG});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
`;
