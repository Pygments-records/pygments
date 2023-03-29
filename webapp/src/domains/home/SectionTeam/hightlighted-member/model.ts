import type { AnimationProps, HoverHandlers } from "framer-motion";

export type MemberCard = {
  username: string;
  imgUrl: string;
  description: string;
  role: string;
  initial: Omit<AnimationProps["initial"], "undefined">;
  animate: Omit<HoverHandlers["whileHover"], "undefined">;
  color: string;
};
