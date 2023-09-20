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
              Find what you want, faster
            </Heading>
            <Text style={headerContentSubtitle}>
              Tips and tricks for searching on Stack Overflow
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
          <Heading as="h2" style={title}>
            Searching for solutions
          </Heading>
          <Text style={paragraph}>
            With more than 18 million questions, it's possible that someone has
            already provided a solution to the problem you're facing.{" "}
          </Text>

          <Hr style={divider} />

          <Heading as="h2" style={title}>
            Use the search bar at the top of the page to find what you need
          </Heading>
          <Text style={paragraph}>
            Here are a few simple search tips to get you started:
          </Text>
          <ul>
            {tips?.map((tip) => (
              <li key={tip.id}>
                <Text style={paragraph}>{tip.description}</Text>
              </li>
            ))}
          </ul>

          <Text style={paragraph}>
            The more information you can put in the search bar, the more likely
            you will be to either find the answer you need or feel confident
            that no one else has asked the question before.
          </Text>

          <Hr style={divider} />

          <Heading as="h2" style={title}>
            Take a break and read about the worst coder in the world
          </Heading>

          <Section style={buttonContainer}>
            <Link style={button} href="https://stackoverflow.blog/2019/10/22/">
              I need a break
            </Link>
          </Section>
        </Section>
      </Container>

      <Section style={footer}>
        <Text style={footerText}>
          You're receiving this email because your Stack Overflow activity
          triggered this tip or reminder.
        </Text>

        <Link href="/" style={footerLink}>
          Unsubscribe from emails like this{" "}
        </Link>
        <Link href="/" style={footerLink}>
          Edit email settings{" "}
        </Link>
        <Link href="/" style={footerLink}>
          Contact us
        </Link>
        <Link href="/" style={footerLink}>
          Privacy
        </Link>
      </Section>
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
  fontSize: "15px",
  lineHeight: "21px",
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

// import {
//   Body,
//   Button,
//   Container,
//   Column,
//   Head,
//   Heading,
//   Hr,
//   Html,
//   Img,
//   Link,
//   Preview,
//   Row,
//   Section,
//   Tailwind,
//   Text,
// } from "@react-email/components";
// import * as React from "react";

// const baseUrl = process.env.VERCEL_URL
//   ? `https://${process.env.VERCEL_URL}`
//   : "";

// export const Email = ({
//   username = "zenorocha",
//   userImage = `${baseUrl}/static/vercel-user.png`,
//   invitedByUsername = "bukinoshita",
//   invitedByEmail = "bukinoshita@example.com",
//   teamName = "My Project",
//   teamImage = `${baseUrl}/static/vercel-team.png`,
//   inviteLink = "https://vercel.com/teams/invite/foo",
//   inviteFromIp = "204.13.186.218",
//   inviteFromLocation = "São Paulo, Brazil",
// }) => {
//   const previewText = `Join ${invitedByUsername} on Vercel`;

//   return (
//     <Html>
//       <Head />
//       <Preview>{previewText}</Preview>
//       <Tailwind>
//         <Body className="bg-white my-auto mx-auto font-sans">
//           <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
//             <Section className="mt-[32px]">
//               <Img
//                 src={`${baseUrl}/static/vercel-logo.png`}
//                 width="40"
//                 height="37"
//                 alt="Vercel"
//                 className="my-0 mx-auto"
//               />
//             </Section>
//             <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
//               Join <strong>{teamName}</strong> on <strong>Vercel</strong>
//             </Heading>
//             <Text className="text-black text-[14px] leading-[24px]">
//               Hello {username},
//             </Text>
//             <Text className="text-black text-[14px] leading-[24px]">
//               <strong>bukinoshita</strong> (
//               <Link
//                 href={`mailto:${invitedByEmail}`}
//                 className="text-blue-600 no-underline"
//               >
//                 {invitedByEmail}
//               </Link>
//               ) has invited you to the <strong>{teamName}</strong> team on{" "}
//               <strong>Vercel</strong>.
//             </Text>
//             <Section>
//               <Row>
//                 <Column align="right">
//                   <Img
//                     className="rounded-full"
//                     src={userImage}
//                     width="64"
//                     height="64"
//                   />
//                 </Column>
//                 <Column align="center">
//                   <Img
//                     src={`${baseUrl}/static/vercel-arrow.png`}
//                     width="12"
//                     height="9"
//                     alt="invited you to"
//                   />
//                 </Column>
//                 <Column align="left">
//                   <Img
//                     className="rounded-full"
//                     src={teamImage}
//                     width="64"
//                     height="64"
//                   />
//                 </Column>
//               </Row>
//             </Section>
//             <Section className="text-center mt-[32px] mb-[32px]">
//               <Button
//                 pX={20}
//                 pY={12}
//                 className="bg-[#000000] rounded text-white text-[12px] font-semibold no-underline text-center"
//                 href={inviteLink}
//               >
//                 Join the team
//               </Button>
//             </Section>
//             <Text className="text-black text-[14px] leading-[24px]">
//               or copy and paste this URL into your browser:{" "}
//               <Link href={inviteLink} className="text-blue-600 no-underline">
//                 {inviteLink}
//               </Link>
//             </Text>
//             <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
//             <Text className="text-[#666666] text-[12px] leading-[24px]">
//               This invitation was intended for{" "}
//               <span className="text-black">{username} </span>.This invite was
//               sent from <span className="text-black">{inviteFromIp}</span>{" "}
//               located in{" "}
//               <span className="text-black">{inviteFromLocation}</span>. If you
//               were not expecting this invitation, you can ignore this email. If
//               you are concerned about your account's safety, please reply to
//               this email to get in touch with us.
//             </Text>
//           </Container>
//         </Body>
//       </Tailwind>
//     </Html>
//   );
// };

// export default Email;
