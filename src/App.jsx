import React from "react";
import styled from "styled-components";
import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { CheckBox } from "./components/atoms/CheckBox/Checkbox";
import { SearchInput } from "./components/molecules/SeachInput";

export const App = () => {
  return (
    <SWrapper>
      <SHeader>
        <PrimaryButton>ホーム</PrimaryButton>
        <PrimaryButton>レシピ登録</PrimaryButton>
        <PrimaryButton>お気に入り</PrimaryButton>
      </SHeader>
      <SearchInput />
      <SGenre>
        <PrimaryButton bgColor="red">肉</PrimaryButton>
        <PrimaryButton bgColor="blue">魚</PrimaryButton>
        <PrimaryButton bgColor="green">野菜</PrimaryButton>
        <PrimaryButton bgColor="brown">いも・きのこ類</PrimaryButton>
        <PrimaryButton bgColor="yellow">卵・乳製品</PrimaryButton>
      </SGenre>
      <SFood>
        <CheckBox id={1} value={1} name={"buta"} />
        豚バラ
      </SFood>
    </SWrapper>
  );
};

const SWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const SHeader = styled.div`
  display: flex;
  background-color: #aaeeaa;
`;

const SGenre = styled.div`
  width: 100%;
  background-color: #dddddd;
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
`;

const SFood = styled.div``;
