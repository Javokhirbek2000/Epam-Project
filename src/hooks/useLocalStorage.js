import { createLocalStorageStateHook } from "use-local-storage-state";

export const useFavorites = createLocalStorageStateHook("favorites", []);
