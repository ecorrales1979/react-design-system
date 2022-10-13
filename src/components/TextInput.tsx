import { InputHTMLAttributes, ReactNode } from 'react';
import { clsx } from 'clsx';

export type TextInputInputProps = InputHTMLAttributes<HTMLInputElement>

export interface TextInputRootProps {
  children: ReactNode;
}

function TextInputRoot({children}: TextInputRootProps) {
  return (
    <div
      className="flex items-center gap-3 font-sans py-4 px-3 rounded bg-gray-800 focus-within:ring-2 ring-cyan-300"
    >{children}</div>
  )
}

// function TextInputIcon() {}

function TextInputInput(props: TextInputInputProps) {
  return (
    <input {...props} className="bg-transparent flex-1 outline-none text-gray-100 text-xs placeholder:text-gray-400" />
  )
}

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
}