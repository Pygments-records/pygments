import React, { useState } from "react";
import cx from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import { HighlightedMember } from "./hightlighted-member/HighlightedMember";
import type { MemberCard } from "./hightlighted-member/model";
import { Heading } from "@ui-kit/components/heading/Heading";
import { ExternalImage } from "@core/common/components/external-image/ExternalImage";
import { team } from "./data/members";
import {Title} from "@core/common/components/title/Title";
import {useTranslation} from "@core/i18n/useTranslation";
import {homeNamespaces} from "@domains/home/homeNamespaces";
import {Text} from "@ui-kit/components/text/Text";
import {Artist} from "@core/artist/data/ArtistModel";
import type {Staff} from "@core/staff/data/StaffModel";
import {ArtistImage} from "@domains/home/artist-list/ArtistImage";
import {StaffImage} from "@domains/home/SectionTeam/StaffImage";
import styles from "@domains/home/SectionTheProject/SectionTheProject.module.css";

type SectionTeamProps = {
  className?: string;
  staff: Staff[];
};

export const SectionTeam = ({staff, className }: SectionTeamProps) => {
  const { t} = useTranslation(homeNamespaces)
  return (
    <section className={cx("flex flex-col", className)}>
      <Title className="mb-[120px]">{t("home:team-section.title")}</Title>
      <section className="grid grid-flow-col grid-cols-3 px-20 gap-12 h-96">
        {staff.map((staff, index) => (
          <li key={staff._id}>
            <div className={cx("flex-col h-96")}>
              <StaffImage
                url={staff.picture?.url ?? ""}
                index={index}
              />
              <Text className="text-white">{staff.name}</Text>
            </div>
          </li>
        ))}
      </section>
    </section>
  );
};
