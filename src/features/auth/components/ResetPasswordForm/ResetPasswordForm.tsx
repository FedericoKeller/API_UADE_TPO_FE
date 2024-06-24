import { Card, Center, Loader } from "@mantine/core";
import "./ResetPasswordForm.scss";
import * as yup from "yup";
import { Form, InputField } from "@/components/Form";
import { resetPassword } from "../../api/resetPassword";
import { useState } from "react";

type ResetPasswordValues = {
  password: string;
  passwordConfirm: string;
};

const schema = yup.object<ResetPasswordValues>().shape({
  password: yup
    .string()
    .required("Se requiere la contraseña")
    .min(6, "La contraseña debe tener al menos 6 carácteres"),
  passwordConfirm: yup
    .string()
    .required("Ingresa la contraseña nuevamente")
    .min(6, "La contraseña debe tener al menos 6 carácteres")
    .oneOf([yup.ref("password")], "Las contraseñas no coinciden"),
});

type ResetPasswordFormProps = {
  onSuccess: () => void;
  email: string;
};

export const ResetPasswordForm = ({ onSuccess, email }: ResetPasswordFormProps) => {

  const [ isLoading, setLoading ] = useState<boolean>(false);

  return (
    <div className="section-reset-password">
      <div className="row">
        <div className="reset-password">
          <div className="container">
            <Card
              shadow="sm"
              padding="lg"
              radius="md"
              className="register__form"
            >
              <div className="u-margin-bottom--small">
                <h2 className="register__header">Resetear Contraseña</h2>
              </div>
              <Form<ResetPasswordValues, typeof schema>
                onSubmit={async (values) => {
                  if(isLoading) return;
                  setLoading(true);
                  const value = await resetPassword({ ...values, email });
                  setLoading(false);
                  if(!value) return;
                  onSuccess();
                }}
                schema={schema}
              >
                {({ register, formState }) => (
                  <>
                    <InputField
                      type="password"
                      label="Contraseña"
                      error={formState.errors["password"]}
                      registration={register("password")}
                    ></InputField>
                    <InputField
                      type="password"
                      label="Repetir Contraseña"
                      error={formState.errors["passwordConfirm"]}
                      registration={register("passwordConfirm")}
                    ></InputField>
                    <div>
                      <button className="btn btn--soft-blue" type="submit">
                      {!isLoading ? (
                          "Continuar"
                        ) : (
                          <Center>
                            <Loader color="white" size={30} />
                          </Center>
                        )}
                      </button>
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