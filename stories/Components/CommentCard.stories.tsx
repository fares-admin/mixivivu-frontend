import { CommentCard } from '@/components'
import type { Meta, StoryObj } from '@storybook/react'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof CommentCard> = {
  title: 'Components/CommentCard',
  component: CommentCard,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof CommentCard>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Examp: Story = {
  args: {
    comment: {
      url: '/card-image.png',
      name: 'Nguyễn Anh Tuấn',
      comment:
        'Du thuyền lớn nhất vịnh chứa được tối đa bao nhiêu người? Nếu đoàn có 150 người thì cần mấy du thuyền?',
      date: '22/06/2023',
    },
    replies: [
      {
        url: '/card-image.png',
        name: 'Nguyễn Anh Tuấn',
        comment:
          'Du thuyền lớn nhất vịnh chứa được tối đa bao nhiêu người? Nếu đoàn có 150 người thì cần mấy du thuyền?',
        date: '22/06/2023',
      },
    ],
  },
}
