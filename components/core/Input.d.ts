import * as React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Field label above the input. */
  label?: string;
  /** Leading SVG icon inside the field. */
  icon?: React.ReactNode;
  /** Helper / error text below (mono). */
  hint?: string;
  /** Error styling. @default false */
  invalid?: boolean;
}

/** Text input with optional label, leading icon, and hint. Search uses this with a search icon. */
export function Input(props: InputProps): JSX.Element;
