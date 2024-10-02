import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import React from 'react';

const skeletonVariants = cva('bg-gray-500 w-full h-4 rounded-md', {
  variants: {
    animation: {
      true: 'animate-pulse',
      false: '',

    },
  },
});

interface SkeletonProps {
  className?: string;
  animation?: boolean;
}

const Skeleton: React.FC<SkeletonProps> = ({
  className = '',
  animation = true,
}) => (
  <div
    className={cn(skeletonVariants({ animation }), className)}
  />
);

export default Skeleton;
