import { QuestionCard } from '@/components'
import type { Meta, StoryObj } from '@storybook/react'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof QuestionCard> = {
  title: 'Components/QuestionCard',
  component: QuestionCard,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof QuestionCard>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Examp: Story = {
  args: {
    question: '1. Du thuyền 5 sao nào là đẹp nhất Vịnh Hạ Long?',
    answer:
      'Trên vịnh Hạ Long hiện có rất nhiều du thuyền từ hạng thấp đến cao, kể cả du thuyền 5 sao trong đó nổi bật nhất là 2 du thuyền President và Paradise Elegance. Nếu du thuyền President được thiết kế đầy sang trọng và hiện đại thì du thuyền Paradise Elegance lại mang phong cách thanh lịch, tao nhã. Cả hai du thuyền đều được trang bị cơ sở vật chất tiện nghi với nhà hàng, quầy bar, spa. Đặc biệt, du thuyền President còn có bể sục Jacuzzi ngoài trời với view nhìn toàn cảnh vịnh. Ngoài ra, đội ngũ nhân viên chuyên nghiệp cũng là một điểm mạnh vượt trội của hai du thuyền này.',
  },
}
