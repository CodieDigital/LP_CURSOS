import { Button, Container, Error, NextImage, useWindow } from "infinity-forge";
import * as S from "./styles";

export function ComoFunciona() {
  const _window = useWindow();

  return (
    <Error name="ComoFunciona">
      <S.ComoFunciona className="spacing-y-100">
        <Container>
          <h2 className="font-48-bold">Como funciona</h2>

          <div className="image">
            <NextImage
              src={
                _window?.innerWidth <= 1024
                  ? "/images/LP/como-funciona-mobile.png"
                  : "/images/LP/como-funciona-desk.png"
              }
            />

            {/* <ol>
              <li className="font-18-bold">
                <h3>Crie uma conta</h3>
              </li>

              <li className="font-18-bold">
                <h3>Adquira um curso</h3>
              </li>

              <li className="font-18-bold">
                <h3>Responda algumas perguntas</h3>
              </li>

              <li className="font-18-bold">
                <h3>Tenha seu cronograma de estudos personalizado</h3>
              </li>

              <li className="font-18-bold">
                <h3>Complete suas metas diárias</h3>
              </li>
            </ol> */}
          </div>
        </Container>
      </S.ComoFunciona>
    </Error>
  );
}
