import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import * as React from 'react';

const spinnerVariants = cva('w-16 h-16 border-4 border-t-4 border-gray-200 border-t-gray-800 rounded-full animate-spin');

interface LoadingSpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const LoadingSpinner = React.forwardRef<HTMLDivElement, LoadingSpinnerProps>((props, ref) => {
  const { className, ...rest } = props;
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <div ref={ref} className={cn(spinnerVariants(), className)} {...rest} />;
});

LoadingSpinner.displayName = 'LoadingSpinner';

export default LoadingSpinner;
