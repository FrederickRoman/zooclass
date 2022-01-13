import Link from "@mui/material/Link";
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
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
