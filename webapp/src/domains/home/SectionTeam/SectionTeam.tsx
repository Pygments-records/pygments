import React from "react";
import cx from "classnames";
import { Title } from "@core/common/components/title/Title";
import { useTranslation } from "@core/i18n/useTranslation";
import { homeNamespaces } from "@domains/home/homeNamespaces";
import { Text } from "@ui-kit/components/text/Text";
import type { Staff } from "@core/staff/data/StaffModel";
import styles from "./SectionTeam.module.css";
import { NextImage } from "@core/common/components/image/Image";

type SectionTeamProps = {
  className?: string;
  staff: Staff[];
};

export const SectionTeam = ({ staff, className }: SectionTeamProps) => {
  const { t } = useTranslation(homeNamespaces);
  return (
    <section className={cx("flex flex-col", className)}>
      <Title className="mb-[120px]">{t("home:team-section.title")}</Title>
      <ul className="grid grid-flow-col px-20 gap-12 overflow-y-auto py-8">
        {staff.map((staff) => (
          <li key={staff._id}>
            <article
              className={cx("flex-col h-[500px] w-[260px] relative rounded-sm overflow-hidden")}
            >
              <NextImage layout="fill" objectFit="cover" src={staff.picture?.url} />
              <footer className={styles["card-description"]}>
                <Text size="xl" className="text-white">
                  {staff.name}
                </Text>
              </footer>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
};
