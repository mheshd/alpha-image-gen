import React, { useContext } from "react";
import { Assets } from "../assets/Assets";
import AssetsContext from "../context/AssestContext";
import Button from "./Button";

// Create arrays to store the assets' values
const background = [...Object.values(Assets.background)];
const ears = [...Object.values(Assets.ears)];
const eyes = [...Object.values(Assets.eyes)];
const hair = [...Object.values(Assets.hair)];
const accessories = [...Object.values(Assets.accessories)];
const leg = [...Object.values(Assets.leg)];
const mouth = [...Object.values(Assets.mouth)];
const neck = [...Object.values(Assets.neck)];

// Create button component that has a randomizer logic

const ImageRandomizer = () => {
  const { styles, setStyles } = useContext(AssetsContext);
  const btnStyles =
    "flex gap-2 items-center justify-center px-3 font-bold bg-white py-2 border-gray-500 border-2 rounded-md";

  const setRandomIndex = (array) => {
    return Math.floor(Math.random() * array.length);
  };

  const getRandomStyles = () => {
    setStyles({
      ...styles,
      background: background[setRandomIndex(background)],
      ears: ears[setRandomIndex(ears)],
      eyes: eyes[setRandomIndex(eyes)],
      hair: hair[setRandomIndex(hair)],
      accessories: accessories[setRandomIndex(accessories)],
      leg: leg[setRandomIndex(leg)],
      mouth: mouth[setRandomIndex(mouth)],
      neck: neck[setRandomIndex(neck)],
    });
  };

  return (
    <Button
      styles={btnStyles}
      btnText="Generate Random Image"
      handleClick={getRandomStyles}
    />
  );
};

export default ImageRandomizer;
