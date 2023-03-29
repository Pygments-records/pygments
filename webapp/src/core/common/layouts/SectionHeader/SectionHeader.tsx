type SectionHeaderProps = {
  className?: string;
  placement?: "left" | "right";
};
export const SectionHeader = ({ className, placement = "left" }: SectionHeaderProps) => {
  return (
    <nav className="bg-gray-800 mt-0 w-full top-0 font-pygments">
      <ul className="flex">
        <li className="flex-1 mr-2 z-50">
          <a
            className="text-3xl text-center block rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-orange font-pygments "
            href="#event"
          >
            EVENTS
          </a>
        </li>
        <li className="flex-1 mr-2 z-50 ">
          <a
            className="text-3xl  text-center block rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4 text-yellow "
            href="#artist"
          >
            ARTISTS
          </a>
        </li>
        <li className="text-3xl text-center flex-1 text-blue z-50">
          <a className="block py-2 px-4 text-gray-400" href="#project">
            PROJECT
          </a>
        </li>
        <li className="text-3xl text-center flex-1 text-purple z-50">
          <a className="block py-2 px-4 text-gray-400" href="#team">
            TEAM
          </a>
        </li>
      </ul>
    </nav>
  );
};
