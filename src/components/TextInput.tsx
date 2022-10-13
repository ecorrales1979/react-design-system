import { InputHTMLAttributes } from 'react';
import { clsx } from 'clsx';

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  fullWidth?: boolean;
}

export function TextInput({ fullWidth, ...props }: TextInputProps) {
  return (
    <input
      className={
        clsx(
          'font-sans py-4 px-3 rounded bg-gray-800 text-gray-100 text-xs placeholder:text-gray-400 focus:ring-2 ring-cyan-300 outline-none',
          {
            'w-full': fullWidth
          }
        )
      }
      {...props}
    />
  )
}