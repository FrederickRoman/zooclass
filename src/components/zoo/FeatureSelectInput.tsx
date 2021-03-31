import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      display: "block",
      marginTop: theme.spacing(2),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  })
);

interface IFeatureSelectInputProps {
  label: string;
  values: number[];
  defaultValue: number;
  texts: string[];
  id: string;
}

function FeatureSelectInput(props: IFeatureSelectInputProps): JSX.Element {
  const { label, values, defaultValue, texts, id } = props;
  const classes = useStyles();
  const [selection, setSelection] = useState<number>(defaultValue);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelection(event.target.value as number);
  };

  const MenuItems: JSX.Element[] = values.map(
    (v: number, i: number): JSX.Element => (
      <MenuItem value={v} key={i}>
        {texts[i]}
      </MenuItem>
    )
  );

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id={id}>{label}</InputLabel>
        <Select labelId={id} id={id} value={selection} onChange={handleChange}>
          {MenuItems}
        </Select>
      </FormControl>
    </div>
  );
}

export default FeatureSelectInput;
