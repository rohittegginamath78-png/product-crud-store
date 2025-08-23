import { atom } from "recoil";

// global state for products
export const productsState = atom({
  key: "productsState",   // unique ID (must be unique in your app)
  default: [],            // initial value
});
