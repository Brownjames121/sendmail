import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
  Row,
} from "@react-email/components";
import * as React from "react";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

const PropDefaults = {
  tips: [
    {
      id: 1,
      description:
        'To find a specific phrase, enter it in quotes: "local storage"',
    },
    {
      id: 1,
      description:
        "To search within specific tag(s), enter them in square brackets: [javascript]",
    },
    {
      id: 1,
      description:
        'Combine them to get even more precise results - [javascript] "local storage" searches for the phrase “local storage” in questions that have the [javascript] tag',
    },
  ],
};

export const Email = ({ tips = PropDefaults.tips }) => (
  <Html>
    <Head />
    <Preview>Stack overflow tips for searching</Preview>
    <Body style={main}>
      <Container style={container}>
        <Row style={header}>
          <Column style={headerContent}>
            <Heading style={headerContentTitle}>
              Are you in search of affordable services.
            </Heading>
            <Text style={headerContentSubtitle}>
              we provide low cost web design, web development.
            </Text>
          </Column>
          <Column style={headerImageContainer}>
            <Img
              width={340}
              src={`https://react-email-demo-ijnnx5hul-resend.vercel.app/static/stack-overflow-header.png`}
            />
          </Column>
        </Row>

        <Section style={content}>
          {/* <Heading style={bigHeading}>It's On Its Way.</Heading>
          <Heading
            as="h2"
            style={{
              fontSize: 26,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Lorem ipsum sit amet dolor.
          </Heading> */}
          {/* <Hr style={divider} /> */}

          <Text style={paragraph}>
            Hey,
            <br /> Are you looking for low cost Web Design & Web Development or
            App Development and SEO Services? I am reaching out to you to see if
            you are looking for someone to help you with
          </Text>
          <ul>
            <li>
              <Text style={paragraph}> Website Development</Text>
            </li>
            <li>
              <Text style={paragraph}> Mobile App Development</Text>
            </li>
            <li>
              <Text style={paragraph}> E-commerce Solutions</Text>
            </li>
            <li>
              <Text style={paragraph}> Website Upgrades</Text>
            </li>
            <li>
              <Text style={paragraph}> Graphic Design</Text>
            </li>
            <li>
              <Text style={paragraph}> CRM, ERP</Text>
            </li>
            <li>
              <Text style={paragraph}>
                Full SEO package (with plan and activities)
              </Text>
            </li>
            <li>
              {" "}
              <Text style={paragraph}> PPC (pay per click)</Text>
            </li>
            <li>
              <Text style={paragraph}>
                SMO – (Facebook, Twitter, LinkedIn, YouTube & Myspace Marketing,
                etc.) and Software Development.
              </Text>
            </li>
          </ul>
          <Text style={paragraph}>
            {" "}
            We will be happy to share our work and client references. Looking
            forward to hearing from you. Please share your phone number and
            website link suitable time to discuss and we will prepare a special
            proposal for you. <br />
            Regards,
            <br />
            william,
            <br />
            williamshatner.websolution@gmail.com
          </Text>
          {/* <Text style={paragraph}>
            william,
            <br />
            williamshatner.websolution@gmail.com
          </Text> */}

          <Hr style={divider} />
          <Heading
            as="h2"
            style={{
              fontSize: 26,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Our Services
          </Heading>
        </Section>

        <Row style={section}>
          <Column style={ideas}>
            <Section style={yellowCard}>
              <Img
                src={`https://react-email-demo-ijnnx5hul-resend.vercel.app/static/yelp-header.png`}
                width={280}
                alt="codepen"
              />
              🌟
              <Text style={resourcesTitle}>Website Design</Text>
            </Section>

            <Section style={yellowCard}>
              <Img
                src={`https://react-email-demo-ijnnx5hul-resend.vercel.app/static/yelp-header.png`}
                width={280}
                alt="codepen"
              />
              🌟
              <Text style={resourcesTitle}>Mobile App Design</Text>
            </Section>
          </Column>
          <Column style={resources}>
            <Section style={blueCard}>
              <Img
                src={`https://react-email-demo-ijnnx5hul-resend.vercel.app/static/yelp-header.png`}
                width={280}
                alt="codepen"
              />
              🌟
              <Text style={resourcesTitle}>Graphic & Logo Design</Text>
            </Section>

            <Section style={blueCard}>
              <Img
                src={`https://react-email-demo-ijnnx5hul-resend.vercel.app/static/yelp-header.png`}
                width={280}
                alt="codepen"
              />
              🌟
              <Text style={resourcesTitle}>Motion Design</Text>
            </Section>
          </Column>
        </Row>
        {/* <Section style={buttonContainer}>
            <Link style={button} href="">
              button
            </Link>
          </Section> */}
      </Container>
    </Body>
  </Html>
);

export default Email;

const main = {
  backgroundColor: "#f3f3f5",
  fontFamily: "HelveticaNeue,Helvetica,Arial,sans-serif",
};

const headerContent = { padding: "20px 30px 15px" };

const headerContentTitle = {
  color: "#fff",
  fontSize: "27px",
  fontWeight: "bold",
  lineHeight: "27px",
};

const headerContentSubtitle = {
  color: "#fff",
  fontSize: "17px",
};

const headerImageContainer = {
  padding: "30px 10px",
};

const title = {
  margin: "0 0 15px",
  fontWeight: "bold",
  fontSize: "21px",
  lineHeight: "21px",
  color: "#0c0d0e",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
  color: "#3c3f44",
};

const divider = {
  margin: "30px 0",
};

const container = {
  maxWidth: "680px",
  width: "100%",
  margin: "0 auto",
  backgroundColor: "#ffffff",
};

const footer = {
  width: "680px",
  margin: "32px auto 0 auto",
  padding: "0 30px",
};

const content = {
  padding: "30px 30px 40px 30px",
};

const logo = {
  display: "flex",
  background: "#f3f3f5",
  padding: "20px 30px",
};

const header = {
  borderRadius: "5px 5px 0 0",
  display: "flex",
  flexDireciont: "column",
  backgroundColor: "#2b2d6e",
};

const buttonContainer = {
  marginTop: "24px",
  display: "block",
};

const button = {
  backgroundColor: "#0095ff",
  border: "1px solid #0077cc",
  fontSize: "17px",
  lineHeight: "17px",
  padding: "13px 17px",
  borderRadius: "4px",
  maxWidth: "120px",
  color: "#fff",
};

const footerDivider = {
  ...divider,
  borderColor: "#d6d8db",
};

const footerText = {
  fontSize: "12px",
  lineHeight: "15px",
  color: "#9199a1",
  margin: "0",
};

const footerLink = {
  display: "inline-block",
  color: "#9199a1",
  textDecoration: "underline",
  fontSize: "12px",
  marginRight: "10px",
  marginBottom: "0",
  marginTop: "8px",
};

const footerAddress = {
  margin: "4px 0",
  fontSize: "12px",
  lineHeight: "15px",
  color: "#9199a1",
};

const footerHeart = {
  borderRadius: "1px",
  border: "1px solid #d6d9dc",
  padding: "4px 6px 3px 6px",
  fontSize: "11px",
  lineHeight: "11px",
  fontFamily: "Consolas,monospace",
  color: "#e06c77",
  maxWidth: "min-content",
  margin: "0 0 32px 0",
};

const yellowSection = {
  background: "#f5d247",
  padding: "30px",
  fontSize: "18px",
  lineHeight: "1.5",
};
const blueLink = {
  color: "#15c",
  cursor: "pointer",
};
const section = {
  margin: "0",
  background: "#fff",
  padding: "0 24px",
};
const resourcesTitle = {
  fontWeight: "900",
  lineHeight: "1.1",
  // marginTop: "-40px",
  fontSize: "18px",
};

const ideasTitle = {
  fontWeight: "900",
  lineHeight: "1.1",
  fontSize: "18px",
};

const ideas = {
  width: "50%",
  paddingRight: "10px",
};

const resources = {
  width: "50%",
  paddingLeft: "10px",
};

const card = {
  padding: "20px",
  margin: "0 0 20px 0",
  borderRadius: "10px",
  fontSize: "36px",
  textAlign: "center",
};

const yellowCard = {
  ...card,
  background: "#fff4c8",
  border: "1px solid #f4d247",
};

const blueCard = {
  ...card,
  background: "#d9f6ff",
  border: "1px solid #92bfd0",
};

const textCard = {
  fontSize: "13px",
  textAlign: "left",
};

const bigHeading = {
  fontSize: "32px",
  lineHeight: "1.3",
  fontWeight: "700",
  textAlign: "center",
  letterSpacing: "-1px",
};
