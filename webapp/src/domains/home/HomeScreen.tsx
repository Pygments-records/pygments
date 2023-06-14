import { PageLayout } from "@core/common/layouts/PageLayout/PageLayout";
import { SectionTitle } from "@ui-kit/components/section_title/SectionTitle";
import { SectionArtist } from "@domains/home/SectionArtists/SectionArtists";
import { SectionTheProject } from "@domains/home/SectionTheProject/SectionTheProject";
import Image from "next/image";
import { SectionTeam } from "./SectionTeam/SectionTeam";
import { SectionVideo } from "./SectionVideo/SectionVideo";
import styles from "./SectionHero.module.css";
import cx from "classnames";

export const HomeScreen = () => {
  return (
    <PageLayout className="bg-darkPurple">
      <div className="h-[150vh] w-[100vw] absolute inset-0">
        <Image alt="pygments hero background" layout="fill" objectFit="cover" src={"/waves.svg"} />
      </div>
      <div className={cx(styles.heroContainer)}>
        <div className="h-screen flex flex-col">
          <div className="flex-1 flex items-center justify-center">
            <div className="overflow-hidden">
              <div className="relative w-60 h-60 md:w-96 md:h-96">
                <Image layout="fill" src={"/PygmentsLoogo.svg"} alt={"logo pygments"} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <SectionTitle
        id="news"
        placement="left"
        title={"News"}
        className={"justify-start mt-52 md:mt-0 mb-32 md:mb-30"}
        color={"bg-orange"}
      />
      <SectionVideo className="md:mt-32 mb-32 md:mb-30 bg-transp z-0" />
      <SectionTitle
        id="artist"
        placement="right"
        title={"artists"}
        className={"justify-start mt-52 md:mt-0 mb-32 md:mb-30"}
        color={"bg-yellow"}
      />
      <SectionArtist
        bgColor={"bg-purple"}
        tileColor={"bg-blue"}
        title={"Kojo Kara"}
        className={"mb-44 md:mb-30"}
        date={"21.06.2022"}
        image_path={"/kojo_cover.jpg"}
        image_alt={"cover kojo kara"}
      />
      <SectionArtist
        placement="right"
        bgColor={"bg-blue"}
        tileColor={"bg-yellow"}
        title={"Artifak"}
        className={"mb-44 md:mb-60"}
        date={"21.06.2022"}
        image_path={"/Louis_pp.png"}
        image_alt={"Artifak cover"}
      />
      <SectionArtist
        bgColor={"bg-yellow"}
        tileColor={"bg-purple"}
        title={"Kelbail"}
        className={"mb-44 md:mb-60"}
        date={"06.06.2022"}
        image_path={"/kelbail_pp.png"}
        image_alt={"kelbail_pp cover"}
      />
      <SectionArtist
        placement="right"
        bgColor={"bg-orange"}
        tileColor={"bg-yellow"}
        title={"In-Tan"}
        className={"mb-44 md:mb-60"}
        date={"21.06.2022"}
        image_path={"/In-Tan_pp.png"}
        image_alt={"In-Tan_profile_picture"}
      />
      <SectionTitle
        id="project"
        placement="left"
        title={"Project"}
        className={"justify-start mb-32 md:mb-30"}
        color={"bg-blue"}
      />
      <SectionTheProject className={"mb-44 md:mb-60"} />
      <SectionTitle
        id="team"
        placement="right"
        title={"team"}
        className={"justify-start mb-24 md:mb-30"}
        color={"bg-purple"}
      />
      <SectionTeam />
    </PageLayout>
  );
};
