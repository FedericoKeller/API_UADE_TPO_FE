import { Card } from "@mantine/core";
import './RegisterForm.scss';

export const RegisterForm = () => {
  return (
    <div className="section-register">
      <div className="row">
        <div className="register">
          <div className="container">
            <Card shadow="sm" padding="lg" radius="md" className="register__form">
              <form className="form">
                <div className="u-margin-bottom--small">
                  <h2 className="register__header">Registro</h2>
                </div>

                <div className="form__group">
                  <label htmlFor="email" className="form__label">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    className="form__input"
                    type="email"
                    required
                  />
                </div>

                <section>
                  <div className="form__group">
                    <label htmlFor="password" className="form__label">
                      Contraseña
                    </label>
                    <input
                      id="password"
                      name="password"
                      className="form__input"
                      type="password"
                      required
                    />
                  </div>

                  <div className="form__group">
                    <label htmlFor="password" className="form__label">
                      Repetir Contraseña
                    </label>
                    <input
                      id="passwordConfirm"
                      name="passwordConfirm"
                      className="form__input"
                      type="password"
                      required
                    />
                  </div>
                </section>

                <div className="u-margin-bottom--small">
                  <button type="submit" className="btn btn--blue">
                    Continuar
                  </button>
                </div>
              </form>
              <div>
                <h3 className="login">
                  ¿Ya tienes una cuenta? <a className="form__link">Inicia sesión</a>
                </h3>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
