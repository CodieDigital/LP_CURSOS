import { Container } from "infinity-forge";

import * as S from "./styles";

export function Plan() {
  return (
    <S.Plan>
      <div className="titles">
        <h2 className="font-32-bold">Plano Missão Policial</h2>
      </div>

      <div className="text">
        <ul className="font-18-regular">
          <li>✅ Videoaulas atualizadas</li>
          <li>✅ PDFs resumidos e esquematizados</li>
          <li>✅ Cronograma personalizado</li>
          <li>✅ Metas diárias </li>
          <li>✅ Gráficos de evolução e desempenho</li>
          <li>✅ Método RX de aprovação </li>
          <li>✅ Atualização pós edital</li>
        </ul>

        <div className="price_container">
          <div className="price">
            <span className="font-14-regular">Promoção pré-lançamento</span>
            <p className="font-16-regular">
              R$
              <span className="font-48-bold">89,90</span>
              /mês
            </p>
          </div>

          <p className="font-12-regular center">
            Apenas o primeiro mês.
            <span>Demais mensalidades 149,90</span>
          </p>
        </div>
      </div>
    </S.Plan>
  );
}
