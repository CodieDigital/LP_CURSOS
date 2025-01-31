import { Container } from "infinity-forge";

import { Plan } from "./plan";
import { Form } from "./form";

import * as S from "./styles";
import { useState } from "react";

export function Cadastro() {
  const [ok, setOk] = useState(false);

  return (
    <S.Cadastro id="contato">
      <Container>
        {!ok && <Plan />}
        <Form ok={ok} setOk={setOk} />
      </Container>
    </S.Cadastro>
  );
}
