import { RateCard } from '@/components'
import type { Meta, StoryObj } from '@storybook/react'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof RateCard> = {
  title: 'Components/RateCard',
  component: RateCard,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof RateCard>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Examp: Story = {
  args: {
    name: 'Nguyễn Anh Tuấn',
    comment:
      'Tôi đã bị cuốn hút bởi vẻ đẹp kỳ vĩ của các hòn đảo và hang động tại vịnh Hạ Long. Du thuyền sang trọng và dịch vụ tận tâm đã làm cho chuyến đi của tôi trở nên hoàn hảo. Tôi không thể quên những bữa ăn ngon lành trên du thuyền và hoạt động khám phá thú vị như kayak và thăm làng chài truyền thống. Tôi chắc chắn sẽ khuyên bạn bè và gia đình tôi tham gia Tour du lịch Du thuyền Hạ Long.',
    date: '22/06/2023',
  },
}
