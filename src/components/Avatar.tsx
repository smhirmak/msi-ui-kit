/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len */
/* eslint-disable no-nested-ternary */
import { User, X } from '@/assets/Icons';
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import React, { HTMLAttributes, useState } from 'react';

const avatarVariants = cva(
  'relative transition bg-tra-primary-15 text-tra-primary flex items-center justify-center w-fit',
  {
    variants: {
      variant: {
        circular: 'rounded-full',
        rounded: 'rounded-lg',
      },
      size: {
        sm: 'text-lg w-12 h-12 aspect-square',
        lg: 'text-6xl w-52 h-52 min-w-52 min-h-52 aspect-square',
      },
    },
    defaultVariants: {
      variant: 'circular',
      size: 'lg',
    },
  },
);

const avatarIconVariants = cva(
  '',
  {
    variants: {
      size: {
        sm: 'w-5 h-5',
        lg: 'w-20 h-20',
      },
    },
    defaultVariants: {
      size: 'lg',
    },
  },
);
const imageVariants = cva(
  'object-fill w-full h-max-full',
  {
    variants: {
      variant: {
        circular: 'rounded-full',
        rounded: 'rounded-lg',
      },
    },
    defaultVariants: {
      variant: 'circular',
    },
  },
);

const badgeVariants = cva(
  'absolute',
  {
    variants: {
      badgePosition: {
        'top-left': 'top-0 left-0',
        'top-right': 'top-0 right-0',
        'bottom-left': 'bottom-0 left-0',
        'bottom-right': 'bottom-0 right-0',
      },
      variant: {
        circular: '',
        rounded: '',
      },
      size: {
        sm: '',
        lg: '',
      },
    },
    defaultVariants: {
      badgePosition: 'top-right',
      variant: 'circular',
      size: 'lg',
    },
    compoundVariants: [
      {
        badgePosition: 'top-left',
        variant: 'circular',
        size: 'lg',
        className: 'top-8 left-8 transform -translate-x-full -translate-y-1/2',
      },
      {
        badgePosition: 'top-right',
        variant: 'circular',
        size: 'lg',
        className: 'top-8 right-8 transform translate-x-full -translate-y-1/2',
      },
      {
        badgePosition: 'bottom-left',
        variant: 'circular',
        size: 'lg',
        className: 'bottom-8 left-8 transform -translate-x-full translate-y-1/2',
      },
      {
        badgePosition: 'bottom-right',
        variant: 'circular',
        size: 'lg',
        className: 'bottom-8 right-8 transform translate-x-full translate-y-1/2',
      },
      {
        badgePosition: 'top-left',
        variant: 'rounded',
        size: 'lg',
        className: '-top-2 -left-2',
      },
      {
        badgePosition: 'top-right',
        variant: 'rounded',
        size: 'lg',
        className: '-top-2 -right-2',
      },
      {
        badgePosition: 'bottom-left',
        variant: 'rounded',
        size: 'lg',
        className: '-bottom-2 -left-2',
      },
      {
        badgePosition: 'bottom-right',
        variant: 'rounded',
        size: 'lg',
        className: '-bottom-2 -right-2',
      },
      {
        badgePosition: 'top-left',
        variant: 'rounded',
        size: 'sm',
        className: '-top-1 -left-1',
      },
      {
        badgePosition: 'top-right',
        variant: 'rounded',
        size: 'sm',
        className: '-top-1 -right-1',
      },
      {
        badgePosition: 'bottom-left',
        variant: 'rounded',
        size: 'sm',
        className: '-bottom-1 -left-1',
      },
      {
        badgePosition: 'bottom-right',
        variant: 'rounded',
        size: 'sm',
        className: '-bottom-1 -right-1',
      },
    ],
  },
);

interface IAvatar {
  asChild?: React.ElementType;
  badgeClassName?: string;
  badgeContent?: React.ReactNode;
  badgePosition?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
  href?: string;
  icon?: React.ReactNode;
  imageClassName?: string;
  onClick?: () => void;
  size?: 'sm' | 'lg';
  src?: string;
  title?: string;
  variant?: 'circular' | 'rounded';
}

const Avatar = React.forwardRef<HTMLAttributes<HTMLDivElement>, IAvatar>(({
  asChild,
  badgeClassName,
  badgeContent,
  badgePosition = 'top-right',
  className,
  href,
  icon,
  imageClassName,
  onClick,
  size,
  src,
  title,
  variant,
  ...otherProps
}, ref) => {
  const Comp = asChild ?? 'div';
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Comp className={cn(avatarVariants({ variant, size }), className)} ref={ref} onClick={onClick} href={href} {...otherProps}>
      {
        src ? <img className={cn(imageVariants({ variant }), imageClassName)} src={src} alt="" />
          : (!src && title && !icon)
            ? <p>{title.split(' ').map(item => item[0]).join('')}</p>
            : (!src && !title && icon) ? <span>{icon}</span> : <User className={cn(avatarIconVariants({ size }))} />
      }
      {badgeContent && (
        <div className={cn(badgeVariants({ badgePosition, variant, size }), badgeClassName)}>
          {badgeContent}
        </div>
      )}

    </Comp>
  );
});

const showMoreAvatarVariants = cva('relative hover:brightness-125');

const showLessAvatarVariants = cva('bg-tra-primary/50 text-white hover:brightness-125');

interface MultipleAvatarContainerProps {
  children: React.ReactNode[];
  lastElementSize?: 'sm' | 'lg';
  showLessAvatarClassName?: string;
  showMoreAvatarClassName?: string;
}

const MultipleAvatarContainer: React.FC<MultipleAvatarContainerProps> = ({ children, lastElementSize = 'sm', showLessAvatarClassName, showMoreAvatarClassName }) => {
  const [showAllAvatars, setShowAllAvatars] = useState(false);
  const maxVisibleAvatars = 4;
  const remainingAvatars = React.Children.count(children) - maxVisibleAvatars;

  const handleShowAllAvatars = () => {
    setShowAllAvatars(true);
  };

  const handleHideAllAvatars = () => {
    setShowAllAvatars(false);
  };

  return (
    <div className="flex items-center transition-transform duration-1000">
      {React.Children.toArray(children).slice(0, showAllAvatars ? undefined : maxVisibleAvatars).map((child, index) => (
        <div
          key={index}
          className="relative transition-transform duration-500"
          style={{
            transform: showAllAvatars ? `translateX(${index * 5}px)` : `translateX(-${index * 10}px)`,
            zIndex: index,
          }}
        >
          {child}
        </div>
      ))}
      {!showAllAvatars && remainingAvatars > 0 && (
        <div
          className="relative cursor-pointer transition-transform duration-500"
          title="Show more"
          style={{ transform: `translateX(-${maxVisibleAvatars * 10}px)`, zIndex: maxVisibleAvatars }}
          onClick={handleShowAllAvatars}
        >
          <Avatar size={lastElementSize} title={`+ ${remainingAvatars}`} className={cn(showMoreAvatarVariants(), showMoreAvatarClassName)} />
        </div>
      )}
      {showAllAvatars && (
        <div
          className="relative cursor-pointer transition-transform duration-500"
          title="Show less"
          style={{ transform: `translateX(${React.Children.count(children) * 5}px)`, zIndex: React.Children.count(children) }}
          onClick={handleHideAllAvatars}
        >
          <Avatar size={lastElementSize} className={cn(showLessAvatarVariants(), showLessAvatarClassName)} icon={<X />} />
        </div>
      )}
    </div>
  );
};

export { Avatar, MultipleAvatarContainer };
