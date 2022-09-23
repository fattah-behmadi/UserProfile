import React, { useState, useEffect } from "react";
import BaseCarousel from "./BaseCarousel";
import ItemSlider from "./ItemSlider";
import ImageZoom from "./ImageZoom";

export default function Slider() {
  const [bg, setbg] = useState<string>('');

  useEffect(() => {
    import("../../../assets/img/bg.jpg").then((image) => setbg(image.default));
  }, []);

  return (
    <>
      <BaseCarousel>
        <ItemSlider>
            <ImageZoom imagePath={bg} imgZoom={bg} />
        </ItemSlider>
        <ItemSlider>
          <p>slide 2</p>
        </ItemSlider>
      </BaseCarousel>
    </>
  );
}
