import UiInput from "components/base/UiInput";
import { Box, Grid } from "@mui/material";
import { useState } from "react";
import UiButton from "components/base/UiButton";
import UiDatePicker from "components/base/UiDatePicker";
import {IUser} from 'interface/Entity'


export default function Form() {
  const [user, setUser] = useState<IUser>({
    name: "",
    lastName: "",
    birdDay: null,
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

        <Grid item xs={10}>
          <UiDatePicker
            handlerChange={(value) =>
              setUser((user) => ({ ...user, birdDay: value }))
            }
            value={user.birdDay}
          />
        </Grid>
        <Grid item xs={12}>
          <UiButton handleClick={submit} type="contained">
            ثبت کاربر{" "}
          </UiButton>
        </Grid>
      </Grid>
    </Box>
  );
}
