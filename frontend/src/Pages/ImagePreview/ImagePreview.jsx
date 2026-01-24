import { useParams } from "react-router-dom";
import './ImagePreview.css'



const ImagePreview = () => {
  const { image } = useParams();

  return (
    <div className="image-preview">
      <img
        src={decodeURIComponent(image)}
        alt="Preview"/>
    </div>
  );
};

export default ImagePreview;
