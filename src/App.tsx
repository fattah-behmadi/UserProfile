import { Container } from "@mui/system";
import TheNavbar from "./components/layouts/TheNabar";
import React from "react";
import TheSidebar from "./components/layouts/TheSideBar";
import TheContent from "./components/layouts/TheContent";

export default function App() {
  const [open, setOpen] = React.useState(false);

  const openSidebar = () => {
    setOpen(!open);
  };

  return (
    <Container
      maxWidth="xl"
      sx={{ display: "flex", flexDirection: "column" }}
      disableGutters
    >
      <TheNavbar isOpenSidebar={open} handlerOpenSidebar={openSidebar} />

      <Container maxWidth="xl" sx={{ display: "flex" }} disableGutters>
        <TheSidebar handlerCloseSidebar={openSidebar} isOpen={open} />
        <TheContent />
      </Container>
    </Container>
  );
}
