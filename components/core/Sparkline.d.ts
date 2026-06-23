import * as React from 'react';

export interface SparklineProps extends React.SVGAttributes<SVGSVGElement> {
  /** Series of numbers to plot. */
  data: number[];
  /** @default 120 */
  width?: number;
  /** @default 36 */
  height?: number;
  /** Line color tone. @default "glow" */
  tone?: 'glow' | 'rise' | 'fall' | 'plum' | 'gold';
  /** Fill the area under the line. @default true */
  fill?: boolean;
  /** Glowing dot on the latest point. @default true */
  dot?: boolean;
  strokeWidth?: number;
}

/**
 * Glowing mini trend line — the signature dataviz unit for a topic's momentum over time.
 * @startingPoint section="Dataviz" subtitle="Glowing momentum sparkline" viewport="700x140"
 */
export function Sparkline(props: SparklineProps): JSX.Element;
