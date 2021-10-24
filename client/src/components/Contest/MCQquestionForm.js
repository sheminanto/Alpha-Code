import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";

import { useRef, useState, useEffect } from "react";

const MCQquestionForm = (props) => {
  const [mcq_correct_option, setMCQcorrect] = useState(
    props.mcqOption.correct_option
  );

  useEffect(() => {
    updateOptionValue();
  }, [mcq_correct_option]);

  const option = useRef();
  const correct_wrong = useRef();

  function delOption() {
    props.delOptionHandler(props.index);
  }

  function changeCorrectWrong(event) {
    setMCQcorrect(event.target.value);
  }

  function updateOptionValue() {
    props.mcqOption.option_text = option.current.value;
    props.mcqOption.correct_option = correct_wrong.current.value;
    // console.log(props.mcqOption);
  }

  return (
    <Grid
      container
      justify="space-between"
      rowSpacing={1}
      spacing={2}
      sx={{ mt: 1 }}
    >

      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          // id="standard-basic"
          label="Option"
          variant="outlined"
          multiline
          defaultValue={props.mcqOption.option_text}
          inputProps={{ ref: option }}
          onChange={updateOptionValue}
        >
          {props.mcqOption.option_text}
        </TextField>
      </Grid>

      <Grid item>
        <Select
          id="demo-simple-select"
          value={mcq_correct_option}
          label="✔/x"
          onChange={changeCorrectWrong}
          inputProps={{ ref: correct_wrong }}
        >
          <MenuItem value={"Wrong"}>Wrong</MenuItem>

          <MenuItem value={"Correct"}>Correct</MenuItem>
        </Select>
      </Grid>

      <Grid item>
        <Button variant="outlined" color="error" onClick={delOption}>
          -
        </Button>
      </Grid>
    </Grid>
  );
};

export default MCQquestionForm;
