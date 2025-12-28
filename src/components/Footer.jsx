import styled from 'styled-components';
import { colors } from '../styles/GlobalStyles';

const FooterWrapper = styled.footer`
  background: #050814;
  padding: 60px 0 30px;
  border-top: 1px solid ${colors.border};
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const FooterSection = styled.div``;

const FooterTitle = styled.h4`
  font-size: 18px;
  margin-bottom: 20px;
  color: ${colors.secondary};
`;

const FooterText = styled.p`
  color: #7a8199;
  font-size: 15px;
  margin-bottom: 12px;
  line-height: 1.6;
`;

const FooterLink = styled.a`
  color: #7a8199;
  font-size: 15px;
  display: block;
  margin-bottom: 12px;
  transition: color 0.3s;

  &:hover {
    color: ${colors.secondary};
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  padding-top: 30px;
  border-top: 1px solid rgba(255,255,255,0.1);
  color: #7a8199;
  font-size: 14px;
`;

function Footer() {
  return (
    <FooterWrapper id="contact">
      <Container>
        <FooterGrid>
          <FooterSection>
            <FooterTitle>ALLSAT AI LLC</FooterTitle>
            <FooterText>
              Practical, affordable satellite intelligence for better decisions
            </FooterText>
          </FooterSection>

          <FooterSection>
            <FooterTitle>Contact</FooterTitle>
            <FooterLink href="mailto:gregallen@allsatai.com">
              gregallen@allsatai.com
            </FooterLink>
            <FooterLink href="tel:5034159855">
              (503) 415-9855
            </FooterLink>
          </FooterSection>

          <FooterSection>
            <FooterTitle>Connect</FooterTitle>
            <FooterLink href="https://allsatai.com" target="_blank" rel="noopener noreferrer">
              www.allsatai.com
            </FooterLink>
            <FooterLink href="https://allsatai-ewis.streamlit.app/" target="_blank" rel="noopener noreferrer">
              EWIS Prototype
            </FooterLink>
          </FooterSection>
        </FooterGrid>

        <FooterBottom>
          <p>© 2024 ALLSAT AI LLC. All rights reserved. </p>
        </FooterBottom>
      </Container>
    </FooterWrapper>
  );
}

export default Footer;
