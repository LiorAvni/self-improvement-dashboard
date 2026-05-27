import type React from 'react';
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Input({ label, className = '', ...props }: InputProps) {
  return (
    <label className="block text-sm">
      {label ? <span className="mb-1 block font-medium text-main">{label}</span> : null}
      <input
        className={`focus-ring w-full rounded-xl border border-soft app-surface px-3 py-2 text-main placeholder:text-slate-400 ${className}`}
        {...props}
      />
    </label>
  );
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
}

export function Select({ label, className = '', children, ...props }: SelectProps) {
  return (
    <label className="block text-sm">
      {label ? <span className="mb-1 block font-medium text-main">{label}</span> : null}
      <select className={`focus-ring w-full rounded-xl border border-soft app-surface px-3 py-2 text-main ${className}`} {...props}>
        {children}
      </select>
    </label>
  );
}

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export function Textarea({ label, className = '', ...props }: TextareaProps) {
  return (
    <label className="block text-sm">
      {label ? <span className="mb-1 block font-medium text-main">{label}</span> : null}
      <textarea
        className={`focus-ring w-full rounded-xl border border-soft app-surface px-3 py-2 text-main placeholder:text-slate-400 ${className}`}
        {...props}
      />
    </label>
  );
}
