import { Error } from "infinity-forge";
import { Contact as ContactAtena } from "infinity-forge";

import * as S from "./styles";

export function Contact() {
  return (
    <Error name="Contact">
      <S.Contact className="spacing-y-100">
        <ContactAtena isGlobal />
      </S.Contact>
    </Error>
  );
}
