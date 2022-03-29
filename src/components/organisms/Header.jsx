import styled from "styled-components";
import { Appbar } from "../molecules/Appbar";
import { Menu } from "../molecules/Menu";

export const Header = () => {
  return (
    <SHeader>
      <Appbar />
      <Menu />
    </SHeader>
  );
};

const SHeader = styled.div``;
