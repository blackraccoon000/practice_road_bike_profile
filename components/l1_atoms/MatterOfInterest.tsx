import Image from "next/image";

export type ImageSetWH = {
  imageSrc: string;
  imageAlt: string;
  width: number;
  height: number;
};

export type MatterOfInterestProps = {
  imageSetWH: ImageSetWH;
  title: string;
  message: string;
};

type MatterOfInterestType = (props: MatterOfInterestProps) => JSX.Element;

const MatterOfInterest: MatterOfInterestType = (props) => {
  const {imageSetWH, title, message} = props;
  const {imageSrc, imageAlt, width, height} = imageSetWH;
  return (
    <>
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={width}
        height={height}
        // className="flex-auto"
      />
      <h4 className="text-center text-md text-bold mt-2">{title}</h4>
      <p className="text-center text-md my-1">{message}</p>
    </>
  );
};

export default MatterOfInterest;
