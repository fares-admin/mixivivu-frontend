import { StaticCard } from '@/components'
import type { Meta, StoryObj } from '@storybook/react'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof StaticCard> = {
  title: 'Components/StaticCard',
  component: StaticCard,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof StaticCard>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Examp: Story = {
  args: {
    rate: 4.8,
    rateCount: [52, 14, 0, 0, 0],
  },
}
