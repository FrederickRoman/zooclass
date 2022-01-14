import Link from "@mui/material/Link";
import { makeStyles } from "@mui/styles";

interface IProps {
  children: React.ReactNode;
  href: string;
}

const useStyles = makeStyles({
  link: {
    color: "white",
    textDecoration: "none",
  },
});

function ExtLink(props: IProps): JSX.Element {
  const { href } = props;
  const classes = useStyles();
  return (
    <Link href={href} target="_blank" rel="noopener" className={classes.link}>
      {props.children}
    </Link>
  );
}

export default ExtLink;
