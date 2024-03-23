import clsx from 'clsx';
import * as React from 'react';
import { FieldError } from 'react-hook-form';
import './FieldWrapper.scss';

type FieldWrapperProps = {
  label?: string;
  className?: string;
  children: React.ReactNode;
  error?: FieldError | undefined;
  description?: string;
};

export type FieldWrapperPassThroughProps = Omit<FieldWrapperProps, 'className' | 'children'>;

export const FieldWrapper = (props: FieldWrapperProps) => {
  const { label, className, error, children } = props;
  return (
    <div className='form__group'>
      <label className={clsx('form__label', className)}>
        <span className={clsx(!children?.[0] && 'form__label--text')}>{label}</span>
        {children}
      </label>
      {error?.message && (
        <div role="alert" aria-label={error.message} className="error">
          {error.message}
        </div>
      )}
    </div>
  );
};