import Image from "next/image";

export type ImageSet = {
  imageSrc: string;
  imageAlt: string;
  size: number;
};

type SelfIntroductionProps = {
  imageSet: ImageSet;
  label: string;
  message: string;
};

type SelfIntroductionType = (props: SelfIntroductionProps) => JSX.Element;

const SelfIntroduction: SelfIntroductionType = (props) => {
  const {imageSet, label, message} = props;
  const {imageSrc, imageAlt, size} = imageSet;
  const uppercaseLabel = label.toUpperCase();
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={size}
          height={size}
          className="flex-auto w-[6rem] rounded-full"
        />
      </div>
      <div className="flex-auto w-full md:w-3/5 mt-5 md:mt-0 md:ml-5">
        <h4 className="text-xl text-bold">{uppercaseLabel}</h4>
        <p>{message}</p>
      </div>
    </>
  );
};

export default SelfIntroduction;
