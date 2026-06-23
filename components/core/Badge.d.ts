import * as React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Semantic tone. @default "neutral" */
  tone?: 'neutral' | 'rise' | 'fall' | 'info' | 'gold';
  /** Show a leading glowing status dot. @default false */
  dot?: boolean;
  children?: React.ReactNode;
}

/** Small mono status/label pill — momentum, featured, counts. */
export function Badge(props: BadgeProps): JSX.Element;
