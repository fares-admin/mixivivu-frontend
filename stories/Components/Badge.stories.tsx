import { Badge, ArrowRightIcon, ArrowUpIcon, XMarkIcon } from '@/components'
import type { Meta, StoryObj } from '@storybook/react'

const iconOptions = {
  None: null, // No icon
  ArrowRightIcon: <ArrowRightIcon />,
  ArrowUpIcon: <ArrowUpIcon />,
  XMarkIcon: <XMarkIcon />,
  // ... Add more options as needed
}

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'radio',
      },
    },
    color: {
      options: ['default', 'primary', 'error', 'success', 'infomation', 'warning'],
      control: {
        type: 'select',
      },
    },
    iconLeading: {
      options: iconOptions,
      control: { type: 'select' },
      defaultValue: iconOptions.None,
    },
    iconTrailing: {
      options: iconOptions,
      control: { type: 'select' },
      defaultValue: iconOptions.None,
    },
    iconOnly: {
      options: iconOptions,
      control: { type: 'select' },
      defaultValue: iconOptions.None,
    },
  },
}

export default meta
type Story = StoryObj<typeof Badge>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Examp: Story = {
  args: {
    label: 'Label',
    iconTrailing: iconOptions.ArrowRightIcon,
    color: 'default',
    size: 'sm',
  },
}
