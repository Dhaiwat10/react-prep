import React from 'react';
import { Story, Meta } from '@storybook/react';
import 'semantic-ui-css/semantic.min.css';

import { Checkbox, CheckboxProps } from '.';

export default {
  title: 'Example/Checkbox',
  component: Checkbox,
  argTypes: {
    label: { control: 'text' }
  }
} as Meta;

const Template: Story<CheckboxProps> = args => <Checkbox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Option A'
};

// storiesOf('Checkbox', module).add('Default', () => <Checkbox label="Hi" />);
