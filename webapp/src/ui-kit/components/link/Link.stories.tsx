import type { Meta, Story } from "@storybook/react";

import { Link, LinkProps } from "./Link";

export default {
  title: "UI Kit/Link",
} as Meta;

const Template: Story<LinkProps> = (args) => <Link {...args} />;

export const Default = Template.bind({});
Default.args = {
  href: "#",
  children: "Link",
};
