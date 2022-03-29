import styled from "styled-components";
import { PrimaryButton } from "../atoms/button/PrimaryButton";

export const Menu = () => {
  return (
    <SMenu>
      <PrimaryButton>検索</PrimaryButton>
      <PrimaryButton>登録</PrimaryButton>
      <PrimaryButton>一覧</PrimaryButton>
      <PrimaryButton>お気に入り</PrimaryButton>
    </SMenu>
  );
};

const SMenu = styled.div`
  background-color: #dddddd;
  display: flex;
  justify-content: center;
`;
