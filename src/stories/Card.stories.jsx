import React from 'react';

import Card from '../components/Card';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Card',
  component: Card,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Card {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: 'Card',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Card',
};

export const Large = Template.bind({});
Large.args = {
  children: 'Card',
};

export const Small = Template.bind({});
Small.args = {
  children: 'Card',
};
