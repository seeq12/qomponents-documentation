declare module '@seeqdev/qomponents' {
  import type { ComponentType } from 'react';

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  type QomponentProps = Record<string, any>;

  // Component exports with basic prop types
  export const Accordion: ComponentType<QomponentProps>;
  export const Alert: ComponentType<QomponentProps>;
  export const Button: ComponentType<QomponentProps>;
  export const ButtonGroup: ComponentType<QomponentProps>;
  export const ButtonWithDropdown: ComponentType<QomponentProps>;
  export const ButtonWithPopover: ComponentType<QomponentProps>;
  export const Carousel: ComponentType<QomponentProps>;
  export const Checkbox: ComponentType<QomponentProps>;
  export const Collapse: ComponentType<QomponentProps>;
  export const Icon: ComponentType<QomponentProps>;
  export const InputGroup: ComponentType<QomponentProps>;
  export const Modal: ComponentType<QomponentProps>;
  export const ProgressBar: ComponentType<QomponentProps>;
  export const Select: ComponentType<QomponentProps>;
  export const SeeqActionDropdown: ComponentType<QomponentProps>;
  export const Slider: ComponentType<QomponentProps>;
  export const Tabs: ComponentType<QomponentProps>;
  export const TextArea: ComponentType<QomponentProps>;
  export const TextField: ComponentType<QomponentProps>;
  export const ToolbarButton: ComponentType<QomponentProps>;
  export const Tooltip: ComponentType<QomponentProps>;
}
