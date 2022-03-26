import styled from "styled-components";

export const CheckBox = ({ id, value, name }) => {
  return <SCheckBox type="checkbox" id={id} value={value} name={name} />;
};

const SCheckBox = styled.input`
  margin-top: 8px;
  margin-left: 16px;
`;
