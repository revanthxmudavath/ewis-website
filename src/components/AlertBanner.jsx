import styled from 'styled-components';
import { colors } from '../styles/GlobalStyles';

const BannerWrapper = styled.div`
  background: linear-gradient(90deg, rgba(74, 144, 226, 0.2) 0%, rgba(123, 104, 238, 0.2) 100%);
  border-left: 4px solid ${colors.secondary};
  padding: 20px 40px;
  margin: 40px auto;
  max-width: 1400px;
`;

const BannerText = styled.p`
  color: #e3f2fd;
  font-size: 15px;
  margin: 0;
  
  strong {
    font-weight: 700;
  }
`;

function AlertBanner() {
  return (
    <BannerWrapper>
      <BannerText>
        <strong>⚠ PROTOTYPE STATUS:</strong> The Early-Warning Intelligence System (EWIS) prototype is under development at ALLSAT AI and is currently being tested using simulated and publicly available data. Field pilots and partner collaborations are in planning.
      </BannerText>
    </BannerWrapper>
  );
}

export default AlertBanner;
