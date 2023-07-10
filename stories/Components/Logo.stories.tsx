import { Logo } from '@/components'
import type { Meta, StoryObj } from '@storybook/react'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Logo> = {
  title: 'Components/Logo',
  component: Logo,
  tags: ['autodocs'],
  argTypes: {
    type: {
      options: ['black', 'white'],
      control: {
        type: 'radio',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Logo>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Examp: Story = {
  args: {
    type: 'black',
  },
}
