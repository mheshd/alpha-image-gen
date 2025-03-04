import React, { useCallback } from "react";
import { saveAsJpeg, saveAsPng } from "save-html-as-image";
import Button from "./Button";

const ImageDownloder = () => {
  const btnStyles =
    "flex gap-2 font-bold border-gray-500 border-2 rounded-md items-center justify-center py-2 px-3";
  const downloadImage = useCallback((format) => {
    const image = document.getElementById("alpacaImg");
    if (!image) return;
    if (format === "jpg") {
      saveAsJpeg(image, { filename: "my_Alpaca", printDate: true });
    } else {
      saveAsPng(image, { filename: "my_Alpaca", printDate: true });
    }
  }, []);
  return (
    <>
      <Button
        styles={btnStyles}
        btnText="Download Image as JPG"
        handleClick={() => downloadImage("jpg")}
      />
      <Button
        styles={btnStyles}
        btnText="Download Image as PNG"
        handleClick={() => downloadImage("png")}
      />
    </>
  );
};

export default ImageDownloder;
