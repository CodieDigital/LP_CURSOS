import {
  api,
  Input,
  Select,
  InputCep,
  InputMask,
  FormHandler,
  InputCpfCnpj,
  InputPassword,
  InputDatePicker,
} from "infinity-forge";

import * as S from "./styles";

import * as Yup from "yup";

export function Form({ ok, setOk }) {
  return (
    <>
      <S.Form>
        <h2
          style={{ textAlign: ok ? "center" : "left" }}
          className="font-48-bold"
        >
          Pré-cadastro
        </h2>

        <p
          style={{ textAlign: ok ? "center" : "left" }}
          className="font-18-regular"
        >
          Estamos preparando algo especial para você! Ao realizar o
          pré-cadastro, assim que o acesso for liberado, você poderá montar seu
          plano de estudos personalizado e começar sua preparação!
        </p>

        {ok && (
          <div className="sucesso">
            <h2 className="font-20-bold">Pré-cadastro realizado com sucesso</h2>
          </div>
        )}

        <FormHandler
          recaptcha="6LfTMncqAAAAAAKDXpmvAl7pBKLMIxtL7EEB9k4Z"
          messageProvider={{
            enabled: true,
            messageProviderKey: "global",
          }}
          onSucess={async (data) => {
            try {
              setOk(true);
            } catch (error) {
              console.log(error);
            }
          }}
          button={
            !ok
              ? {
                  text: "Enviar",
                  className: "font-16-bold",
                }
              : undefined
          }
          defaultSchemas={{ phone: true, cpf: true }}
          schema={{
            password: Yup.string()
              .min(6, "A senha deve ter no mínimo 6 caracteres")
              .required("A senha é obrigatória"),

            confirmPassword: Yup.string()
              .oneOf(
                [Yup.ref("password"), undefined],
                "As senhas precisam ser iguais"
              )
              .required("Confirmação de senha é obrigatória"),

            name: Yup.string().required("Nome é obrigatório"),

            email: Yup.string()
              .email("E-mail inválido")
              .required("E-mail é obrigatório"),

            address: Yup.object().shape({
              zipCode: Yup.string().required("CEP é obrigatório"),

              logradouro: Yup.string().required("Logradouro é obrigatório"),

              complemento: Yup.string(),

              bairro: Yup.string().required("Bairro é obrigatório"),

              localidade: Yup.string().required("Localidade é obrigatória"),

              uf: Yup.string()
                .length(2, "UF deve ter 2 caracteres")
                .required("UF é obrigatório"),

              numero: Yup.string().required("Número é obrigatório"),
            }),
          }}
        >
          {!ok && (
            <>
              <div className="row">
                <Input
                  type="text"
                  name="name"
                  label="Nome Completo"
                  placeholder="Digite seu nome aqui"
                />

                <InputCpfCnpj
                  name="cpf"
                  label="CPF"
                  placeholder="000.000.000-00"
                />
              </div>

              <div className="select">
                <Select
                  name="gender"
                  label="Gênero"
                  onlyOneValue
                  options={[
                    { label: "Masculino", value: "1" },
                    { label: "Feminino", value: "2" },
                  ]}
                />
              </div>

              <div className="row">
                <InputMask
                  mask="(__) _ ____-____"
                  name="phone"
                  label="Telefone"
                  placeholder="(DDD) 9 9999-9999"
                />

                <Input
                  type="email"
                  name="email"
                  label="E-mail"
                  placeholder="Digite seu e-mail aqui"
                />
              </div>

              <InputDatePicker
                language="pt"
                mode="date"
                name="birthday"
                label="Data de Nascimento"
              />

              <InputCep showAllFields />

              <div className="row">
                <InputPassword
                  name="password"
                  label="Senha"
                  placeholder="Digite sua senha aqui"
                />
                <InputPassword
                  name="confirmPassword"
                  label="Senha"
                  placeholder="Confirme sua senha aqui"
                />
              </div>
            </>
          )}
        </FormHandler>
      </S.Form>
    </>
  );
}
