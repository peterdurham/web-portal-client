import React from 'react';

import TextField from '../components/TextField';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Example/TextField',
    component: TextField,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    //   argTypes: {
    //     backgroundColor: { control: 'color' },
    //   },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <div style={{ width: '420px', margin: '0 auto' }}>
    <TextField {...args} />
</div>;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    placeholder: "enter text here..."
};

export const Secondary = Template.bind({});
Secondary.args = {
    value: 'Hey look, it worked',
};

