import { CategoryCard } from '@/components'
import type { Meta, StoryObj } from '@storybook/react'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof CategoryCard> = {
  title: 'Components/CategoryCard',
  component: CategoryCard,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof CategoryCard>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Examp: Story = {
  args: {
    url: '/card-image.png',
    shipCount: 22,
    title: 'Vịnh Hạ Long',
  },
}
