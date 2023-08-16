import * as React from 'react';

import { cn } from '@/lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-10 rounded-md border text-white px-3 py-2 text-sm  file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-zinc-800 bg-transparent ring-offset-zinc-950 placeholder:text-zinc-400 focus-visible:ring-zinc-300',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input };
