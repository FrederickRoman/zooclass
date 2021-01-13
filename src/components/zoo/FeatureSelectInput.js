import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

function FeatureSelectInput({ label, values, defaultValue, texts, id }) {
  const classes = useStyles();
  const [selection, setSelection] = React.useState(defaultValue);
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setSelection(event.target.value);
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
