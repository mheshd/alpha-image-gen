import React, { useState } from "react";
import { Assets } from "./assets/Assets";
import AssetsContext from "./context/AssestContext";
import AlphaImage from "./Components/AlphaImage";
import ImageRandomizer from "./Components/ImageRandomizer";
import ImageDownloder from "./Components/ImageDownloder";
import Costomization from "./Components/Costomization";

const App = () => {
  const initialStyles = {
    background: Assets.background.default,
    ears: Assets.ears.default,
    eyes: Assets.eyes.default,
    hair: Assets.hair.default,
    accessories: Assets.accessories.default,
    leg: Assets.leg.default,
    mouth: Assets.mouth.default,
    neck: Assets.neck.default,
    nose: Assets.nose.default,
  };
  const [styles, setStyles] = useState(initialStyles);

  const value = { styles, setStyles };
  return (
    <AssetsContext.Provider value={value}>
      <div className=" flex items-center justify-center min-h-screen py-4 ">
        <div className="flex flex-col gap-5 md:flex-row md:gap-9 items-center">
          <div className="flex flex-col gap-4">
            <h1 className="  text-4xl  font-bold text-blue-500">
              ALPHA IMAGE GENERATER
            </h1>
            <div>
              <AlphaImage />
            </div>
            <div className="flex items-center justify-around">
              <ImageRandomizer />
              <ImageDownloder />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <Costomization />
          </div>
        </div>
      </div>
    </AssetsContext.Provider>
  );
};

export default App;
