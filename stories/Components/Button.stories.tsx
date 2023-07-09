import { Button, GithubIcon, FacebookIcon, SocialIcon1, SocialIcon2 } from '@/components'
import type { Meta, StoryObj } from '@storybook/react'

const iconOptions = {
  None: null, // No icon
  GithubIcon: <GithubIcon />,
  FacebookIcon: <FacebookIcon />,
  SocialIcon1: <SocialIcon1 />,
  SocialIcon2: <SocialIcon2 />,
  // ... Add more options as needed
}
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    label: {
      type: 'string',
      defaultValue: 'Button',
      description: 'Label of button',
    },
    destructive: {
      type: 'boolean',
      defaultValue: false,
    },
    disable: {
      type: 'boolean',
      defaultValue: false,
    },
    size: {
      options: ['normal', 'sm'],
      control: { type: 'radio' },
    },
    typeStyle: {
      options: ['color', 'outline', 'outline-dark', 'link-color'],
      control: { type: 'radio' },
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
    onClick: {
      type: 'function',
    },
  },
}

export default meta
type Story = StoryObj<typeof Button>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Examp: Story = {
  args: {
    label: 'Button',
  },
}

export const sm: Story = {
  args: {
    size: 'sm',
    label: 'Button',
  },
}
