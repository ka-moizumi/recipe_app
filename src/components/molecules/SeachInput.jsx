import styled from "styled-components";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { Input } from "../atoms/input/Input";

export const SearchInput = () => {
  return (
    <SSearchInput>
      <Input placeholder="食材を入力" />
      <SecondaryButton>検索</SecondaryButton>
    </SSearchInput>
  );
};

const SSearchInput = styled.div`
  width: 100%;
  text-align: center;
  padding: 8px;
`;
