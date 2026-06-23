import * as React from 'react';

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Selected state. @default false */
  active?: boolean;
  /** Prefix with a glowing # (topic style). @default false */
  hash?: boolean;
  /** If provided, renders a remove (×) control. */
  onRemove?: (e: React.MouseEvent) => void;
  children?: React.ReactNode;
}

/** Topic chip / filter token — the unit of an AI subject in Bina. */
export function Tag(props: TagProps): JSX.Element;
