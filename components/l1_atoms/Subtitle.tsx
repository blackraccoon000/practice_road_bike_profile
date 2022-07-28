export type SubtitleLink = {
  subtitle: string;
  link: string;
  wrapperClassName?: string;
};

type SubTitleType = (props: SubtitleLink) => JSX.Element;

const SubTitle: SubTitleType = (props) => {
  const {subtitle, link, wrapperClassName = "my-5"} = props;
  return (
    <div id={link} className={wrapperClassName}>
      <h3 className="text-4xl text-bold underline underline-offset-8">
        {subtitle}
      </h3>
    </div>
  );
};

export default SubTitle;
