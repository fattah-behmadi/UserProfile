import { InnerImageZoom } from "react-inner-image-zoom";
import 'assets/style/image-zoom.css'


const ImageZoom = ({
  imagePath,
  imgZoom,
}: {
  imagePath: string;
  imgZoom: string;
}) => {
  return (
    <InnerImageZoom
      src={imagePath}
      zoomSrc={imgZoom}
      zoomScale={1}
      width={600}
      height={400}
      hasSpacer={false}
      moveType="pan"
      zoomType="click"
    />
  );
};

export default ImageZoom;
