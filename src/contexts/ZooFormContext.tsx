/**
 * This context collects the user responses to the zoo form.
 */
import { createContext } from "react";
import zooQnsReducerPair from "../types/unions/zooQnsReducerPair";

const ZooFormContext = createContext<zooQnsReducerPair | null>(null);

export const ZooFormContextProvider = ZooFormContext.Provider;
export default ZooFormContext;
