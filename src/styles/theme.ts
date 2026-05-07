export const mosaicTheme = {
    spacing: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
    },

    radius: {
        none: '0',
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

        white: '#ffffff',
        black: '#081820',
    },

    shadows: {
        sm: '2px 2px 0px #0f1f00',
        md: '4px 4px 0px #0f1f00',
        lg: '6px 6px 0px #0f1f00',
    },

    typography: {
        fontFamily: "'Press Start 2P', monospace",

        sizes: {
            sm: '12px',
            md: '14px',
            lg: '16px',
        },

        lineHeights: {
            sm: '1.2',
            md: '1.4',
            lg: '1.6',
        },
    },

    surfaces: {
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