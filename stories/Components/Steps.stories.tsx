import { Steps } from '@/components'
import type { Meta, StoryObj } from '@storybook/react'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Steps> = {
  title: 'Components/Steps',
  component: Steps,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Steps>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Examp: Story = {
  args: {
    steps: [
      {
        status: 'done',
        title: 'Your details',
        description: 'Please provide your name and email',
      },
      {
        status: 'inprogress',
        title: 'Your details',
        description: 'Please provide your name and email',
      },
      {
        status: 'incomplete',
        title: 'Your details',
        description: 'Please provide your name and email',
      },
    ],
    isMobile: false,
  },
}
