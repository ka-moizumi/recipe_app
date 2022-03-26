import styled from "styled-components";
import { PrimaryButton } from "../atoms/button/PrimaryButton";

export const MeatPick = () => {
  return (
    <SMeatButton>
      <PrimaryButton>肉</PrimaryButton>
    </SMeatButton>
  );
};

const SMeatButton = styled.div``;
