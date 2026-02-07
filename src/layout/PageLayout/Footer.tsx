import React from "react";
import Link from "next/link";
import { Anchor, Container, Flex, Stack, Text } from "@mantine/core";
import styled from "styled-components";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GithubButton } from "../../components/GithubButton";
import { JSONCrackLogo } from "../JsonCrackLogo";

const StyledFooter = styled.footer`
  background: #f7f3e6;
  border-top: 1px solid #e8e4db;
  padding: 60px 0 40px;
`;

const StyledFooterContent = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 80px;

  @media (max-width: 768px) {
    padding: 0 24px;
  }
`;

const StyledFooterGrid = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 60px;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 40px;
  }
`;

const StyledFooterLeft = styled.div`
  flex: 1;
  max-width: 400px;
`;

const StyledFooterRight = styled.div`
  display: flex;
  gap: 80px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 40px;
  }
`;

const StyledFooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const StyledFooterTitle = styled.h3`
  font-size: 13px;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const StyledFooterLink = styled.a`
  font-size: 14px;
  color: #666666;
  text-decoration: none;
  transition: color 0.2s;
  cursor: pointer;

  &:hover {
    color: #1a1a1a;
  }
`;

const StyledFooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 40px;
  border-top: 1px solid #e8e4db;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const StyledCopyright = styled(Text)`
  font-size: 13px;
  color: #999999;
`;

const StyledSocialLinks = styled.div`
  display: flex;
  gap: 16px;
`;

const StyledSocialLink = styled.a`
  color: #666666;
  transition: color 0.2s;
  cursor: pointer;

  &:hover {
    color: #1a1a1a;
  }
`;

interface FooterProps {
  stars?: number;
}

export const Footer: React.FC<FooterProps> = ({ stars = 0 }) => {
  return (
    <StyledFooter>
      <StyledFooterContent>
        <StyledFooterGrid>
          <StyledFooterLeft>
            <StyledFooterSection>
              <JSONCrackLogo style={{ color: "#1a1a1a" }} />
              <Text size="sm" c="#666666" style={{ maxWidth: "300px" }}>
                The best online JSON viewer to visualize, format and explore your data.
              </Text>
              <Anchor href="mailto:hoangduong@nguuyen.io.vn" c="#666666" size="sm">
                hoangduong@nguuyen.io.vn
              </Anchor>
            </StyledFooterSection>
          </StyledFooterLeft>

          <StyledFooterRight>
            <StyledFooterSection>
              <StyledFooterTitle>Product</StyledFooterTitle>
              <StyledFooterLink
                href="https://github.com/HoangDuonng/Json_Visualization"
                target="_blank"
                rel="noopener"
              >
                Open Source
              </StyledFooterLink>
              <GithubButton
                stars={stars}
                href="https://github.com/HoangDuonng/Json_Visualization"
              />
            </StyledFooterSection>

            <StyledFooterSection>
              <StyledFooterTitle>Resources</StyledFooterTitle>
              <Link href="/#faq" prefetch={false}>
                <StyledFooterLink>FAQ</StyledFooterLink>
              </Link>
              <Link href="/docs" prefetch={false}>
                <StyledFooterLink>Docs</StyledFooterLink>
              </Link>
            </StyledFooterSection>

            <StyledFooterSection>
              <StyledFooterTitle>Community</StyledFooterTitle>
              <StyledSocialLinks>
                <StyledSocialLink
                  aria-label="LinkedIn"
                  href="https://www.linkedin.com/in/hoangduonng/"
                  rel="noopener"
                >
                  <FaLinkedin size={20} />
                </StyledSocialLink>
                <StyledSocialLink
                  aria-label="X"
                  href="https://x.com/HoanggDuonng"
                  rel="noopener"
                >
                  <FaXTwitter size={20} />
                </StyledSocialLink>
                <StyledSocialLink
                  aria-label="GitHub"
                  href="https://github.com/HoangDuonng"
                  rel="noopener"
                >
                  <FaGithub size={20} />
                </StyledSocialLink>
              </StyledSocialLinks>
            </StyledFooterSection>
          </StyledFooterRight>
        </StyledFooterGrid>

        <StyledFooterBottom>
          <StyledCopyright>
            © {new Date().getFullYear()} JSON Visualization. All rights reserved.
          </StyledCopyright>
          <Flex gap="xl">
            <Link href="/legal/terms" prefetch={false}>
              <StyledFooterLink>Terms</StyledFooterLink>
            </Link>
            <Link href="/legal/privacy" prefetch={false}>
              <StyledFooterLink>Privacy</StyledFooterLink>
            </Link>
          </Flex>
        </StyledFooterBottom>
      </StyledFooterContent>
    </StyledFooter>
  );
};
