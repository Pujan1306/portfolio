import React from 'react';
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
  Link,
  Row,
  Column,
} from '@react-email/components';

interface EmailTemplateProps {
  name: string;
  email: string;
  text: string;
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({ name, email, text }) => {
  return (
    <Html>
      <Head />
      <Preview>New communication from {name}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={headerSection}>
            <Text style={tag}>New Communication</Text>
            <Heading style={h1}>{name}</Heading>
          </Section>
          
          <Section style={contentSection}>
            <Row style={senderRow}>
              <Column style={senderCol}>
                <Text style={label}>Sender</Text>
                <Text style={value}>{name}</Text>
              </Column>
              <Column style={senderCol}>
                <Text style={label}>Origin</Text>
                <Text style={value}>{email}</Text>
              </Column>
            </Row>

            <Hr style={hr} />

            <Section style={messageSection}>
              <Text style={label}>Transmission</Text>
              <Text style={messageText}>"{text}"</Text>
            </Section>

            <Hr style={hr} />

            <Section style={footer}>
              <Text style={footerText}>
                Sent on {new Date().toLocaleDateString('en-US', { 
                  month: 'long', 
                  day: 'numeric', 
                  year: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </Text>
              <Link href="https://john-doe.studio" style={footerLink}>
                Pujan Mestry Portfolio
              </Link>
            </Section>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default EmailTemplate;

// Styles for React Email
const main = {
  backgroundColor: '#f3f4f6',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  padding: '40px 0',
};

const container = {
  margin: '0 auto',
  padding: '0',
  width: '580px',
  backgroundColor: '#ffffff',
  borderRadius: '24px',
  overflow: 'hidden' as const,
  boxShadow: '0 20px 50px rgba(0,0,0,0.05)',
  border: '1px solid rgba(0,0,0,0.05)',
};

const headerSection = {
  padding: '40px 40px 0px 40px',
  borderTop: '4px solid #10b981',
};

const tag = {
  fontSize: '10px',
  fontWeight: '900',
  letterSpacing: '0.3em',
  textTransform: 'uppercase' as const,
  color: '#10b981',
  margin: '0 0 8px 0',
};

const h1 = {
  fontSize: '28px',
  fontWeight: '900',
  letterSpacing: '-0.02em',
  color: '#111827',
  margin: '0',
};

const contentSection = {
  padding: '40px',
};

const senderRow = {
  margin: '0 0 24px 0',
};

const senderCol = {
  width: '50%',
};

const label = {
  fontSize: '10px',
  fontWeight: '700',
  letterSpacing: '0.1em',
  textTransform: 'uppercase' as const,
  color: '#9ca3af',
  margin: '0 0 4px 0',
};

const value = {
  fontSize: '14px',
  fontWeight: '700',
  color: '#111827',
  margin: '0',
};

const hr = {
  borderColor: '#f3f4f6',
  margin: '24px 0',
};

const messageSection = {
  backgroundColor: 'rgba(16, 185, 129, 0.03)',
  borderRadius: '16px',
  padding: '24px',
  border: '1px solid rgba(16, 185, 129, 0.1)',
};

const messageText = {
  fontSize: '15px',
  lineHeight: '1.6',
  color: '#4b5563',
  fontStyle: 'italic' as const,
  margin: '0',
};

const footer = {
  textAlign: 'center' as const,
  marginTop: '32px',
};

const footerText = {
  fontSize: '12px',
  color: '#9ca3af',
  margin: '0 0 8px 0',
};

const footerLink = {
  fontSize: '10px',
  fontWeight: '900',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.2em',
  color: '#10b981',
  textDecoration: 'none',
};