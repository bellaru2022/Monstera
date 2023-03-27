import { within, userEvent } from '@storybook/testing-library';

import { HomePage } from './Home';

export default {
  title: 'Page/HomePage',
  component: HomePage,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
    layout: 'fullscreen',
  },
};
// More on interaction testing: https://storybook.js.org/docs/7.0/react/writing-tests/interaction-testing
export const HomePageTemplate = {};
