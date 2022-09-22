import { Container } from "@mui/system";
import TheNavbar from "./components/layouts/TheNabar";
import React from "react";
import TheSidebar from "./components/layouts/TheSideBar";
import TheContent from "./components/layouts/TheContent";

export default function App() {
  const [open, setOpen] = React.useState(true);

  const openSidebar = () => {
    setOpen(!open);
  };

  return (
    <Container
      maxWidth="xl"
    
      sx={{ display: "flex", flexDirection: "column",height:'100vh' }}
      disableGutters
    >
      <TheNavbar isOpenSidebar={open} handlerOpenSidebar={openSidebar} />

      <Container maxWidth="xl" sx={{ display: "flex" ,height:'inherit'}} disableGutters>
        <TheSidebar handlerCloseSidebar={openSidebar} isOpen={open} />
        <TheContent />
      </Container>
    </Container>
  );
}
