import Link from "@mui/material/Link";
import { makeStyles } from "@mui/styles";

interface IProps {
  children: React.ReactNode;
  href: string;
}

function ExtLink(props: IProps): JSX.Element {
  const { href } = props;

  return (
    <Link href={href} target="_blank" rel="noopener" color="#fff">
      {props.children}
    </Link>
  );
}

export default ExtLink;
