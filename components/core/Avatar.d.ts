import * as React from 'react';

export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Image URL; falls back to initials of `name`. */
  src?: string;
  /** Full name — used for initials + title. */
  name?: string;
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Accent ring. @default false */
  ring?: boolean;
}

/** Circular avatar; aurora-gradient initials fallback. */
export function Avatar(props: AvatarProps): JSX.Element;
