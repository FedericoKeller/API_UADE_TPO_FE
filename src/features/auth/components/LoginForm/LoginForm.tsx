import * as z from "zod";
import { useForm } from "@tanstack/react-form";
import "./LoginForm.scss";
import { zodValidator } from "@tanstack/zod-form-adapter";
import { Card } from "@mantine/core";
import type { FieldApi } from '@tanstack/react-form'

const schema = z.object({
  email: z.string().min(1, "Requerido"),
  password: z.string().min(1, "Requerido"),
});

type LoginValues = {
  email: string;
  password: string;
};

type LoginFormProps = {
  onSuccess: () => void;
};

function FieldInfo({ field }: { field: FieldApi<any, any, any, any> }) {
  return (
    <>
      {field.state.meta.touchedErrors ? (
        <span className="error">{field.state.meta.touchedErrors}</span>
      ) : null}
      {field.state.meta.isValidating ? 'Validating...' : null}
    </>
  )
}

export const LoginForm = ({ onSuccess }: LoginFormProps) => {
  const form = useForm<LoginValues, any>({
    defaultValues: {
      email: "",
      password: "",
    } as z.infer<typeof schema>,
    onSubmit: async ({ value }) => {
      // Do something with form data
      console.log(value);
      onSuccess();
    },
    validatorAdapter: zodValidator,
  });

  return (
    <div className="section-login">
      <div className="row">
        <div className="login">
          <div className="container">
            <Card shadow="sm" padding="lg" radius="md" className="login__form">
              <form className="form">
                <div className="u-margin-bottom--small">
                  <h2 className="login__header">Iniciar sesión</h2>
                </div>

                <div className="form__group">
                  <form.Field
                    name="email"
                    validators={{
                      onChange: z
                        .string()
                        .email('Ingresa un mail válido')
                    }}
                    children={(field) => {
                      return (
                        <>
                          <label htmlFor={field.name} className="form__label">
                            Email
                          </label>
                          <input
                            id={field.name}
                            name={field.name}
                            value={field.state.value}
                            className="form__input"
                            type={field.name}
                            required
                            onChange={(e) => field.handleChange(e.target.value)}
                          />
                          <FieldInfo field={field} />
                        </>
                      );
                    }}
                  ></form.Field>
                </div>

                <div className="form__group">
                  <form.Field
                    name="password"
                    validators={{
                      onChange: z
                        .string()
                        .min(1, 'Se requiere la contraseña')
                    }}
                    children={(field) => {
                      return (
                        <>
                          <div className="form__password">
                            <label htmlFor={field.name} className="form__label">
                              Contraseña
                            </label>
                            <a className="form__link">¿Olvidaste tu contraseña?</a>
                          </div>

                          <input
                            id={field.name}
                            name={field.name}
                            value={field.state.value}
                            className="form__input"
                            type={field.name}
                            required
                            onChange={(e) => field.handleChange(e.target.value)}
                          />
                        </>
                      );
                    }}
                  ></form.Field>
                </div>

                <div className="u-margin-bottom--small">
                <button className="btn btn--blue">
                  Continuar
              </button>
                </div>
              </form>
              <div>
                <h3 className="register">
                  ¿No tienes una cuenta? <a className="form__link">Regístrate</a>
                </h3>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
