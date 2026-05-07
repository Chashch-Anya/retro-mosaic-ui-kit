export const mosaicTheme = {
    spacing: {
        1: '8px',
        2: '16px',
        3: '24px',
        4: '32px',
    },

    borderRadius: {
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

    shadow: '4px 4px 0px 0px #0f1f00',
};

export type MosaicTheme = typeof mosaicTheme;