import styled from 'styled-components';
import { colors } from '../styles/GlobalStyles';

const HeroSection = styled.section`
  padding: 60px 0;
  background: linear-gradient(135deg, #1a1f3a 0%, #0a0e27 100%);
  border-bottom: 1px solid ${colors.border};
`;




const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
`;

const HeroContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const HeroLeft = styled.div``;

const HeroTitle = styled.h1`
  font-size: 56px;
  font-weight: 800;
  margin-bottom: 25px;
  background: linear-gradient(135deg, #ffffff 0%, ${colors.secondary} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 42px;
  }
`;

const HeroDescription = styled.p`
  font-size: 20px;
  color: ${colors.textSecondary};
  margin-bottom: 40px;
  line-height: 1.7;
`;


const CTAButton = styled.a`
  display: inline-block;
  padding: 16px 35px;
  background: linear-gradient(135deg, ${colors.secondary} 0%, ${colors.accent} 100%);
  color: white;
  border-radius: 6px;
  font-weight: 600;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

const StatsVisual = styled.div`
  background: rgba(74, 144, 226, 0.1);
  border: 1px solid ${colors.border};
  border-radius: 12px;
  padding: 40px;
  backdrop-filter: blur(10px);
`;

const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

const StatItem = styled.div`
  background: rgba(255,255,255,0.05);
  padding: 20px;
  border-radius: 8px;
  border: 1px solid rgba(255,255,255,0.1);

  &:first-child {
    grid-column: span 2;
  }

  


`;

const StatLabel = styled.div`
  font-size: 14px;
  color: ${colors.accent};
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 8px;
`;

const StatValue = styled.div`
  font-size: 32px;
  font-weight: 700;
  color: #ffffff;
`;

function Hero() {
  return (
    <HeroSection>
      <Container>
          <HeroContent>
          <HeroLeft>
              
            <HeroTitle>AI-driven satellite intelligence for earlier awareness</HeroTitle>
            <HeroDescription>
              EWIS analyzes satellite and environmental data to deliver early insights and alerts that help organizations anticipate change and make informed decisions.
            </HeroDescription>
            <HeroDescription>
              Designed for agriculture, land management, and early environmental risk detection.
            </HeroDescription>
            <HeroDescription style={{ fontWeight: 600, color: colors.secondary }}>
            Evaluation-Ready Prototype
          </HeroDescription>
            
            <CTAButton href="https://allsatai-ewis.streamlit.app/" target="_blank" rel="noopener noreferrer">
              Launch Prototype Dashboard →
              <p><center>(Read-Only)</center></p>
            </CTAButton>
          </HeroLeft>

          <StatsVisual>
            <StatGrid>
              <StatItem>
                <StatLabel>Data Sources</StatLabel>
                <StatValue>Simulated and Publicly Available data</StatValue>
              </StatItem>
              <StatItem>
                <StatLabel>Coverage</StatLabel>
                <StatValue>Global</StatValue>
              </StatItem>
              <StatItem>
                <StatLabel>Status</StatLabel>
                <StatValue>In Testing</StatValue>
              </StatItem>
            </StatGrid>
          </StatsVisual>
        </HeroContent>
      </Container>
    </HeroSection>
  );
}

export default Hero;
