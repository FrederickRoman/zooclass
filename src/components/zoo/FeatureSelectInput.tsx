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

function FeatureSelectInput(props:IFeatureSelectInputProps) {
  const { label, values, defaultValue, texts, id } = props;
  const classes = useStyles();
  const [selection, setSelection] = useState<number>(defaultValue);
  const [open, setOpen] = useState(false);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelection(event.target.value as number);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id={id}>{label}</InputLabel>
        <Select
          labelId={id}
          id={id}
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={selection}
          onChange={handleChange}
        >
          {values.map((v, i) => (
            <MenuItem value={v} key={i}>
              {texts[i]}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default FeatureSelectInput;
