import React, { useContext } from "react";
import AssetsContext from "../context/AssestContext";

const AlphaImage = () => {
  const { styles } = useContext(AssetsContext);

  return (
    <div
      className="bg-cover relative rounded-md w-[400px] h-[400px] "
      id="alpacaImg"
      style={{ backgroundImage: `url(${styles.background})` }}
    >
      <img
        src={styles.ears}
        alt="ears"
        className="absolute top-0 left-0 z-10"
      />
      <img
        src={styles.eyes}
        alt="eyes"
        className=" absolute  -top-5 left-15 z-80 w-[80%]"
      />
      <img
        src={styles.hair}
        alt="hair"
        className="absolute top-0 left-0 z-30  "
      />
      <img
        src={styles.accessories}
        alt="accessories"
        className="absolute top-0 left-0 z-90 w"
      />
      <img
        src={styles.leg}
        alt="leg"
        className="absolute top-0 left-0 z-100 "
      />
      <img
        src={styles.mouth}
        alt="mouth"
        className="absolute -top-5 left-0 z-100"
      />
      <img
        src={styles.neck}
        alt="neck"
        className="absolute top-0 left-0 z-70"
      />
      <img
        src={styles.nose}
        alt="nose"
        className="absolute top-0 left-0 z-100"
      />
    </div>
  );
};

export default AlphaImage;
