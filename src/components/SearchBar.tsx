import { MagnifyingGlass } from '@/assets/Icons';
import TextField from '@/components/TextField';
import { useLocalizeContext } from '@/contexts/locale/LocalizeContext';
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import React from 'react';

const iconVariants = cva(
  '',
  {
    variants: {
      size: {
        default: 'h-5 w-5',
        sm: 'h-4 w-4',
        lg: 'h-6 w-6',
      },
      disabled: {
        true: 'text-tra-input',
        false: '',
      },
    },
    defaultVariants: {
      size: 'default',
      disabled: false,
    },
  },
);

interface ISearchBar {
  borderRadius?: 'default' | 'lg';
  disabled?: boolean;
  iconClassName?: string;
  label?: string;
  placeholder?: string;
  size?: 'default' | 'sm' | 'lg';
  type?: React.InputHTMLAttributes<HTMLInputElement>['type'];
  value?: string | number | undefined;
  variant?: 'filled' | 'outlined' | 'underlined';
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<
  ISearchBar> = ({
    borderRadius,
    disabled,
    iconClassName,
    label,
    onChange,
    placeholder = 'Search',
    size = 'default',
    type = 'text',
    value,
    variant = 'filled',
    ...otherProps
  }) => {
    const { t } = useLocalizeContext();
    return (
      <TextField
        variant={variant}
        label={label ?? t('Search')}
        labelClassName="-top-[2px] "
        size={size}
        value={value}
        onChange={onChange}
        disabled={disabled}
        type={type}
        placeholder={t(placeholder)}
        startIcon={<MagnifyingGlass className={cn(iconVariants({ size, disabled }), iconClassName)} />}
        borderRadius={borderRadius}
        alwaysTop
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...otherProps}
      />
    );
  };

export default SearchBar;
