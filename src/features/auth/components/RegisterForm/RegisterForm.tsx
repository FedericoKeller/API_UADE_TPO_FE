import { Card } from "@mantine/core";
import "./RegisterForm.scss";
import * as yup from "yup";
import { Form, InputField } from "@/components/Form";
import { RouterLink } from "@/components/RouterLink";
import { useRegister } from "@/lib/auth";
import { useSearchParams } from "react-router-dom";

type RegisterValues = {
  username: string;
  email: string;
  password: string;
  passwordConfirm: string;
};

const schema = yup.object<RegisterValues>().shape({
  username: yup.string().required("Se requiere el usuario"),
  email: yup
    .string()
    .required("Se requiere el email")
    .email("Ingresa un email válido"),
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

type RegisterFormProps = {
  onSuccess: () => void;
};

export const RegisterForm = ({ onSuccess }: RegisterFormProps) => {
  const register = useRegister({
    onSuccess
  });
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirectTo");

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
                onSubmit={(values) => {
                  register.mutate(values);
                }}
                schema={schema}
              >
                {({ register, formState }) => (
                  <>
                    <InputField
                      type="text"
                      label="Usuario"
                      error={formState.errors["username"]}
                      registration={register("username")}
                    />
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
                      error={formState.errors["passwordConfirm"]}
                      registration={register("passwordConfirm")}
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
                  <RouterLink
                    to={`/auth/login${
                      redirectTo
                        ? `?redirectTo=${encodeURIComponent(redirectTo)}`
                        : ""
                    }`}
                  >
                    Inicia sesión
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
