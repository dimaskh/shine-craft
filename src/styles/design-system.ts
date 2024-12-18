import tokens from './design-tokens.json';

export const designTokens = {
  colors: {
    primary: {
      darkest: '#7554A3',
      base: '#BF9BF9',
      dark: '#3F4390',
      gradient: 'linear-gradient(260.83deg, #BF9BF9 0%, #3F4390 100%)'
    },
    background: {
      dark: '#282628',
      light: '#363436',
      lightest: '#484649',
      transparent: '#ffffff00'
    },
    text: {
      primary: '#FFFFFF',
      secondary: 'rgba(255, 255, 255, 0.6)',
      muted: 'rgba(255, 255, 255, 0.4)'
    }
  },
  typography: {
    fontFamily: 'Figtree, sans-serif',
    fontSize: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      base: '1rem',     // 16px
      lg: '1.125rem',   // 18px
      xl: '1.25rem',    // 20px
      '2xl': '1.5rem',  // 24px
      '3xl': '1.875rem',// 30px
      '4xl': '2.25rem', // 36px
      '5xl': '3rem',    // 48px
    },
    fontWeight: {
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900'
    },
    lineHeight: {
      none: '1',
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2'
    }
  },
  spacing: {
    0: '0',
    1: '0.25rem',  // 4px
    2: '0.5rem',   // 8px
    3: '0.75rem',  // 12px
    4: '1rem',     // 16px
    5: '1.25rem',  // 20px
    6: '1.5rem',   // 24px
    8: '2rem',     // 32px
    10: '2.5rem',  // 40px
    12: '3rem',    // 48px
    16: '4rem',    // 64px
    20: '5rem',    // 80px
    24: '6rem'     // 96px
  },
  borderRadius: {
    none: '0',
    sm: '0.125rem',    // 2px
    base: '0.25rem',   // 4px
    md: '0.375rem',    // 6px
    lg: '0.5rem',      // 8px
    xl: '0.75rem',     // 12px
    '2xl': '1rem',     // 16px
    '3xl': '1.5rem',   // 24px
    full: '9999px'
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)'
  }
};

export const utils = {
  cx: (...classes: (string | boolean | undefined | null)[]) => {
    return classes.filter(Boolean).join(' ');
  },
  getRgbaColor: (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  },
  getGradientBackground: (colors: string[], direction = '180deg') => {
    return `linear-gradient(${direction}, ${colors.join(', ')})`;
  },
};

export const componentStyles = {
  button: {
    primary: {
      backgroundColor: designTokens.colors.primary.base,
      color: designTokens.colors.text.primary,
      padding: `${designTokens.spacing[2]} ${designTokens.spacing[4]}`,
      borderRadius: designTokens.borderRadius.md,
      fontWeight: designTokens.typography.fontWeight.medium,
    },
    secondary: {
      backgroundColor: 'transparent',
      color: designTokens.colors.text.primary,
      padding: `${designTokens.spacing[2]} ${designTokens.spacing[4]}`,
      borderRadius: designTokens.borderRadius.md,
      fontWeight: designTokens.typography.fontWeight.medium,
      border: '1px solid rgba(255, 255, 255, 0.1)',
    },
  },
};
