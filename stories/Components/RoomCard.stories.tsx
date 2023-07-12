import { RoomCard } from '@/components'
import type { Meta, StoryObj } from '@storybook/react'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof RoomCard> = {
  title: 'Components/RoomCard',
  component: RoomCard,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof RoomCard>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Examp: Story = {
  args: {
    url: '/card-image.png',
    title: 'Delta Suite Có Ban Công Riêng Nhìn Ra Biển - 2 Ngày 1 Đêm',
    price: 3350000,
    roomCount: 1,
    area: 32,
    userPerRoom: 2,
  },
}
