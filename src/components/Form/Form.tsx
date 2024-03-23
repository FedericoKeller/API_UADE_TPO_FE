import { yupResolver } from '@hookform/resolvers/yup';
import clsx from 'clsx';
import * as React from 'react';
import { useForm, UseFormReturn, SubmitHandler, UseFormProps, FieldValues } from 'react-hook-form';
import { ObjectSchema } from 'yup';

type FormProps<TFormValues extends FieldValues, Schema> = {
  className?: string;
  onSubmit: SubmitHandler<TFormValues>;
  children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
  options?: UseFormProps<TFormValues>;
  id?: string;
  schema?: Schema;
};

export const Form = <
  TFormValues extends Record<string, unknown> = Record<string, unknown>,
  Schema extends ObjectSchema<any> = ObjectSchema<any>
>({
  onSubmit,
  children,
  className,
  options,
  id,
  schema,
}: FormProps<TFormValues, Schema>) => {
  const methods = useForm<TFormValues>({ ...options, resolver: schema && yupResolver(schema) });
  return (
    <form
      className={clsx('form', className)}
      onSubmit={methods.handleSubmit(onSubmit)}
      id={id}
    >
      {children(methods)}
    </form>
  );
};