import * as React from "react";

import { Text, Section, Container, Img } from "@react-email/components";
interface ScheduleLiveShowingProps {
  name: string;
  email: string;
  date: string;
}
export default function ScheduleLiveShowing({
  email,
  name,
  date,
}: ScheduleLiveShowingProps) {
  return (
    <Section style={main}>
      <Container style={container}>
        <Text style={heading}>Hi {name},</Text>
        <Text style={paragraph}>
          Thank you for subscribing to our newsletter! We're excited to have you
          on board. Stay tuned for the latest updates, news, and special offers.
          Welcome to our community! {date}
        </Text>
        <Text style={regards}>Best regards,</Text>
        <Text style={team}>1ClickDesign</Text>
      </Container>
    </Section>
  );
}

// Styles for the email template
const main = {
  backgroundColor: "#fff",
};

const image = {
  margin: "0 auto",
};

const container = {
  margin: "0 auto",
  padding: "20px",
  width: "580px",
  backgroundColor: "#F4F4F4",
};

const heading = {
  fontSize: "28px",
  fontWeight: "700",
  color: "#484848",
};

const paragraph = {
  fontSize: "18px",
  lineHeight: "1.4",
  color: "#484848",
};

const regards = {
  fontSize: "18px",
  color: "#484848",
  padding: "0px",
  lineHeight: "1",
  margin: "0px",
};

const team = {
  fontSize: "18px",
  color: "#484848",
  padding: "0px",
  lineHeight: "1.4",
  margin: "0px",
};
