import { useCallback, useState, useLayoutEffect } from "react";

export default function useStorage(key, defaultValue) {
  return useStorageFn(key, defaultValue, window.localStorage);
}

function useStorageFn(key, defaultValue, storageObject) {
  const [value, setValue] = useState(() => {
    const jsonValue = storageObject.getItem(key);
    if (jsonValue != null) return JSON.parse(jsonValue);

    if (typeof defaultValue === "function") {
      return defaultValue();
    } else {
      return defaultValue;
    }
  });

  useLayoutEffect(() => {
    if (value === undefined) return storageObject.removeItem(key);
    storageObject.setItem(key, JSON.stringify(value));
  }, [key, value, storageObject]);

  const remove = useCallback(() => {
    setValue(undefined);
  }, []);
  const clear = useCallback(() => {
    storageObject.removeItem(key);
    setValue(defaultValue);
  }, [key, defaultValue, storageObject]);

  return { value, set: setValue, remove, clear };
}
