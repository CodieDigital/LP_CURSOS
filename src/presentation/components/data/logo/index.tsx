import { NextImage } from "infinity-forge";

import { useConfigurations } from "@/presentation";

import * as S from "./styles";

export function Logo() {
  const { jsonContent } = useConfigurations();

  return (
    <S.Logo href="/" className="logo">
      <NextImage src={jsonContent?.logo?.[0]?.url} />
    </S.Logo>
  );
}
