import * as React from 'react';

import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';

const inputVariants = cva(
  `flex h-14 w-full border border-tra-input bg-tra-input-fill px-3 py-2
  hover:shadow-input-hover
  focus-visible:shadow-input-focus focus-visible:outline-none focus-visible:border-1 focus-visible:border-tra-primary-focused 
  disabled:cursor-not-allowed disabled:bg-tra-input-light disabled:text-tra-neutral-grey disabled:placeholder:text-tra-input
  placeholder:text-muted-foreground 
  file:border-0 file:bg-transparent file:text-sm file:font-medium`,
  {
    variants: {
      size: {
        default: 'h-14 text-base',
        sm: 'h-13 text-sm',
        lg: 'h-15 text-lg',
      },
      error: {
        true: 'outline-none border-error focus-visible:border-error focus-visible:outline-error focus-visible:-outline-offset-1 focus-visible:shadow-none',
        false: '',
      },
      borderRadius: {
        default: 'rounded-md',
        lg: 'rounded-5xl',
      },
    },
    defaultVariants: {
      size: 'default',
      error: false,
      borderRadius: 'default',
    },
  },
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
  VariantProps<typeof inputVariants> {
  borderRadius?: 'default' | 'lg';
  className?: string;
  endIcon?: React.ReactNode;
  error?: boolean | null | undefined;
  size?: 'default' | 'sm' | 'lg' | undefined;
  startIcon?: React.ReactNode;
  type?: React.InputHTMLAttributes<HTMLInputElement>['type'];
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({
    borderRadius,
    className = '',
    endIcon,
    error,
    size,
    startIcon,
    type,
    ...props
  }, ref) => (
    <div className="flex items-center">
      {startIcon && (
        <span className="absolute left-3 text-current">
          {startIcon}
        </span>
      )}
      <input
        type={type}
        className={cn(inputVariants({ size, error, borderRadius }), className)}
        ref={ref}
        style={{
          paddingLeft: startIcon ? '2.5rem' : undefined,
          paddingRight: endIcon ? '2.5rem' : undefined,
        }}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      />
      {endIcon && (
        <span className="absolute right-3 text-current">
          {endIcon}
        </span>
      )}
    </div>
  ),
);
Input.displayName = 'Input';

export default Input;
