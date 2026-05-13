import type { Preview } from '@storybook/react';

import { ThemeProvider } from '../src/styles/ThemeProvider';
import '../src/styles/global.css';

const preview: Preview = {
    decorators: [
        (Story) => (
            <ThemeProvider>
                <Story />
            </ThemeProvider>
        ),
    ],
};

export default preview;