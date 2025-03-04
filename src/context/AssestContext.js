import { createContext } from "react";

const AssetsContext = createContext({
  styles: {},
  setStyles: () => {},
});

export default AssetsContext;
