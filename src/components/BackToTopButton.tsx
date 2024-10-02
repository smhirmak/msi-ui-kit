import React, { useState, useEffect } from 'react';
import { CaretUp } from '@/assets/Icons';
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import Button from './Button';

const buttonVariants = cva(
  `text-white/80 group-hover:text-white h-8 w-8 min-w-8 min-h-8
  border rounded-full border-white/80 group-hover:border-white  
  duration-300 transition-opacity`,
  {
    variants: {
      isVisible: {
        true: 'opacity-100',
        false: 'opacity-0 pointer-events-none',
      },
    },
  },
);

interface IBackToTopButtonProps {
  buttonClassName?: string;
  containerClassName?: string;
  icon?: React.ReactNode;
  iconClassName?: string;
}

const BackToTopButton: React.FC<IBackToTopButtonProps> = ({ buttonClassName, containerClassName, icon, iconClassName }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(window.scrollY > 500);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const IconComponent = icon ?? <CaretUp className={cn('w-6 h-6', iconClassName)} />;

  return (
    <div className={cn('fixed bottom-16 right-5 z-50 group hover:animate-bounce', containerClassName)}>
      <Button
        variant="ghost"
        size="icon"
        onClick={scrollToTop}
        aria-label="Back to top"
        className={cn(buttonVariants({ isVisible }), buttonClassName)}
      >
        {IconComponent}
      </Button>
    </div>
  );
};

export default BackToTopButton;
