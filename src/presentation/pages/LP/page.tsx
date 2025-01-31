import { ComoFunciona, Contact, ImageText } from "@/presentation";
import {
  Faq,
  Banner,
  Parallax,
  Layout,
  WhyChoose,
  Methodology,
} from "./components";

import * as S from "./styles";

export function Lp() {
  return (
    <S.Lp>
      <Layout>
        <Banner />
        <ImageText refSection="about-plataform" aspectRatio="704/503" />
        <div className="custom-image-text">
          <ImageText
            refSection="about-goals"
            direction="row-reverse"
            hasButton
            aspectRatio="704/410"
          />
        </div>

        <ImageText refSection="about-features" isGlobal />
        {/* <ComoFunciona /> */}
        <Methodology />
        <WhyChoose />
        <Parallax />
        <Faq />
        {/* <Contact /> */}
      </Layout>
    </S.Lp>
  );
}
