import React from "react";
import Link from "next/link";
import {SubtitleLink} from "../l1_atoms/Subtitle";

type HeaderProps = {title: string; subtitleLinks: SubtitleLink[]};
type HeaderComponent = (props: HeaderProps) => JSX.Element;

// React.FC<HeaderProps>
const Header: HeaderComponent = (props) => {
  const {title, subtitleLinks} = props;
  return (
    <div className="flex flex-row justify-between items-center m-auto my-3 w-4/5">
      <h1 className="text-2xl font-bold text-white p-2 bg-black w-[7rem] text-center">
        {title}
      </h1>
      <div className="flex flex-column">
        {subtitleLinks.map((subtitleLink, index) => {
          const {subtitle, link} = subtitleLink;
          return (
            <div key={`subtitle_${index}`} className="m-3">
              <Link className="p-2 text-sm font-light" href={`#${link}`}>
                <a>{subtitle}</a>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
