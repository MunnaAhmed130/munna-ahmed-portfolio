import React, { useEffect, useState } from "react";
import { Blurhash } from "react-blurhash";

const ImageLoading = ({ image }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  let src = image.src;

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };
    img.src = src;
    // console.log(img);
  }, [src]);
  console.log(image.blurHash);
  return (
    <>
      <div className={`${imageLoaded ? "hidden" : ""}`}>
        <Blurhash
          hash={image.blurHash}
          className="w-full"
          width={350}
          height={224}
          resolutionX={32}
          resolutionY={32}
          punch={1}
        ></Blurhash>
      </div>
      {/* )} */}
      {/* {imageLoaded && ( */}
      <img
        //   className="project-img  w-full  h-56 object-cover object-top  overflow-hidden "
        //   loading="lazy"
        className={`${
          !imageLoaded ? "hidden" : ""
        } project-img  w-full  h-56 object-cover object-top  overflow-hidden relative z-[5]before:content-none before:bg-black before:z-10 before:w-full before:h-auto before:inset-0`}
        src={image.src}
        alt={image.blurHash}
      />
      {/* )} */}
      {/* <Blurhash
        hash={image.blurHash}
        //   className="object-cover overflow-hidden"
        width={380}
        height={224}
        resolutionX={32}
        resolutionY={32}
        punch={1}
      ></Blurhash> */}
    </>
  );
};

export default ImageLoading;
