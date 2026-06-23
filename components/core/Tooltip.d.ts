import * as React from 'react';

export interface TooltipProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Tooltip text (mono). */
  label: string;
  /** The trigger element. */
  children: React.ReactNode;
}

/** Hover/focus tooltip — wraps any trigger; appears above. */
export function Tooltip(props: TooltipProps): JSX.Element;
