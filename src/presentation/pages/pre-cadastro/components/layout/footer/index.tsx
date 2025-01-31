import Link from "next/link";

import { Container, Error, Icon } from "infinity-forge";

import * as S from "./styles";

export function Footer() {
  return (
    <Error name="Footer">
      <S.Footer>
        <Container>
          <Link href="/" className="logo">
            <img src="/images/LP/logo.png" alt="" />
          </Link>

          <Link href="https://codie.digital/" className="codie">
            <Icon name="IconCodie" />
          </Link>
        </Container>
      </S.Footer>
    </Error>
  );
}
