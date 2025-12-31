import styled from 'styled-components';
import { colors } from '../styles/GlobalStyles';

const ContactSection = styled.section`
  padding: 100px 0;
  background: linear-gradient(135deg, #1a1f3a 0%, #0a0e27 100%);
  min-height: 100vh;
`;

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 40px;
`;

const HeaderBlock = styled.div`
  text-align: center;
  margin-bottom: 50px;
`;

const Title = styled.h1`
  font-size: 42px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 16px;
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: ${colors.textSecondary};
  line-height: 1.6;
`;

const ContactCard = styled.div`
  background: ${colors.cardBg};
  border: 1px solid ${colors.border};
  border-radius: 16px;
  padding: 40px 35px;
  backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    padding: 28px 22px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const Label = styled.label`
  font-size: 14px;
  color: ${colors.textSecondary};
  margin-bottom: 6px;
`;

const Input = styled.input`
  padding: 12px 14px;
  border-radius: 8px;
  border: 1px solid ${colors.border};
  background: rgba(5, 8, 20, 0.9);
  color: ${colors.text};
  font-size: 15px;

  &:focus {
    outline: none;
    border-color: ${colors.secondary};
  }
`;

const TextArea = styled.textarea`
  padding: 12px 14px;
  border-radius: 8px;
  border: 1px solid ${colors.border};
  background: rgba(5, 8, 20, 0.9);
  color: ${colors.text};
  font-size: 15px;
  min-height: 140px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${colors.secondary};
  }
`;

const SubmitButton = styled.button`
  align-self: flex-start;
  margin-top: 8px;
  padding: 14px 32px;
  border-radius: 8px;
  background: linear-gradient(135deg, ${colors.secondary} 0%, ${colors.accent} 100%);
  color: #ffffff;
  font-weight: 600;
  font-size: 15px;
  border: none;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.35);
  }
`;

// const HelperText = styled.p`
//   font-size: 13px;
//   color: ${colors.textSecondary};
//   margin-top: 6px;
// `;

function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire this up to email service / backend endpoint
    alert('Thank you for reaching out. We will follow up shortly.');
  };

  return (
    <ContactSection>
      <Container>
        <HeaderBlock>
          <Title>Contact EWIS Team</Title>
          <Subtitle>
            Share a few details and we’ll follow up about use cases, pilots, or questions about the EWIS prototype.
          </Subtitle>
        </HeaderBlock>

        <ContactCard>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Field>
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" type="text" placeholder="Your name" required />
              </Field>

              <Field>
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="you@example.com" required />
              </Field>
            </Row>

            <Field>
              <Label htmlFor="phone">Phone Number (Optional)</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+1 (555) 000-0000"
              />
              
            </Field>

            <Field>
              <Label htmlFor="message">How can we help?</Label>
              <TextArea
                id="message"
                name="message"
                placeholder="Tell us about your organization, location, and what you’d like to explore with EWIS."
                required
              />
            </Field>

            <SubmitButton type="submit">Send Message</SubmitButton>
          </Form>
        </ContactCard>
      </Container>
    </ContactSection>
  );
}

export default ContactPage;
