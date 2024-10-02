/* eslint-disable max-len */
/* eslint-disable no-nested-ternary */
import { SealCheck, SealError, SealWarning } from '@/assets/Icons';
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import React from 'react';

interface IIInformationStatus {
  className?: string;
  icon?: React.ReactNode;
  isHaveIcon?: boolean;
  title: string;
  type?: 'success' | 'error' | 'warning';
}

const informationStatusVariants = cva(
  'flex gap-1 w-fit px-4 py-2 rounded-md text-sm font-medium break-normal text-ellipsis overflow-hidden whitespace-normal max-w-full',
  {
    variants: {
      type: {
        success: 'bg-success-light text-success',
        error: 'bg-error-light text-error',
        warning: 'bg-tra-secondary-light text-tra-secondary',

      },
    },
    defaultVariants: {
      type: 'success',
    },
  },
);

const iconsStyle = cva('text-base min-w-fit');

const InformationStatus: React.FC<IIInformationStatus> = ({
  className,
  icon,
  isHaveIcon = false,
  title,
  type = 'success',
  ...otherProps
}) => (
  <div
    className={cn(informationStatusVariants({ type }), className)}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...otherProps}
  >
    <span className="mt-1">
      {(isHaveIcon || icon) && (
        type === 'success'
          ? (icon ?? <SealCheck className={cn(iconsStyle())} />) : type === 'warning'
            ? (icon ?? <SealWarning className={cn(iconsStyle())} />) : type === 'error'
              ? (icon ?? <SealError className={cn(iconsStyle())} />) : null
      )}
    </span>
    <span>{title}</span>
  </div>
);

export default InformationStatus;
