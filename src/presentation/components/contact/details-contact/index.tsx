import {
  DynamicSectionProps,
  useDynamicSection,
  Error,
  Icon,
  ContactJSON,
} from "infinity-forge";

import { Info } from "./info";

import * as S from "./styles";

interface IContactJson extends ContactJSON {
  titleCss?: string;
}

export function DetailsContact(props: DynamicSectionProps) {
  const { title, description, jsonContent } =
    useDynamicSection<IContactJson>(props);

  return (
    <Error name="DetailsContact">
      <S.DetailsContact $titleCss={jsonContent?.titleCss}>
        <Info title={title} description={description}>
          <address>
            {jsonContent?.items?.map((item) => (
              <div key={item.titulo + item.link} className="container-item">
                <Icon name={item.icon} />

                {item.link ? (
                  <a
                    href={item.link}
                    target={item.target ? "_blank" : "_self"}
                    className="font-16 link"
                    dangerouslySetInnerHTML={{ __html: item?.titulo || "" }}
                  />
                ) : (
                  <p
                    className="font-16 link"
                    dangerouslySetInnerHTML={{ __html: item?.titulo || "" }}
                  />
                )}
              </div>
            ))}
          </address>
        </Info>
      </S.DetailsContact>
    </Error>
  );
}
