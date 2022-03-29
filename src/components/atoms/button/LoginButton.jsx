import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const LoginButton = () => {
  return <SButton>ログイン</SButton>;
};

const SButton = styled(BaseButton)`
  margin: 35px 10px;
`;
