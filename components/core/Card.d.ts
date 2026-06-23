import * as React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Lift + glow border on hover. @default false */
  interactive?: boolean;
  /** Always show the cyan glow border. @default false */
  glow?: boolean;
  /** Optional top media image URL. */
  media?: string;
  /** Wrap children in default padding. @default true */
  padded?: boolean;
  children?: React.ReactNode;
}

/**
 * Moonlit surface container — the base for topic cards, panels, stats.
 * @startingPoint section="Core" subtitle="Surface card with media & glow states" viewport="700x320"
 */
export function Card(props: CardProps): JSX.Element;
