import { ReactNode } from 'react';
import { clsx } from 'clsx'
import { Slot } from '@radix-ui/react-slot';

export interface HeadingProps {
  size?: 'small' | 'medium' | 'large';
  children: ReactNode;
  asChild?: boolean;
}

export function Heading({ size = 'medium', children, asChild }: HeadingProps) {
  const Component = asChild ? Slot : 'h2'

  return (
    <Component
      className={
        clsx(
          'text-gray-100 font-bold font-sans',
          {
            'text-lg': size === 'small',
            'text-xl': size === 'medium',
            'text-2xl': size === 'large',
          }
        )
      }
    >
      {children}
    </Component>
  )
}