import Link from "@mui/material/Link";

interface IProps {
  children: React.ReactNode;
  href: string;
}

function ExtLink(props: IProps): JSX.Element {
  const { href, children } = props;
  return (
    <Link href={href} target="_blank" rel="noopener" color="#fff">
      {children}
    </Link>
  );
}

export default ExtLink;
