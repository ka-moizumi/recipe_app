import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const SecondaryButton = (props) => {
  const { children } = props;
  return <SButton>{children}</SButton>;
};

const SButton = styled(BaseButton)`
  color: #ffffff;
  padding: 4px 16px;
  margin: 0 4px;
  background-color: #3333ee;
`;
