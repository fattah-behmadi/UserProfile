import React from "react";
import Carousel from "react-material-ui-carousel";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

export default function BaseCarousel({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Carousel
      next={(nex, active) => console.log("Next: ", nex, "Active : ", active)}
      prev={(prev, active) => console.log("Prev: ", prev, "Acitve : ", active)}
      autoPlay={false}
      animation="slide"
      duration={500}
      indicators={true}
      navButtonsAlwaysInvisible={false}
      navButtonsAlwaysVisible={true}
      cycleNavigation={true}
      NextIcon={<BiChevronRight />}
      PrevIcon={<BiChevronLeft />}
      fullHeightHover={true}
      navButtonsProps={{
        style: {},
      }}
      navButtonsWrapperProps={{
        style: {},
      }}
    >
      {children}
    </Carousel>
  );
}
