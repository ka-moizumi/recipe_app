import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const PrimaryButton = (props) => {
  const buttonStyle = { backgroundColor: props.bgColor };
  return <SButton style={buttonStyle}>{props.children}</SButton>;
};

const SButton = styled(BaseButton)`
  color: #000000;
  margin: 10px 10px;
  padding: 4px 16px;
`;
