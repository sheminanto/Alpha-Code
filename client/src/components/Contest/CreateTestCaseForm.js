import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { useRef, useState } from "react";

import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";

const CreateTestCaseForm = (props) => {
  const tc_visibilties = [
    {
      value: "Hidden",
      label: "Hidden",
    },
    {
      value: "Visible",
      label: "Visible",
    },
  ];

  const tc_types = [
    {
      value: "Static",
      label: "Static",
    },
    {
      value: "Dynamic",
      label: "Dynamic",
    },
  ];

  const [tc_type, setTCtype] = useState("Static");
  const [tc_visibilty, setTCvisibilty] = useState("Hidden");

  function changeTCtype(event) {
    setTCtype(event.target.value);
  }

  function changeTCvisibilty(event) {
    setTCvisibilty(event.target.value);
  }

  function delTC(){
    props.delTChandler(props.index);
  }

  return (
    <Grid
      container
      justify="space-between"
      rowSpacing={1}
      spacing={1}
      sx={{ mt: 1 }}
    >
      <Grid item xs={2} md={3}>
        <TextField
          disabled
          id="outlined-disabled"
          label="Test Case number"
          defaultValue="0"
          value={props.index}
        />
      </Grid>

      <Grid item xs={12} md={2}>
        <Button variant="outlined" color="error" onClick={delTC}>
          -
        </Button>
      </Grid>

      <Grid item xs={12} md={8}>
        <TextField
          fullWidth
          id="standard-basic"
          label="Input"
          variant="outlined"
          multiline
          // inputProps={{ ref: contestNameRef }}
        />
      </Grid>

      <Grid item xs={12} md={2}>
        <TextField
          id="standard-number"
          label="Score"
          type="number"
          variant="outlined"
          // inputProps={{ ref: durationRef }}
        />
      </Grid>

      <Grid item xs={12} md={2}>
        <TextField
          id="tc_visibilty"
          select
          label="Visibilty"
          value={tc_visibilty}
          onChange={changeTCvisibilty}
        >
          {tc_visibilties.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Grid>

      

      <Grid item xs={12} md={10}>
        <TextField
          fullWidth
          id="standard-basic"
          label="Output"
          variant="outlined"
          multiline
          // inputProps={{ ref: contestNameRef }}
        />
      </Grid>

      <Grid item xs={12} md={2}>
        <TextField
          id="tc_type"
          select
          label="Testcase Type"
          value={tc_type}
          onChange={changeTCtype}
        >
          {tc_types.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Grid>

    </Grid>
  );
};

export default CreateTestCaseForm;
