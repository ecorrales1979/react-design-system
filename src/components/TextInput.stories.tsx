import { Meta, StoryObj } from '@storybook/react';

import { TextInput, TextInputProps } from './TextInput';

export default {
  title: 'Components/TextInput',
  component: TextInput,
  args: {
    placeholder: 'Enter your e-mail'
  },
  argTypes: {}
} as Meta<TextInputProps>

export const Default: StoryObj<TextInputProps> = {}

export const fullWidth: StoryObj<TextInputProps> = {
  args: {
    fullWidth: true
  }
}
