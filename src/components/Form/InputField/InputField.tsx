import clsx from "clsx";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import "./InputField.scss";
import { Input, PasswordInput, TextInput } from "@mantine/core";


type FieldWrapperProps = {
  label?: string;
  className?: string;
  children: React.ReactNode;
  error?: FieldError | undefined;
  description?: string;
};

export type FieldWrapperPassThroughProps = Omit<FieldWrapperProps, 'className' | 'children'>;

type InputFieldProps = FieldWrapperPassThroughProps & {
  type?: "text" | "email" | "password";
  className?: string;
  children?: React.ReactNode;
  registration: Partial<UseFormRegisterReturn>;
};

export const InputField = (props: InputFieldProps) => {
  const {
    type = "text",
    label,
    className,
    children,
    registration,
    error,
  } = props;
  return (
    <Input.Wrapper className="form__group">
      <Input.Label className="form__label">
        <span className={clsx(!children?.[0] && "form__label--text")}>
          {label}
        </span>
        {children}
      </Input.Label>

      {type !== "password" ? (
        <TextInput
          type={type}
          className={clsx("form__input", className)}
          {...registration}
        />
      ) : (
        <PasswordInput
          className={clsx("form__input", className)}
          {...registration}
        />
      )}

      <Input.Error className="error">{error?.message}</Input.Error>
    </Input.Wrapper>
  );
};
