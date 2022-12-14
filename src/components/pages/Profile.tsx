import {  Grid } from "@mui/material";
import Form from "components/childs-components/Profile/Form";
import Slider from "components/childs-components/Profile/Slider";

export default function Profile() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} xl={6}>
        <Form />
      </Grid>
      <Grid item xs={12} xl={6}>
        <Slider />
      </Grid>
    </Grid>
  );
}
