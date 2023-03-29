import type { Meta, Story } from "@storybook/react";

import { PrimaryButton, PrimaryButtonProps } from "./PrimaryButton";

export default {
  title: "UI Kit/Buttons",
} as Meta;

const Template: Story<PrimaryButtonProps> = (args) => <PrimaryButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Primary Button",
};
