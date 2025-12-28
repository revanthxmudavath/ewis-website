import styled from 'styled-components';
import { colors } from '../styles/GlobalStyles';

const Section = styled.section`
  padding: 80px 0;
  background: #050814;
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

const ProcessFlow = styled.div`
  background: rgba(255,255,255,0.03);
  padding: 60px;
  border-radius: 16px;
  margin: 60px 0;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

const FlowSteps = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  position: relative;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

const FlowStep = styled.div`
  text-align: center;
  position: relative;
`;

const StepNumber = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, ${colors.secondary} 0%, ${colors.accent} 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 700;
  margin: 0 auto 20px;
`;

const StepTitle = styled.h4`
  font-size: 20px;
  color: #ffffff;
  margin-bottom: 10px;
`;

const StepText = styled.p`
  color: ${colors.textSecondary};
  font-size: 15px;
  line-height: 1.6;
`;

function HowItWorks() {
  return (
    <Section>
      <Container>
        <SectionHeader>
          <SectionTitle>How EWIS Works</SectionTitle>
          <SectionSubtitle>
            A streamlined process from data collection to actionable intelligence
          </SectionSubtitle>
        </SectionHeader>

        <ProcessFlow>
          <FlowSteps>
            <FlowStep>
              <StepNumber>1</StepNumber>
              <StepTitle>Data Collection</StepTitle>
              <StepText>
                Collects satellite and environmental data from multiple sources
              </StepText>
            </FlowStep>

            <FlowStep>
              <StepNumber>2</StepNumber>
              <StepTitle>Signal Processing</StepTitle>
              <StepText>
                Processes signals using rule-based logic and AI analysis
              </StepText>
            </FlowStep>

            <FlowStep>
              <StepNumber>3</StepNumber>
              <StepTitle>Actionable Insights</StepTitle>
              <StepText>
                Presents results through dashboards, indicators, and alerts
              </StepText>
            </FlowStep>
          </FlowSteps>
        </ProcessFlow>
      </Container>
    </Section>
  );
}

export default HowItWorks;
