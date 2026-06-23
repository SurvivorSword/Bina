import * as React from 'react';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** @default "plain" */
  variant?: 'plain' | 'solid';
  /** Accessible label (also the tooltip title). */
  label: string;
  /** An SVG icon. */
  children?: React.ReactNode;
}

/** Square, icon-only button (toolbar actions, close, menu). */
export function IconButton(props: IconButtonProps): JSX.Element;
