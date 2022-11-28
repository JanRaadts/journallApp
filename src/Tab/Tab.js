import styled from "styled-components";

export default function Tab({ name, showLength, handleClick }) {
  return (
    <>
      <StyledTab type="button" onClick={handleClick}>
        {name} {showLength}
      </StyledTab>
    </>
  );
}

const StyledTab = styled.button`
  border: 1px #a0b3d9 solid;
  background-color: #a0b3d9;
  padding: 10px;
  border-radius: 5px;
`;
