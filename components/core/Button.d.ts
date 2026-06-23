import * as React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. @default "primary" */
  variant?: 'primary' | 'secondary' | 'ghost' | 'plum';
  /** Size. @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Render as a different element (e.g. "a"). @default "button" */
  as?: 'button' | 'a';
  children?: React.ReactNode;
}

/**
 * Primary action button for Bina. Bioluminescent glow on the primary variant.
 * @startingPoint section="Core" subtitle="Buttons in all variants & sizes" viewport="700x200"
 */
export function Button(props: ButtonProps): JSX.Element;
