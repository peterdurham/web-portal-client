import React from 'react';

import Chip from '../components/Chip';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Example/Chip',
    component: Chip,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    //   argTypes: {
    //     backgroundColor: { control: 'color' },
    //   },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Chip {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    type: 'success',
    text: 'Success',
};

export const Secondary = Template.bind({});
Secondary.args = {
    type: 'fail',
    text: 'Failed',
};

export const Warn = Template.bind({});
Warn.args = {
    type: 'warn',
    text: 'Warning',
};

