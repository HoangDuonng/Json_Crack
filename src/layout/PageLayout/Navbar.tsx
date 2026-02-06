import React from "react";
import Link from "next/link";
import { Button } from "@mantine/core";
import styled from "styled-components";
import { JSONCrackLogo } from "../JsonCrackLogo";

const StyledNavbarWrapper = styled.div`
  z-index: 3;
  transition: background 0.2s ease-in-out;
`;

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px 24px;
  background: white;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);

  @media only screen and (max-width: 768px) {
    padding: 16px 24px;
  }
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;

const Right = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  white-space: nowrap;
`;

const Center = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
  white-space: nowrap;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const Navbar = () => {
  return (
    <StyledNavbarWrapper className="navbar">
      <StyledNavbar>
        <Left>
          <JSONCrackLogo fontSize="1.2rem" />
        </Left>
        <Center>
          {/* <Button
            component={Link}
            prefetch={false}
            href="/docs"
            variant="subtle"
            color="black"
            size="md"
            radius="md"
          >
            Embed
          </Button> */}
          <Button
            component="a"
            href="https://github.com/HoangDuonng/Json_Visualization"
            target="_blank"
            variant="subtle"
            color="black"
            size="md"
            radius="md"
            rel="noopener"
          >
            Open Source
          </Button>
          <Button
            component={Link}
            prefetch={false}
            href="/converter/json-to-yaml"
            variant="subtle"
            color="black"
            size="md"
            radius="md"
          >
            Converter
          </Button>
          <Button
            component={Link}
            prefetch={false}
            href="/type/json-to-rust"
            variant="subtle"
            color="black"
            size="md"
            radius="md"
          >
            Generate Types
          </Button>
          <Button
            component={Link}
            prefetch={false}
            href="/tools/json-schema"
            variant="subtle"
            color="black"
            size="md"
            radius="md"
          >
            JSON Schema
          </Button>
        </Center>
        <Right>
          <Button
            radius="md"
            component="a"
            color="#202842"
            href="/editor"
            visibleFrom="sm"
            size="md"
          >
            Editor
          </Button>
        </Right>
      </StyledNavbar>
    </StyledNavbarWrapper>
  );
};
