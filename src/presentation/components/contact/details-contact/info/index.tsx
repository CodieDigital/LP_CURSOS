import { Error, NextImage } from "infinity-forge";

import * as S from "./styles";

export function Info({
  subtitle,
  title,
  description,
  children,
  image,
  id,
}: any) {
  return (
    <Error name="Info">
      <S.Info id={id} className={`container-info`}>
        <div className="container-left">
          <div className="container-title">
            {subtitle && (
              <div
                className="font-16-bold subtitle"
                dangerouslySetInnerHTML={{ __html: subtitle }}
              />
            )}

            {title && (
              <h2
                className="font-48"
                dangerouslySetInnerHTML={{ __html: title }}
              />
            )}
          </div>

          {description && (
            <div
              className="font-16 description"
              dangerouslySetInnerHTML={{ __html: description || "" }}
            />
          )}

          {children && children}
        </div>

        {image && (
          <div className="container-right">
            <div className="image">
              <NextImage src={image} />
            </div>
          </div>
        )}
      </S.Info>
    </Error>
  );
}
