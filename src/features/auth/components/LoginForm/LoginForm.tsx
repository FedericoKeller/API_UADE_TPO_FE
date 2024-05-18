import * as yup from "yup";
import "./LoginForm.scss";
import { Card } from "@mantine/core";
import { Form } from "@/components/Form";
import { InputField } from "@/components/Form";
import { RouterLink } from "@/components/RouterLink";
import { useLogin } from "@/lib/auth";
import { useSearchParams } from "react-router-dom";

const schema = yup.object().shape({
  email: yup
    .string()
    .required("Se requiere el email")
    .email("Ingresa un email válido"),
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
  const login = useLogin({
    onSuccess,
  });

  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirectTo");

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
                onSubmit={(values) => {
                  login.mutate(values);
                }}
                schema={schema}
                options={{
                  defaultValues: { email: "federicokeller27@gmail.com", password: "123456" },
                }}
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
                      <RouterLink to="/auth/forgot-password">
                        ¿Olvidaste tu contraseña?
                      </RouterLink>
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
                  <RouterLink
                    to={`/auth/register${
                      redirectTo
                        ? `?redirectTo=${encodeURIComponent(redirectTo)}`
                        : ""
                    }`}
                  >
                    Regístrate
                  </RouterLink>
                </h3>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
