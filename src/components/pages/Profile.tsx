import {  Grid } from "@mui/material";
import Form from "../childs-components/Profile/Form";
import Slider from "../childs-components/Profile/Slider";

export default function Profile() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Form />
      </Grid>
      <Grid item xs={6}>
        <Slider />
      </Grid>
    </Grid>
  );
}
