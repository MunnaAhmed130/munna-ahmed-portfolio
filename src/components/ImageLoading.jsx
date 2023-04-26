import React, { useEffect, useState } from "react";
import { Blurhash } from "react-blurhash";

const ImageLoading = ({ image }) => {
  const [imageLoading, setImageLoading] = useState(true);
  let src = image.src;

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      // setTimeout(() => {
      //   setImageLoading(false);
      // }, 2000);
      setImageLoading(false);
    };
    img.src = src;
  }, [src]);

  return (
    <>
      {imageLoading && (
        <div className="w-0 h-52">
          <Blurhash
            hash={image.blurHash}
            width={400}
            height={224}
            resolutionX={32}
            resolutionY={32}
            punch={1}
          />
        </div>
      )}
      <img
        className={`${
          imageLoading ? "hidden" : ""
        } project-img w-full  h-52 object-cover object-top overflow-hidden`}
        src={image.src}
        alt={image.blurHash}
      />
    </>
  );
};

export default ImageLoading;
