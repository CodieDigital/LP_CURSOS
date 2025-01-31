import { Error, Button, Container } from "infinity-forge";

import { Logo } from "@/presentation";

import * as S from "./styles";

export function Header({
  hasEnterbutton = true,
}: {
  hasEnterbutton?: boolean;
}) {
  return (
    <Error name="Header">
      <S.Header $hasEnterbutton={hasEnterbutton}>
        <Container>
          <Logo />

          {hasEnterbutton && (
            <Button
              svg="IconUser"
              text="Área do Aluno"
              href="https://curso.raioxdaprova.com/login"
              target="_blank"
              className="font-16-bold"
            />
          )}
        </Container>
      </S.Header>
    </Error>
  );
}
