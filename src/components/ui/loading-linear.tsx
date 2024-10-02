import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import * as React from 'react';

const linearContainerVariants = cva('relative w-full h-1 bg-gray-200 overflow-hidden');

const linearVariants = cva('absolute top-0 left-0 w-full h-full bg-tra-primary animate-linear-loader');

interface LoadingLinearProps extends React.HTMLAttributes<HTMLDivElement> {
  linearContainerClassName?: string;
  linearItemClassName?: string;
}

const LoadingLinear = React.forwardRef<HTMLDivElement, LoadingLinearProps>((props, ref) => {
  const { linearContainerClassName, linearItemClassName, ...rest } = props;
  // eslint-disable-next-line react/jsx-props-no-spreading
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <div ref={ref} className={cn(linearContainerVariants(), linearContainerClassName)} {...rest}>
      <div className={cn(linearVariants(), linearItemClassName)} />
    </div>
  );
});

LoadingLinear.displayName = 'LoadingLinear';

export default LoadingLinear;
