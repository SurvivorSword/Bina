import * as React from 'react';

export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /** Controlled checked state. */
  checked?: boolean;
  /** Optional trailing label. */
  label?: string;
}

/** On/off toggle — checked state glows cyan. */
export function Switch(props: SwitchProps): JSX.Element;
