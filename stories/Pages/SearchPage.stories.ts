import SearchPage from '@/pages/tim-du-thuyen'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof SearchPage> = {
  title: 'Pages/SearchPage',
  component: SearchPage,
}

export default meta
type Story = StoryObj<typeof SearchPage>

export const HomePage: Story = {}
