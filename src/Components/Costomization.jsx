import React, { useContext, useEffect, useState } from "react";
import { Assets } from "../assets/Assets";
import Button from "./Button";
import AssetsContext from "../context/AssestContext";

const Costomization = () => {
  const { styles, setStyles } = useContext(AssetsContext);
  const [buttonGroup, setButtonGroup] = useState({});
  const [styleCategoryIndex, setStyleCategoryIndex] = useState("background");

  useEffect(() => {
    setButtonGroup(Assets[styleCategoryIndex]);
  }, [setStyleCategoryIndex]);

  const updateStyleButtons = (e) => {
    const styleCategoryBtnTxt = e.target.innerText;
    setStyleCategoryIndex(styleCategoryBtnTxt);
    setButtonGroup(Assets[styleCategoryBtnTxt]);
  };

  const updateStyle = (e) => {
    const styleValue = e.target.innerText;

    setStyles({
      ...styles,
      [styleCategoryIndex]: Assets[styleCategoryIndex][styleValue],
    });
  };
  return (
    <>
      <div className="flex flex-col items-center md:item-start gap-y-2">
        <div className="flex flex-wrap gap-2 max-w-[450px] p-4 border-red-700 rounded-lg">
          {Object.keys(Assets).map((key) => (
            <Button
              key={key}
              styles="rounded-3xl px-4 py-2 focus:border-[3px] border-2 border-purple-800 text-purple-800 focus:outline-purple-800 hover:font-bold hover:border-[3px]"
              btnText={key}
              handleClick={updateStyleButtons}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center md:item-start gap-y-2">
        <div className="flex flex-wrap gap-2 max-w-[450px] p-4 border-red-700 rounded-lg">
          {Object.keys(buttonGroup).map((key, index) => (
            <Button
              key={index}
              styles="rounded-3xl px-4 py-2 focus:border-[3px] border-2 border-purple-800 text-purple-800 focus:outline-purple-800 hover:font-bold hover:border-[3px]"
              btnText={key}
              handleClick={updateStyle}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Costomization;
