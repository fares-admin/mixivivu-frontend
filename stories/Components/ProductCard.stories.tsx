import { ProductCard } from '@/components'
import type { Meta, StoryObj } from '@storybook/react'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof ProductCard> = {
  title: 'Components/ProductCard',
  component: ProductCard,
  tags: ['autodocs'],
  argTypes: {
    type: {
      options: ['grid', 'list'],
      control: {
        type: 'radio',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof ProductCard>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Examp: Story = {
  args: {
    url: '/card-image.png',
    rating: 5,
    ratingCount: 999,
    location: 'Vịnh Lan Hạ',
    title: 'Du Thuyền Stellar of the Seas',
    desciption: 'Hạ thuỷ 2018 - Tàu vỏ kim loại - 22 phòng',
    price: 3350000,
    originalPrice: 5400000,
    tags: ['Du thuyền nổi bật', 'Ưu đãi hè 2022', 'Bể bơi ngoài trời', 'Xe đưa đón'],
  },
}
