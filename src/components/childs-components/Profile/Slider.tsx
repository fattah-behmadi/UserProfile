import React from "react";
import BaseCarousel from "./BaseCarousel";
import ItemSlider from "./ItemSlider";

export default function Slider() {
  return (
    <>
      <BaseCarousel>
        <ItemSlider>
          <p>slide 1</p>
        </ItemSlider>
        <ItemSlider>
          <p>slide 2</p>
        </ItemSlider>
      </BaseCarousel>
    </>
  );
}
