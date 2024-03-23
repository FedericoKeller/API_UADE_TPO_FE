import clsx from 'clsx';
import { UseFormRegisterReturn } from 'react-hook-form';
import { FieldWrapper, FieldWrapperPassThroughProps } from '../FieldWrapper/FieldWrapper';
import './InputField.scss';

type InputFieldProps = FieldWrapperPassThroughProps & {
  type?: 'text' | 'email' | 'password';
  className?: string;
  children?: React.ReactNode;
  registration: Partial<UseFormRegisterReturn>;
};

export const InputField = (props: InputFieldProps) => {
  const { type = 'text', label, className, children, registration, error } = props;
  return (
    <FieldWrapper label={label} error={error}>
      {children}
      <input
        type={type}
        className={clsx(
          'form__input',
          className
        )}
        {...registration}
      />
    </FieldWrapper>
  );
};