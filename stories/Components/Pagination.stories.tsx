import { Pagination } from '@/components'
import type { Meta, StoryObj } from '@storybook/react'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Pagination>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const PaginationExam: Story = {
  args: {
    totalCount: 100,
    currentPage: 1,
    pageSize: 5,
  },
}
