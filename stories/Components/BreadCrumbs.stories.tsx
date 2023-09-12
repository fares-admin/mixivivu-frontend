import { BreadCrumbItem, BreadCrumbs, HomeLineIcon } from '@/components'
import type { Meta, StoryObj } from '@storybook/react'

const iconOptions = {
  None: null, // No icon
  HomeLineIcon: <HomeLineIcon />,
  // ... Add more options as needed
}

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction

const meta: Meta<typeof BreadCrumbItem> = {
  title: 'Components/BreadCrumbs',
  component: BreadCrumbItem,
  tags: ['autodocs'],
  args: {
    children: 'BreadCrumb',
  },
  argTypes: {
    selected: {
      type: 'boolean',
      defaultValue: false,
    },
    disabled: {
      type: 'boolean',
    },
    icon: {
      options: iconOptions,
      control: { type: 'select' },
      defaultValue: iconOptions.None,
    },
  },
}

export default meta
type Story = StoryObj<typeof BreadCrumbItem>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const BreadcrumbItem: Story = {
  args: {
    children: 'BreadCrumb Item',
  },
}

export const Breadcrumbs: StoryObj<typeof BreadCrumbs> = {
  render: () => <BreadCrumbs breadcrumbs={[{ label: 'Setting' }, { label: 'Teams' }]} />,
}
