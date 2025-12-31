import styled from 'styled-components';
import { colors } from '../styles/GlobalStyles';
import logoImage from '../../assets/img.png';
import { Link } from 'react-router-dom';


const HeaderWrapper = styled.header`
  background: rgba(255,255,255,0.05);
  padding: 20px 0;
  border-bottom: 1px solid rgba(255,255,255,0.1);
  backdrop-filter: blur(10px);
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 28px;
  font-weight: 800;
  background: linear-gradient(135deg, ${colors.secondary} 0%, ${colors.accent} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Nav = styled.nav`
  display: flex;
  gap: 30px;
`;

const NavLink = styled.a`
  color: ${colors.text};
  font-size: 16px;
  opacity: 0.8;
  transition: opacity 0.3s;
  cursor: pointer;
  text-decoration: none;
  
  &:hover {
    opacity: 1;
  }
`;

const RouterNavLink = styled(Link)`
  color: ${colors.text};
  font-size: 16px;
  opacity: 0.8;
  transition: opacity 0.3s;
  cursor: pointer;
  text-decoration: none;
  
  &:hover {
    opacity: 1;
  }
`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const LogoImage = styled.img`
  height: 50px;
  width: auto;
`;



function Header() {
  return (
    <HeaderWrapper>
      <Container>
        <LogoSection>
         
          <LogoImage
            src={logoImage}
            alt="ALLSAT AI Logo"
          />
        
        </LogoSection>
        <Nav>
          <NavLink href="https://allsatai.com/">ALLSAT AI</NavLink>
          <RouterNavLink to="/contact">Contact</RouterNavLink>
        </Nav>
      </Container>
    </HeaderWrapper>
  );
}

export default Header;
