import { ReactNode } from 'react';
import { clsx } from 'clsx'
import { Slot } from '@radix-ui/react-slot';

export interface TextProps {
  size?: 'small' | 'medium' | 'large';
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}

export function Text({ size = 'medium', children, asChild, className }: TextProps) {
  const Component = asChild ? Slot : 'span'

  return (
    <Component
      className={
        clsx(
          'text-gray-100 font-sans',
          {
            'text-xs': size === 'small',
            'text-sm': size === 'medium',
            'text-md': size === 'large',
          },
          className,
        )
      }
    >
      {children}
    </Component>
  )
}