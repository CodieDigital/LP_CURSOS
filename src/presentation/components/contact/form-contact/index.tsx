import {
  Error,
  FormHandler,
  IFormHandler,
  Input,
  InputMask,
  Textarea,
  DynamicSectionProps,
  useDynamicSection,
  useToast,
  ContactJSON,
} from "infinity-forge";

import { useConfigurations } from "../../..";

import * as S from "./styles";

export function FormContact(
  props: DynamicSectionProps & { formHandler?: IFormHandler }
) {
  const { createToast } = useToast();

  const { jsonContent } = useDynamicSection<ContactJSON>(props);

  async function handleSuccess() {
    try {
      createToast({
        status: "success",
        message: "Contato enviado com sucesso!",
      });
    } catch (error) {
      createToast({
        status: "error",
        message: "Erro ao enviar, tente novamente mais tarde!",
      });
    }
  }

  const { jsonContent: json } = useConfigurations();

  const styles = {
    $inputColor: json?.inputColor,
    $inputbordercolor: json?.inputBorderColor,
    $inputbackground: json?.inputBackgroundColor,
  };

  return (
    <Error name="FormContact">
      <S.FormContact {...styles}>
        <FormHandler
          onSucess={handleSuccess}
          button={{ text: "Enviar" }}
          defaultSchemas={{
            email: jsonContent?.inputEmail ? true : false,
            name: jsonContent?.inputName ? true : false,
            message: jsonContent?.inputDescription ? true : false,
            phone: jsonContent?.inputPhone ? true : false,
          }}
          {...props.formHandler}
        >
          {jsonContent?.inputName && (
            <Input
              name="name"
              type="text"
              label="Nome completo"
              placeholder="Digite seu nome completo aqui"
              className="font-16"
            />
          )}

          <div className="container-fields">
            {jsonContent?.inputEmail && (
              <Input
                name="email"
                type="email"
                label="Email"
                placeholder="Digite seu email aqui"
                className="font-16"
              />
            )}

            {jsonContent?.inputPhone && (
              <InputMask
                name="phone"
                label="Telefone"
                placeholder="(DDD) 00000 - 0000"
                className="font-16"
                mask="(__) _ ____-____"
              />
            )}
          </div>

          {jsonContent?.inputDescription && (
            <Textarea
              name="message"
              label="Mensagem"
              placeholder="O que deseja nos dizer?"
              className="font-16"
            />
          )}
        </FormHandler>
      </S.FormContact>
    </Error>
  );
}
