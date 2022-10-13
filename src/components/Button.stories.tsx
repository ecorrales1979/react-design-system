import { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonProps } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Create account',
  },
  argTypes: {}
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {}

export const fullWidth: StoryObj<ButtonProps> = {
  args: {
    fullWidth: true
  }
}

export const CustomComponent: StoryObj<ButtonProps> = {
  args: {
    asChild: true,
    children: <a>Testing button as link</a>
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    },
    asChild: {
      table: {
        disable: true
      }
    }
  }
}