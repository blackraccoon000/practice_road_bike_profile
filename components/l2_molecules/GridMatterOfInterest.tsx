import MatterOfInterest, {
  MatterOfInterestProps,
} from "../l1_atoms/MatterOfInterest";

type GridMatterOfInterestProps = {
  matterOfInterestPropsAry: MatterOfInterestProps[];
};

type GridMatterOfInterestType = (
  props: GridMatterOfInterestProps
) => JSX.Element;

const GridMatterOfInterest: GridMatterOfInterestType = (props) => {
  const {matterOfInterestPropsAry} = props;
  const aryNum =
    matterOfInterestPropsAry.length < 3 ? matterOfInterestPropsAry.length : 3;
  return (
    <div className={`grid grid-cols-1 md:grid-cols-${aryNum}`}>
      {matterOfInterestPropsAry.map((matterOfInterestProps, index) => {
        const {imageSetWH, title, message} = matterOfInterestProps;
        return (
          <div
            className="flex flex-col mx-5 mb-5 md:mb-0"
            key={`matter_of_interest_key_${index}`}
          >
            <MatterOfInterest
              imageSetWH={imageSetWH}
              title={title}
              message={message}
            />
          </div>
        );
      })}
    </div>
  );
};

export default GridMatterOfInterest;
