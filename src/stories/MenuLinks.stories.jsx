import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import MenuLinks from '../components/MenuLinks';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/MenuLinks',
  component: MenuLinks,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Router><MenuLinks {...args} /></Router>;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};

// export const Secondary = Template.bind({});
// Secondary.args = {};
