import * as React from 'react';
import { cn } from '../../utils/classNameUtils';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  error?: boolean;
  errorMsg?: string;
  labelText?: string;
  wrapperClassNames?: string;
  classNames?: string;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type,
      placeholder,
      error = true,
      errorMsg,
      disabled,
      labelText,
      classNames = '',
      wrapperClassNames,
      ...restInputProps
    },
    ref,
  ) => {
    return (
      <div className={cn(wrapperClassNames)}>
        {labelText && (
          <label
            htmlFor={type}
            className="block mb-2 text-sm font-bold w-full text-grey-dark"
          >
            {labelText}
          </label>
        )}
        <input
          type={type}
          placeholder={placeholder}
          className={cn(
            'flex h-10 w-full pl-5 pb-3 pt-3 rounded-[5px]',
            'border border-input border-dark-gray-color hover:border-grey-hover',
            'text-sm text-primary-color font-bold',
            'file:border-0 file:bg-transparent file:text-sm file:font-medium file:cursor-pointer',
            'focus:border-primary-color focus-visible:outline-none',
            'placeholder:text-gray',
            type === 'file' && 'h-auto',
            disabled && 'disabled:cursor-not-allowed disabled:opacity-50',
            error && 'border-error',
            classNames,
          )}
          ref={ref}
          {...{ disabled, ...restInputProps }}
        />
        <span className="w-full min-h-[16px] flex items-center font-medium tracking-wide text-red-500 text-xs my-1 ml-1">
          {errorMsg ? errorMsg : ' '}
        </span>
      </div>
    );
  },
);

Input.displayName = 'Input';

export default Input;
