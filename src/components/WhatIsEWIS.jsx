import styled from 'styled-components';
import { colors } from '../styles/GlobalStyles';

const Section = styled.section`
  padding: 80px 0;
  background: ${colors.primary};
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 70px;
`;

const SectionTitle = styled.h2`
  font-size: 42px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #ffffff;
`;

const SectionSubtitle = styled.p`
  font-size: 18px;
  color: ${colors.textSecondary};
  max-width: 700px;
  margin: 0 auto;
`;

const DataCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

const DataCard = styled.div`
  background: ${colors.cardBg};
  border: 1px solid ${colors.border};
  border-radius: 12px;
  padding: 35px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(74, 144, 226, 0.1);
    border-color: rgba(74, 144, 226, 0.5);
    transform: translateY(-5px);
  }
`;

const CardIcon = styled.div`
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, ${colors.secondary} 0%, ${colors.accent} 100%);
  border-radius: 10px;
  margin-bottom: 20px;
`;

const CardTitle = styled.h3`
  font-size: 24px;
  color: #ffffff;
  margin-bottom: 15px;
`;

const CardText = styled.p`
  color: ${colors.textSecondary};
  line-height: 1.7;
  font-size: 16px;
`;

function WhatIsEWIS() {
  return (
    <Section>
      <Container>
        <SectionHeader>
          <SectionTitle>What Is EWIS?</SectionTitle>
          <SectionSubtitle>
            An Early-Warning Intelligence System designed to identify land and environmental conditions that often appear before visible problems occur.
          </SectionSubtitle>
        </SectionHeader>

        <DataCards>
          <DataCard>
            <CardIcon />
            <CardTitle>Who It's For</CardTitle>
            <CardText>
              Agricultural producers, land managers, tribal governments, conservation partners, and organizations seeking earlier insight into land and environmental change.
            </CardText>
          </DataCard>

          <DataCard>
            <CardIcon />
            <CardTitle>Why It Matters</CardTitle>
            <CardText>
              By focusing on early signals instead of late symptoms, EWIS supports proactive planning, risk reduction, and smarter resource decisions.
            </CardText>
          </DataCard>

          <DataCard>
            <CardIcon />
            <CardTitle>Built on Trust</CardTitle>
            <CardText>
              Clarity over complexity, responsible innovation, practical impact, and long-term partnership.
            </CardText>
          </DataCard>
        </DataCards>
      </Container>
    </Section>
  );
}

export default WhatIsEWIS;
