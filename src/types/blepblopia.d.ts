// src/types/global.d.ts
export {};

declare global {
  interface Window {
    startBlepblopia: (element: HTMLElement | null) => void;
  }
}
