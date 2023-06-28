import Dashboard from '@/pages'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Dashboard> = {
  title: 'Pages/Dashboard',
  component: Dashboard,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof Dashboard>

export const LoggedOut: Story = {}
