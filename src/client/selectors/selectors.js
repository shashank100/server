import { get } from "lodash";

export const getStores = (state) => {
  const stores = get(state, "storesInfo", []);
  return stores;
};
