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
  const {
    linkText,
    linkUrl,
    Section,
    jsonContent: json,
  } = useDynamicSection<{
    button2Css?: string;
  }>({
    refSection: "footer",
    fields: {
      linkUrl: {},
      linkText: {},
    },
  });

  return (
    <Error name="Footer">
      <Section>
        <S.Footer
          style={{ background: jsonContent?.footerBackground }}
          $buttoncss={json?.button2Css}
        >
          <Container>
            <div>
              <Logo />
            </div>

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
            </div>

            <div className="social">
              {jsonContent?.instagram && (
                <a href={jsonContent?.instagram} target="_blank">
                  <Icon name="InstagramIcon" />
                </a>
              )}

              {jsonContent?.youtube && (
                <a href={jsonContent?.youtube} target="_blank">
                  <Icon name="IconYouTube" />
                </a>
              )}

              {jsonContent?.facebook && (
                <a href={jsonContent?.facebook} target="_blank">
                  <Icon name="IconFacebook" />
                </a>
              )}

              {jsonContent?.linkedin && (
                <a href={jsonContent?.linkedin} target="_blank">
                  <Icon name="LinkedinIcon" />
                </a>
              )}

              {jsonContent?.tiktok && (
                <a href={jsonContent?.tiktok} target="_blank">
                  <Icon name="IconTikTok" />
                </a>
              )}
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
