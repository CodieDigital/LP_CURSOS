import { useRouter } from "next/router";

import { Error, Button, Container, useDynamicSection } from "infinity-forge";

import { EnterButton, Logo, useConfigurations } from "@/presentation";

import * as S from "./styles";

export function Header({
  hasEnterbutton = true,
}: {
  hasEnterbutton?: boolean;
}) {
  const { jsonContent } = useConfigurations();

  const router = useRouter();
  const isEditing =
    router?.query?.editMode == "true" || router?.query?.showPreview == "true";

  return (
    <Error name="Header">
      <S.Header
      id="header"
        $hasEnterbutton={hasEnterbutton}
        style={
          isEditing
            ? {
                position: "static",
                background:
                  jsonContent?.headerBackground || "rgba(0, 0, 0, 0.8)",
              }
            : {
                background: jsonContent?.headerBackground,
              }
        }
      >
        <Container>
          <Logo />

          {hasEnterbutton && (
            // <Button
            //   svg="IconUser"
            //   text="Área do Aluno"
            //   href="https://curso.raioxdaprova.com/login"
            //   target="_blank"
            //   className="font-16-bold"
            // />

            <EnterButton />
          )}
        </Container>
      </S.Header>
    </Error>
  );
}
