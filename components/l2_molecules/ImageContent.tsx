import Subtitle, {SubtitleLink} from "../l1_atoms/Subtitle";
import SelfIntroduction, {ImageSet} from "../l1_atoms/SelfIntroduction";

type ImageContentProps = {
  subtitleLink: SubtitleLink;
  imageSet: ImageSet;
  label: string;
  message: string;
};

type ImageContentType = (props: ImageContentProps) => JSX.Element;

const ImageContent: ImageContentType = (props) => {
  const {subtitleLink, imageSet, label, message} = props;
  const {subtitle, link} = subtitleLink;
  return (
    <>
      <Subtitle subtitle={subtitle} link={link} />
      <div className="m-5 w-3/5 flex flex-col md:flex-row">
        <SelfIntroduction imageSet={imageSet} label={label} message={message} />
      </div>
    </>
  );
};

export default ImageContent;
