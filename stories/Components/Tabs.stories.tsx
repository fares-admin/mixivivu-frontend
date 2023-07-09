import { Tabs, TabItem } from '@/components'
import type { Meta, StoryObj } from '@storybook/react'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof TabItem> = {
  title: 'Components/Tabs',
  component: TabItem,
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: ['sm', 'md'],
      control: { type: 'radio' },
    },
    badge: {
      options: [false, 1, 2, 3],
      control: { type: 'select' },
    },
  },
}

export default meta
type Story = StoryObj<typeof TabItem>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const TabItemExam: Story = {
  args: {
    label: 'My details',
    fullWidth: false,
  },
}

export const TabsExam: StoryObj<typeof Tabs> = {
  render: () => (
    <Tabs
      size="sm"
      tabs={[
        {
          label: 'My details',
          badge: 2,
        },
        { label: 'Profile' },
        { label: 'Password' },
      ]}
    />
  ),
}

export const TabsMobileExam: StoryObj<typeof Tabs> = {
  render: () => (
    <Tabs
      size="sm"
      isMobile
      tabs={[
        {
          label: 'My details',
          badge: 2,
        },
        { label: 'Profile' },
        { label: 'Password' },
      ]}
    />
  ),
}
