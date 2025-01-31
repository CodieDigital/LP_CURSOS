import { NextImage } from "infinity-forge";

import * as S from "./styles";

export function Logo() {
  return (
    <S.Logo href="/" className="logo">
      <NextImage src="/images/LP/logo.png" />
    </S.Logo>
  );
}
