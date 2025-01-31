import { Icon, Error, Button, Container, phone } from "infinity-forge";

import { Logo } from "@/presentation";

import * as S from "./styles";

export function Footer() {
  return (
    <Error name="Footer">
      <S.Footer>
        <Container>
          <Logo />

          <div className="buttons">
            <Button
              text="Comece Agora!"
              href="https://curso.raioxdaprova.com/"
              target="_blank"
              className="font-16-bold"
            />
            <Button
              svg="IconUser"
              text="Área do Aluno"
              href="https://curso.raioxdaprova.com/login"
              target="_blank"
              className="font-16-bold"
            />
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
    </Error>
  );
}
