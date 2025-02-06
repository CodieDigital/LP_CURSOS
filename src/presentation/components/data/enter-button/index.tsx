import { useConfigurations } from "@/presentation";

import * as S from "./styles";

export function EnterButton() {
  const { jsonContent } = useConfigurations();
  if (!jsonContent?.loginUrl) return null;

  return (
    <S.Enterbutton
      svg="IconUserNoBg"
      text="Entrar"
      target="_blank"
      className="font-16-bold enter-button"
      href={jsonContent?.loginUrl}
    />
  );
}
