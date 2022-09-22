import { Container } from "@mui/system";
import TheNavbar from "./components/layouts/TheNabar";
import React from "react";
import TheSidebar from "./components/layouts/TheSideBar";
import TheContent from "./components/layouts/TheContent";
import ResponsiveAppBar from "./components/base/test";

export default function App() {
  const [open, setOpen] = React.useState(false);

  const openSidebar = () => {
    setOpen(!open);
  };

  return (
    <Container maxWidth="lg" sx={{ display: "flex" }}>
      {/* <TheNavbar isOpenSidebar={open} handlerOpenSidebar={openSidebar} />
      <TheSidebar handlerCloseSidebar={openSidebar} isOpen={open} />
      <TheContent /> */}
      <ResponsiveAppBar />
    </Container>
  );
}
