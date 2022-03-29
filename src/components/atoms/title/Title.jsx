import styled from "styled-components";
import { BaseButton } from "../button/BaseButton";

export const Title = () => {
  return <STitle>CookedRecipe</STitle>;
};

const STitle = styled(BaseButton)`
  width: 200px;
  height: 100px;
  font-size: 26px;
  padding: 0;
  margin: 0;
  background: transparent;
  }
`;
