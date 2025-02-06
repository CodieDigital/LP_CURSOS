import {
  Icon,
  Error,
  Button,
  Container,
  phone,
  useDynamicSection,
} from "infinity-forge";

import { EnterButton, Logo, useConfigurations } from "@/presentation";

import * as S from "./styles";

export function Footer() {
  const { jsonContent } = useConfigurations();
  const { linkText, linkUrl, Section } = useDynamicSection({
    refSection: "footer",
    fields: {
      linkUrl: {},
      linkText: {},
    },
  });

  return (
    <Error name="Footer">
      <Section>
        <S.Footer style={{ background: jsonContent?.footerBackground }}>
          <Container>
            <Logo />

            <div className="buttons">
              {linkText && linkUrl && (
                <Button
                  text={linkText}
                  href={linkUrl}
                  target="_blank"
                  className="font-16-bold bg"
                />
              )}
              <EnterButton />
              {/* <Button
              svg="IconUser"
              text="Área do Aluno"
              href="https://curso.raioxdaprova.com/login"
              target="_blank"
              className="font-16-bold"
            /> */}
            </div>

            <div className="social">
              <a href="https://www.instagram.com/raioxdaprova" target="_blank">
                <Icon name="InstagramIcon" />
              </a>

              <a href="https://www.youtube.com/@raioxdaprova" target="_blank">
                <Icon name="IconYouTube" />
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61559851344172"
                target="_blank"
              >
                <Icon name="IconFacebook" />
              </a>

              <a href={phone.generatePhoneUrl({ phoneNumber: "45999645572" })}>
                <Icon name="PhoneIcon" />
              </a>

              {/* <a
              href="https://www.linkedin.com/company/codie-digital/"
              target="_blank"
            >
              <Icon name="LinkedinIcon" />
            </a> */}
            </div>
          </Container>

          <a href="https://codie.digital/" className="codie" target="_blank">
            <Icon name="IconCodie" />
          </a>
        </S.Footer>
      </Section>
    </Error>
  );
}
