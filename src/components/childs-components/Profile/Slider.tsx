import React, { useState, useEffect } from "react";
import BaseCarousel from "./BaseCarousel";
import ItemSlider from "./ItemSlider";
import ImageZoom from "./ImageZoom";

export default function Slider() {
  const [bg, setbg] = useState<string>("");

  useEffect(() => {
    import("../../../assets/img/bg.jpg").then((image) => setbg(image.default));
  }, []);

  return (
    <>
      <BaseCarousel>
        <ItemSlider>
          <ImageZoom imagePath={bg} imgZoom={bg} />
        </ItemSlider>
        <ItemSlider
          sx={{
            display: "grid",
            placeItems: "center",
          }}
        >
          <figure
            style={{
              display: "grid",
              placeItems: "center",
            }}
          >
            <figcaption>موزیک </figcaption>
            <audio
              controls
              src="https://cdns-preview-2.dzcdn.net/stream/c-298a6d9e5299f71f7c8e7d29e7f874ff-5.mp3"
            >
              <a href="https://cdns-preview-2.dzcdn.net/stream/c-298a6d9e5299f71f7c8e7d29e7f874ff-5.mp3">
                Download audio
              </a>
            </audio>
          </figure>
        </ItemSlider>
      </BaseCarousel>
    </>
  );
}
