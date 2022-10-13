import { ReactNode } from 'react';
import { clsx } from 'clsx'

export interface TextProps {
  size?: 'small' | 'medium' | 'large';
  children: ReactNode;
}

export function Text({ size = 'medium', children }: TextProps) {
  return (
    <span className={
      clsx(
        'text-gray-100 font-sans',
        {
          'text-xs': size === 'small',
          'text-sm': size === 'medium',
          'text-md': size === 'large',
        }
      )
    }>
      {children}
    </span>
  )
}