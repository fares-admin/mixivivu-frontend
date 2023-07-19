import { MixiDatePicker } from '@/components'
import type { Meta, StoryObj } from '@storybook/react'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof MixiDatePicker> = {
  title: 'Components/MixiDatePicker',
  component: MixiDatePicker,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof MixiDatePicker>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Examp: Story = {}
