import Link from "next/link";

type FooterProps = {
  name: string;
};

type FooterType = (props: FooterProps) => JSX.Element;

const Footer: FooterType = (props) => {
  const {name} = props;
  return (
    <div className="flex flex-row justify-center items-center">
      <h2 className="my-3">Copyright &copy; {name}</h2>
    </div>
  );
};

export default Footer;
