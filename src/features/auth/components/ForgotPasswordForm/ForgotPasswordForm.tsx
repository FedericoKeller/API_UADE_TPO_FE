import * as yup from "yup";
import "./ForgotPasswordForm.scss";
import { Card, Center, Loader } from "@mantine/core";
import { Form } from "@/components/Form";
import { InputField } from "@/components/Form";
import { RouterLink } from "@/components/RouterLink";
import { forgotPassword } from "../../api/forgotPassword";
import { useState } from "react";

const schema = yup.object().shape({
  email: yup
    .string()
    .required("Se requiere el email")
    .email("Ingresa un email válido"),
});

type ForgotPasswordValues = {
  email: string;
};

type ForgotPasswordFormProps = {
  onSuccess: () => void;
};

export const ForgotPasswordForm = ({ onSuccess }: ForgotPasswordFormProps) => {
  const [ isLoading, setLoading ] = useState<boolean>(false);

  return (
    <div className="section-forgot-password">
      <div className="row">
        <div className="forgot-password">
          <div className="container">
            <Card
              shadow="sm"
              padding="lg"
              radius="md"
              className="forgot-password__form"
            >
              <div className="u-margin-bottom--small">
                <h2 className="forgot-password__header">Cambiar Contraseña</h2>
              </div>
              <Form<ForgotPasswordValues, typeof schema>
                onSubmit={async (values) => {
                  if(isLoading) return;
                  setLoading(true);
                  await forgotPassword(values);
                  setLoading(false);
                  onSuccess();
                }}
                schema={schema}
              >
                {({ register, formState }) => (
                  <>
                    <InputField
                      type="email"
                      label="Email"
                      error={formState.errors["email"]}
                      registration={register("email")}
                    />
                    <div className="u-margin-bottom--small btn-box">
                      <button className="btn btn--blue" type="submit">
                      {!isLoading ? (
                          "Continuar"
                        ) : (
                          <Center>
                            <Loader color="white" size={30} />
                          </Center>
                        )}
                      </button>
                      <p>O</p>
                      <RouterLink className="form__link" to="/auth/login">
                        Inicia sesión
                      </RouterLink>
                    </div>
                  </>
                )}
              </Form>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
