import { Checkbox } from '@/components'
import type { Meta, StoryObj } from '@storybook/react'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    type: {
      options: ['checkbox', 'radio'],
      control: {
        type: 'radio',
      },
    },
    sizeInput: {
      options: ['sm', 'md'],
      control: {
        type: 'radio',
      },
    },
    disabled: {
      type: 'boolean',
      defaultValue: false,
    },
    checkboxOnly: {
      type: 'boolean',
      defaultValue: false,
    },
    checked: {
      type: 'boolean',
      defaultValue: false,
    },
  },
}

export default meta
type Story = StoryObj<typeof Checkbox>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const checkbox: Story = {
  args: {
    type: 'checkbox',
    text: 'Remember me',
    supportText: 'Save my login details for next time.',
    sizeInput: 'sm',
  },
}

export const radio: Story = {
  args: {
    type: 'radio',
    text: 'Remember me',
    supportText: 'Save my login details for next time.',
    sizeInput: 'sm',
  },
}
