import type { Meta, StoryObj } from '@storybook/react'
import { CirCleQuyestionIcon, Input, MailIcon } from '@/components'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Input>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const EmptyIcon: Story = {
  args: {
    label: 'Email',
    placeHolder: 'linh.nguyen@zestif.com',
    hintText: 'This is a hint text to help user.',
  },
}

export const Icon: Story = {
  render: () => (
    <Input
      label="Email"
      placeHolder="linh.nguyen@zestif.com"
      hintText="This is a hint text to help user."
      iconSwap={<MailIcon fillColor="" />}
      supportIcon={<CirCleQuyestionIcon fillColor="red" />}
    />
  ),
}

export const IconDestructive: Story = {
  render: () => (
    <Input
      label="Email"
      placeHolder="linh.nguyen@zestif.com"
      hintText="This is a hint text to help user."
      iconSwap={<MailIcon fillColor="" />}
      supportIcon={<CirCleQuyestionIcon fillColor="red" />}
      destructive={true}
    />
  ),
}
