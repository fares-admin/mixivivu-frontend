import { Alert } from '@/components'
import type { Meta, StoryObj } from '@storybook/react'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    color: {
      options: ['primary', 'gray', 'error', 'warning', 'success'],
      control: {
        type: 'radio',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Alert>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Examp: Story = {
  args: {
    title: 'We’ve just released a new feature',
    color: 'primary',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.',
    isMobile: false,
  },
}
