import styled from "styled-components";
import { Title } from "../atoms/title/Title";
import { LoginButton } from "../atoms/button/LoginButton";

export const Appbar = () => {
  return (
    <SAppbar>
      <Title />
      <LoginButton />
    </SAppbar>
  );
};

const SAppbar = styled.div`
  display: flex;
  justify-content: space-between;
`;
