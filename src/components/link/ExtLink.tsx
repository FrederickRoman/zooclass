import Link from "@material-ui/core/Link";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { ReactNode } from "react";

const useStyles = makeStyles(() =>
  createStyles({
    link: {
      color: "white",
      textDecoration: "none",
    },
  })
);

interface IProps {
  children: ReactNode;
  href: string;
}

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
