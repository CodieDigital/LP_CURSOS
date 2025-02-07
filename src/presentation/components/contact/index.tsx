import { Contact as ContactAtena, Error } from "infinity-forge";

import { useConfigurations } from "@/presentation";

import * as S from "./styles";

export function Contact() {
  const { jsonContent } = useConfigurations();

  const styles = {
    $inputColor: jsonContent?.inputColor,
    $inputbordercolor: jsonContent?.inputBorderColor,
    $inputbackground: jsonContent?.inputBackgroundColor,
  };

  return (
    <Error name="Contact">
      <S.Contact {...styles}>
        <ContactAtena isGlobal />
      </S.Contact>
    </Error>
  );
}
