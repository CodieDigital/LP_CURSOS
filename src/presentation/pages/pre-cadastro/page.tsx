import { ComoFunciona, ImageText } from "@/presentation";

import { Banner, Layout, Cadastro } from "./components";

import * as S from "./styles";

export function PreCadastro() {
  return (
    <S.PreCadastro>
      <Layout>
        <Banner />
        <ImageText refSection="about-features" isGlobal />
        <ComoFunciona />
        <Cadastro />
      </Layout>
    </S.PreCadastro>
  );
}
