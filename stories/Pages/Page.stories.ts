import Dashboard from '@/pages'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Dashboard> = {
  title: 'Pages/Dashboard',
  component: Dashboard,
}

export default meta
type Story = StoryObj<typeof Dashboard>

export const HomePage: Story = {}
