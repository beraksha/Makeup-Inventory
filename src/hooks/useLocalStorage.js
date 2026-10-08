import { useEffect, useState } from "react";

// useState that survives page reloads by mirroring its value into localStorage.
export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      /* storage full or blocked: the app still works, it just won't persist */
    }
  }, [key, value]);

  return [value, setValue];
}
