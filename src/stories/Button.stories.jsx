import React from 'react';

import Button from '../components/Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  type: 'primary',
  children: 'Click me!',
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'secondary',
  children: 'Click me!',
};

export const cta = Template.bind({});
cta.args = {
  type: 'cta',
  children: 'Click me!',
};

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   children: 'Button',
// };
