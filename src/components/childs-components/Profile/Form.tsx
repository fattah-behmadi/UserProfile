import UiInput from "components/base/UiInput";
import { Box, Grid } from "@mui/material";
import { useState } from "react";
import UiButton from "components/base/UiButton";

interface IUser {
  name: string;
  lastName: string;
  birdDay?: Date;
}
export default function Form() {
  const [user, setUser] = useState<IUser>({
    name: "",
    lastName: "",
    birdDay: undefined,
  });

  const submit = () => {};

  return (
    <Box sx={{}}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <UiInput
            handlerChange={(value) =>
              setUser((user) => ({ ...user, name: value }))
            }
            value={user?.name}
            label="نام"
            placeholder="نام"
          />
        </Grid>
        <Grid item xs={6}>
          <UiInput
            handlerChange={(value) =>
              setUser((user) => ({ ...user, lastName: value }))
            }
            value={user?.lastName}
            label="فامیل"
            placeholder="فامیل"
          />
        </Grid>

        <Grid item xs={10}></Grid>
        <Grid item xs={10}>
          <UiButton handleClick={submit} type="contained">
            ثبت کاربر{" "}
          </UiButton>
        </Grid>
      </Grid>
    </Box>
  );
}
