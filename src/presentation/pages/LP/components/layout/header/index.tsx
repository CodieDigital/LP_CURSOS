import { useRouter } from "next/router";

import { Error, Button, Container } from "infinity-forge";

import { Logo } from "@/presentation";

import * as S from "./styles";

export function Header({
  hasEnterbutton = true,
}: {
  hasEnterbutton?: boolean;
}) {
  const router = useRouter();
  const isEditing =
    router?.query?.editMode == "true" || router?.query?.showPreview == "true";

  return (
    <Error name="Header">
      <S.Header
        $hasEnterbutton={hasEnterbutton}
        style={
          isEditing
            ? { position: "static", background: "rgba(0, 0, 0, 0.8)" }
            : undefined
        }
      >
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
