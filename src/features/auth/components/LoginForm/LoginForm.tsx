import * as yup from 'yup';
import "./LoginForm.scss";
import { Card } from "@mantine/core";
import { Form } from "@/components/Form";
import { InputField } from "@/components/Form";
import { RouterLink } from "@/components/RouterLink";

const schema = yup.object().shape({
  email: yup.string().required("Se requiere el email").email("Ingresa un email válido"),
  password: yup.string().required("Se requiere la contraseña"),
});

type LoginValues = {
  email: string;
  password: string;
};

type LoginFormProps = {
  onSuccess: () => void;
};

export const LoginForm = ({ onSuccess }: LoginFormProps) => {
  return (
    <div className="section-login">
      <div className="row">
        <div className="login">
          <div className="container">
            <Card shadow="sm" padding="lg" radius="md" className="login__form">
              <div className="u-margin-bottom--small">
                <h2 className="login__header">Iniciar sesión</h2>
              </div>
              <Form<LoginValues, typeof schema>
                onSubmit={async (values) => {
                  onSuccess();
                }}
                schema={schema}
                options={ { defaultValues: { email: 'test@test.com', password: '123456' } } }
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
                    >
                      <RouterLink label="¿Olvidaste tu contraseña?" to="/" />
                    </InputField>
                    <div>
                      <button className="btn btn--blue" type="submit">
                        Continuar
                      </button>
                    </div>
                  </>
                )}
              </Form>
              <div className="u-margin-top--small">
                <h3 className="register">
                  ¿No tienes una cuenta?{" "}
                  <RouterLink label="Regístrate" to="/auth/register" />
                </h3>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
