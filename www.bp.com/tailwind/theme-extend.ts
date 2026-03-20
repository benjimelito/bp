/**
 * SystemMiner Tailwind Theme Extension
 * Extracted from: https://www.bp.com/
 * Generated: 2026-03-20T17:01:54.114Z
 * 
 * Usage: Merge this into your tailwind.config.ts extend section
 * These reference the CSS variables for single-source-of-truth
 */

export const systemMinerTheme = {
  colors: {
    'sm-brand-primary': 'var(--sm-color-brand-primary)',
    'sm-brand-background': 'var(--sm-color-brand-background)',
    'sm-brand-link': 'var(--sm-color-brand-link)',
    'sm-brand-textprimary': 'var(--sm-color-brand-textprimary)',
    'sm-fff': 'var(--sm-color-fff)',
  },
  fontFamily: {
    'sm-family-1': 'var(--sm-font-family-1)',
  },
  fontSize: {
    'sm-size-6': 'var(--sm-font-size-6)',
  },
  spacing: {
    'sm-xs': 'var(--sm-spacing-xs)',
    'sm-3xl': 'var(--sm-spacing-3xl)',
    'sm-3xl-2': 'var(--sm-spacing-3xl-2)',
  },
  borderRadius: {
    'sm-radius-1': 'var(--sm-radius-1)',
    'sm-radius-2': 'var(--sm-radius-2)',
    'sm-radius-3': 'var(--sm-radius-3)',
    'sm-radius-4': 'var(--sm-radius-4)',
  },
  boxShadow: {
  },
};

// Usage in tailwind.config.ts:
// import { systemMinerTheme } from './path/to/theme-extend';
// export default {
//   theme: {
//     extend: {
//       ...systemMinerTheme,
//     },
//   },
// };
