import { Card } from "@mantine/core";
import "./RegisterForm.scss";
import * as yup from "yup";
import { Form, InputField } from "@/components/Form";
import { RouterLink } from "@/components/RouterLink";

const schema = yup.object().shape({
  email: yup.string().required("Se requiere el email").email("Ingresa un email válido"),
  password: yup
    .string()
    .required("Se requiere la contraseña")
    .min(6, "La contraseña debe tener al menos 6 carácteres"),
  repeatPassword: yup
    .string()
    .required("Ingresa la contraseña nuevamente")
    .min(6, "La contraseña debe tener al menos 6 carácteres")
    .oneOf([yup.ref("password")], "Las contraseñas no coinciden"),
});

type RegisterValues = {
  email: string;
  password: string;
  repeatPassword: string;
};

type RegisterFormProps = {
  onSuccess: () => void;
};

export const RegisterForm = ({ onSuccess }: RegisterFormProps) => {
  return (
    <div className="section-register">
      <div className="row">
        <div className="register">
          <div className="container">
            <Card
              shadow="sm"
              padding="lg"
              radius="md"
              className="register__form"
            >
              <div className="u-margin-bottom--small">
                <h2 className="register__header">Registro</h2>
              </div>
              <Form<RegisterValues, typeof schema>
                onSubmit={async (values) => {
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
                    <InputField
                      type="password"
                      label="Contraseña"
                      error={formState.errors["password"]}
                      registration={register("password")}
                    ></InputField>
                    <InputField
                      type="password"
                      label="Repetir Contraseña"
                      error={formState.errors["repeatPassword"]}
                      registration={register("repeatPassword")}
                    ></InputField>
                    <div>
                      <button className="btn btn--blue" type="submit">
                        Continuar
                      </button>
                    </div>
                  </>
                )}
              </Form>
              <div className="u-margin-top--small">
                <h3 className="login">
                  ¿Ya tienes una cuenta?{" "}
                  <RouterLink label="Inicia sesión" to="/auth/login" />
                </h3>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
