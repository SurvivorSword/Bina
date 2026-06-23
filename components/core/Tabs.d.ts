import * as React from 'react';

export interface TabItem {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

export interface TabsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  items: TabItem[];
  /** Active tab value (controlled). Defaults to first item. */
  value?: string;
  onChange?: (value: string) => void;
}

/** Segmented tab control; active tab glows cyan. */
export function Tabs(props: TabsProps): JSX.Element;
