import clsx from "clsx";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import "./InputField.scss";
import { ComboboxData, Input, PasswordInput, Select, TextInput } from "@mantine/core";


type FieldWrapperProps = {
  label?: string;
  className?: string;
  children: React.ReactNode;
  error?: FieldError | undefined;
  description?: string;
};

export type FieldWrapperPassThroughProps = Omit<FieldWrapperProps, 'className' | 'children'>;

type InputFieldProps = FieldWrapperPassThroughProps & {
  type?: "text" | "email" | "password" | "select";
  className?: string;
  children?: React.ReactNode;
  registration: Partial<UseFormRegisterReturn>;
  data?: ComboboxData;
};




export const InputField = (props: InputFieldProps) => {
  const {
    type = "text",
    label,
    className,
    children,
    registration,
    error,
    data
  } = props;

  const renderOnType = (type: InputFieldProps["type"]) => {
    switch (type) {
      case "password":
        return (
          <PasswordInput
            className={clsx("form__input", className)}
            {...registration}
          />
        );
      case "select":
        return (
          <Select
            type={type}
            className={clsx("form__input", className)}
            data={data}
            {...registration as Omit<InputFieldProps["registration"], "onChange">}
          />
        );
      default:
        return (
          <TextInput
            type={type}
            className={clsx("form__input", className)}
            {...registration}
          />
        );
    }
  }

  return (
    <Input.Wrapper className="form__group">
      <Input.Label className="form__label">
        <span className={clsx(!children?.[0] && "form__label--text")}>
          {label}
        </span>
        {children}
      </Input.Label>

      {renderOnType(type)}

      <Input.Error className="error">{error?.message}</Input.Error>
    </Input.Wrapper>
  );
};
