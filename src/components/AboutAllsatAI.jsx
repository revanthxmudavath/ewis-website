import styled from 'styled-components';
import { colors } from '../styles/GlobalStyles';

const Section = styled.section`
  background: linear-gradient(135deg, #2B4C7E 0%, #1a2f4d 100%);
  padding: 100px 0;
  text-align: center;
  color: white;
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
`;

const MissionContent = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const MainTitle = styled.h2`
  font-size: 48px;
  margin-bottom: 30px;
  color: #ffffff;
`;

const LeadText = styled.p`
  font-size: 22px;
  color: #e3f2fd;
  line-height: 1.8;
  margin-bottom: 60px;
`;

const MissionBox = styled.div`
  margin: 60px 0;
`;

const MissionTitle = styled.h3`
  font-size: 36px;
  margin-bottom: 20px;
  color: #ffffff;
`;

const MissionText = styled.p`
  font-size: 20px;
  color: #e3f2fd;
  line-height: 1.7;
`;

const ValuesTitle = styled.h3`
  font-size: 32px;
  margin-bottom: 30px;
  color: #ffffff;
`;

const ValuesList = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 50px;
  flex-wrap: wrap;
`;

const ValueTag = styled.div`
  background: rgba(255,255,255,0.1);
  padding: 12px 25px;
  border-radius: 25px;
  font-size: 16px;
  color: #ffffff;
  border: 1px solid rgba(255,255,255,0.2);
`;

function AboutAllsatAI() {
  return (
    <Section>
      <Container>
        <MissionContent>
          <MainTitle>About ALLSAT AI</MainTitle>
          <LeadText>
            ALLSAT AI delivers practical, affordable satellite and AI-driven intelligence to support better land, resource, and environmental decisions.
          </LeadText>
          <LeadText>
            EWIS is being developed through phased prototypes, applied testing, and 
partner-driven pilots.
          </LeadText>

          <MissionBox>
            <MissionTitle>Mission</MissionTitle>
            <MissionText>
              Deliver clear, actionable intelligence that helps organizations anticipate change and act early.
            </MissionText>
          </MissionBox>

          <ValuesTitle>Values</ValuesTitle>
          <ValuesList>
            <ValueTag>Clarity over complexity</ValueTag>
            <ValueTag>Responsible innovation</ValueTag>
            <ValueTag>Practical impact</ValueTag>
            <ValueTag>Long-term partnership</ValueTag>
          </ValuesList>
        </MissionContent>
      </Container>
    </Section>
  );
}

export default AboutAllsatAI;
