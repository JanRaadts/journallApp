import styled from "styled-components";

export default function Header() {
  return (
    <StyledHeader>
      <Überschrift>Journal</Überschrift>
    </StyledHeader>
  );
}

const StyledHeader = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #a0b3d9;
  height: 50px;
`;

const Überschrift = styled.h1`
  font-size: 25px;
  color: black;
`;
