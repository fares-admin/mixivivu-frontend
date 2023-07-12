import { BlogCard } from '@/components'
import type { Meta, StoryObj } from '@storybook/react'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof BlogCard> = {
  title: 'Components/BlogCard',
  component: BlogCard,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof BlogCard>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Examp: Story = {
  args: {
    url: '/card-image.png',
    title: 'Mách Bạn 3 Bãi Biển Đẹp Nhất Hạ Long Không Thể Bỏ Qua',
    description:
      'Hạ Long - nơi đây được ví như thiên đường nghỉ dưỡng với những hòn đảo kỳ vĩ, hoang...',
    date: '13/01/2023',
  },
}
