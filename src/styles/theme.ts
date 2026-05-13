export const mosaicTheme = {
    spacing: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
    },

    radius: {
        none: '0px',
        sm: '4px',
        md: '8px',
    },

    // Палитра
    colors: {
        primary: {
            100: '#88c070',
            500: '#306850',
            600: '#1e4f3a',
            700: '#0c3520'
        },

        gray: {
            100: '#e0f8d0',
            300: '#8bac0f',
            500: '#5d6d00',
            700: '#2c3c00',
            900: '#0f1f00',
        },

        accent: {
            500: 'rgba(255, 255, 255, 0.9)',
            600: 'rgba(255, 255, 255, 0.7)',
        },

        feedback: {
            success: '#88c070',
            warning: '#d8b256',
            danger: '#c85d4a',
            info: '#6fa8dc',
        },

        white: '#ffffff',
        black: '#081820',
    },

    shadows: {
        sm: '2px 2px 0 rgba(0,0,0,0.15)',
        md: '4px 4px 0 rgba(0,0,0,0.2)',
        lg: '6px 6px 0 rgba(0,0,0,0.25)',

        primary: {
            md: '4px 4px 0 #183828',
            lg: '6px 6px 0 #183828',
        },

        secondary: {
            md: '4px 4px 0 #556600',
            lg: '6px 6px 0 #556600',
        },

        accent: {
            md: '4px 4px 0 #9a9a9a',
            lg: '6px 6px 0 #9a9a9a',
        },

        focus: '0 0 0 2px rgba(136,192,112,0.4)',

        input: '2px 2px 0 rgba(0,0,0,0.12)',

        surfaceInset: 'inset 0 0 0 1px rgba(255,255,255,0.04)',
    },

    typography: {
        fonts: {
            heading: "'Press Start 2P', monospace",
            body: "'Inter', sans-serif",
        },

        sizes: {
            xs: '12px',
            sm: '14px',
            md: '16px',
            lg: '20px',
            xl: '28px',
        },

        lineHeights: {
            sm: '1.4',
            md: '1.6',
            lg: '1.8',
        },

        weights: {
            regular: 400,
            medium: 500,
            bold: 700,
        }
    },

    transitions: {
        fast: '0.08s ease',
        normal: '0.16s ease',
    },

    surfaces: {

        base: '#102820',

        elevated: '#183828',

        overlay: '#224838',

        pixelTexture: `
      linear-gradient(
      45deg,
      transparent 48%,
      rgba(0,0,0,0.2) 50%,
      transparent 52%
    ),
    linear-gradient(
      -45deg,
      transparent 48%,
      rgba(0,0,0,0.2) 50%,
      transparent 52%
    )
  `,

        pixelTextureSize: '7px 7px',
    }
};

export type MosaicTheme = typeof mosaicTheme;