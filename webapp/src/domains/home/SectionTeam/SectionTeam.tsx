import React, { useState } from "react";
import cx from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import { HighlightedMember } from "./hightlighted-member/HighlightedMember";
import type { MemberCard } from "./hightlighted-member/model";
import { Heading } from "@ui-kit/components/heading/Heading";
import { ExternalImage } from "@core/common/components/external-image/ExternalImage";
import { team } from "./data/members";

export const SectionTeam = () => {
  const [selectedMember, setSelectedMember] = useState<MemberCard | undefined>();
  return (
    <div className="px-16 pb-72">
      <div className="relative flex flex-wrap justify-center gap-32">
        {team.map((member) => {
          const { username } = member;
          return (
            <TeamCard
              key={member.username}
              member={member}
              className={cx({
                ["blur-sm opacity-50"]:
                  selectedMember !== undefined && selectedMember.username !== username,
              })}
              onSelect={(member) => setSelectedMember(member)}
            />
          );
        })}
        <AnimatePresence>
          {selectedMember !== undefined && (
            <HighlightedMember
              key={selectedMember.username}
              member={selectedMember}
              onClose={() => setSelectedMember(undefined)}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

type TeamCardProps = {
  member: MemberCard;
  className?: string;
  onSelect: (_: MemberCard) => void;
};

const pictureVariants = {
  initial: { scale: 1, filter: "grayscale(1)" },
  animate: { scale: 1.1, filter: "grayscale(0)", transition: { duration: 0.4 } },
};

const TeamCard = ({
  member,
  member: { username, imgUrl, color, initial, animate },
  className,
  onSelect,
}: TeamCardProps) => {
  const [pictureVariantName, setPictureVariantName] = useState<"initial" | "animate">("initial");

  return (
    <motion.div
      layoutId={username}
      initial={initial}
      whileHover={{
        ...animate,
        transition: {
          duration: 0.3,
          type: "spring",
          stiffness: 80,
          damping: 8,
          bounce: 0.2,
        },
      }}
      onClick={() => onSelect(member)}
      className={cx("relative h-[300px] w-[300px] cursor-pointer", className)}
    >
      <div
        className="z-10 relative h-full w-full overflow-hidden"
        onMouseLeave={() => setPictureVariantName("initial")}
        onMouseEnter={() => setPictureVariantName("animate")}
      >
        <motion.div
          className="h-full w-full"
          variants={pictureVariants}
          animate={pictureVariantName}
        >
          <ExternalImage src={imgUrl} layout="fill" objectFit="cover" alt={`picture`} />
        </motion.div>
        <div
          className="p-4 absolute bottom-0 left-0 right-0"
          style={{ background: "linear-gradient(0deg, black, transparent)" }}
        >
          <Heading as="p" size={6} extraBold={false} className="text-white">
            {username}
          </Heading>
        </div>
      </div>
      <div
        className={`absolute border-8 border-${color} top-[10px] left-[10px] bottom-[-10px] right-[-10px]`}
      />
    </motion.div>
  );
};
