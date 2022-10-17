import { ButtonHTMLAttributes, ReactNode } from 'react';
import { clsx } from 'clsx'
import { Slot } from '@radix-ui/react-slot';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  fullWidth?: boolean;
  className?: string;
}

export function Button({ children, asChild, fullWidth, className, ...props }: ButtonProps) {
  const Component = asChild ? Slot : 'button'

  return (
    <Component
      className={
        clsx(
          'py-3 px-4 bg-cyan-500 rounded font-semibold text-black text-sm font-sans transition-colors hover:bg-cyan-300 focus:ring-2 ring-white',
          {
            'w-full': fullWidth
          },
          className,
        )
      }
      {...props}
    >
      {children}
    </Component>
  )
}